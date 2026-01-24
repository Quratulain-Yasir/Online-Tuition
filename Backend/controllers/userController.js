import validator from "validator";
import bcrypt from "bcrypt";
import teacherModel from "../models/teacherModel.js";
import studentModel from "../models/studentModel.js";
import lectureModel from "../models/lectureModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

// api to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "enter a valid email" });
    }


    // password check
    if (password.length < 8) {
      return res.json({ success: false, message: "enter a strong password" });
    }
    // hash password to add user in db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newuser = new studentModel(userData);
    const std = await newuser.save();

    const token = jwt.sign({ id: std._id }, process.env.SECRET_KEY);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// api to login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const std = await studentModel.findOne({ email });
    if (!std) {
      return res.json({ success: false, message: "user does not exist" });
    }
    const isMatch = await bcrypt.compare(password, std.password);

    if (isMatch) {
      const token = jwt.sign({ id: std._id }, process.env.SECRET_KEY);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// api to get profile data
const getProfile = async (req, res) => {
  try {
    const stdId = req.stdId;
    const stdData = await studentModel.findById(stdId).select("-password");
    res.json({ success: true, stdData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api to update student profile
const updateProfile = async (req, res) => {
  try {
    const stdId = req.stdId;
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !address || !dob || !gender) {
      return res.json({ success: false, message: "Missing data" });
    }
    // save stdData in Stdmodel
    await studentModel.findByIdAndUpdate(stdId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      // upload on cloudinary]
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageURL = imageUpload.secure_url;
      await studentModel.findByIdAndUpdate(stdId, { image: imageURL });
    }
    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// book lecture
const bookLecture = async (req, res) => {
  try {
    const stdId = req.stdId;
    const { teachId, slotDate, slotTime } = req.body;
    // using teachId access teach data
    const teachData = await teacherModel.findById(teachId).select("-password");
    if (!teachData.avalibility) {
      return res.json({ success: false, message: "Teacher not avalible" });
    }

let slots_booked = typeof teachData.slots_booked === "object" && teachData.slots_booked !== null
  ? teachData.slots_booked
  : {};

    // checking slots_avalibility
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "slots not avalible" });
      } else {
        // if slotTime is not include so include it
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      // if date is not avalible means nobody booked i this data , so crete slotDate and push slotTime

      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    // stdData get from model
    const stdData = await studentModel.findById(stdId).select("-password");
    delete teachData.slots_booked;

    const lectureData = {
      stdId,
      teachId,
      teachData,
      stdData,
      amount: teachData.fees,
      slotDate,
      slotTime,  
      date: Date.now(),
    };

    const newlecture = new lectureModel(lectureData);
    await newlecture.save();

    // store new slot data in teachData

    await teacherModel.findByIdAndUpdate(teachId, { slots_booked });

    res.json({ success: true, message: "lecture Booked" });
  } catch (error) { 
    res.json({ success: false, message: error.message });
  }
};

// Api to get My-lectures data for frontend
const  listLecture = async (req,res) => {
  try {
    const  stdId  = req.stdId;
    const lectures = await lectureModel.find({ stdId })    
    res.json({ success: true , lectures });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// API to cancel lecture
const cancelLecture = async(req,res) => {
  try {
    const {userId , lectureId} = req.body;
    const lectureData = await lectureModel.findById(lectureId)
    if(lectureData.userId !== userId) {
      return res.json({success: false , message:"unauthorized action"})
    }
    await lectureModel.findByIdAndUpdate(lectureId , {cancelled:true}) 
    const {teachId , slotDate , slotTime } = lectureData;
    const teacherData = await teacherModel.findById(teachId)
    let slots_booked = teacherData.slots_booked;
// find the booking object for this date 
let slotObj = slots_booked.find(obj => obj.slotDate === slotDate); 
if (slotObj) { 
  slotObj.slotTime = slotObj.slotTime.filter(time => time !== slotTime); }

    await teacherModel.findByIdAndUpdate(teachId, {slots_booked})
    res.json({success:true, message:"appointment cancelled" })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// API for payment through razorpay
const razorpayInstance = {
  id: process.env.razorpay_id ,
  secret : process.env.razorpay_secret
}

const razorpayPayment = async (req, res) => {
  try {
    const {lectureId} = req.body;
    const lectureData = await lectureModel.findById(lectureId)
   if(!lectureData || lectureData.cancel){
    res.json({ success: false, message: "unauthorized to proceed payment" });
   }
   const options = {
    amount : lectureData.amount * 100 , 
    currency: process.env.CURRENCY,
    recipit: lectureId , 
   }

  //  create order
  const order = await razorpayInstance.order.create(options)
  res.json({success : True , order })
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}


export { registerUser, loginUser, getProfile, updateProfile, bookLecture , listLecture , cancelLecture };
