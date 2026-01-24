// multiple controller function for multiple api

import teacherModel from "../models/teacherModel.js";
import lectureModel from "../models/lectureModel.js";
import validator from "validator";
import {v2 as cloudinary} from "cloudinary";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



// api for adding teachers data from request.body
// >>send data using formdata

const addTeach = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    if (
      !name ||
      !email ||
      !password || 
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
       return res.json({success : false , message : "Missing Details"});
       
    }

    // email validator
    if (!validator.isEmail(email)) {
      return res.json({success : false , message : "enter valid email"});
    }
    // strong password validation
    if (password.length < 8) {
      return res.json({success : false , message : "please enter a strong password"});
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password , salt);

    // image upload  on cloudniary process
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const TeachData = {
      name,
      email,
      image: imageUrl,
      password: hashPassword,
      speciality,
      degree,
      experience,
      about,
      fees, 
      address: JSON.parse(address),
      date: Date.now(),
      slots_booked: 0,
    };

    const newTeach = new teacherModel(TeachData);
    await newTeach.save();

    res.json({success : true, message : "Teacher Added!"});
  } catch (error) {
    console.error(error);
    res.json({success:false , message:error.message})}
};



// API FOR ADMIN LOGIN
const adminLogin = async (req , res) => {
try {
  const {email , password} = req.body;
  if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
    const token = jwt.sign(email+password , process.env.SECRET_KEY)
    // send token as response
    res.json({success:true, token})
  } else{
    res.json({success:false, message:"Invalid credentials"})
  }
} catch (error) { 
    res.json({success:false , message:error.message})
}
}

// API TO GET ALL TEACHERS DATA
const allTeachers = async (req,res) =>{
  try {
    const teachers = await teacherModel.find({}).select('-password')
    res.json({success:true, teachers})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}

// API to get all lecture data
const lecturesAdmin = async (req,res) => {
  try {
    const lectures = await lectureModel.find({})
    res.json({success:true , lectures})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

// API to cancel lecture by admin
const cancelLecture = async(req,res) => {
  try {
    const {lectureId} = req.body;
    const lectureData = await lectureModel.findById(lectureId)
  
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

export { addTeach , adminLogin , allTeachers , lecturesAdmin, cancelLecture } 