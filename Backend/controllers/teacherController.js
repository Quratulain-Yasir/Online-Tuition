// multiple controller function for multiple api

import teacherModel from "../models/teacherModel.js" 
import lectureModel from "../models/lectureModel.js" 
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const changeAvalibility = async (req , res) => {
    const {teachId} = req.body;

     try {
        const teachData = await teacherModel.findById(teachId)
        // avalibility change logic 
        await teacherModel.findByIdAndUpdate(teachId , {avalibility: !teachData.avalibility})
        res.json({success:true , message:"Avalibility Changed"})
     } catch (error) {
        res.json({success:false , message:error.message})
     }
}


//  teacher list controller
const teacherList = async (req , res) => {
try {
   const teachers = await teacherModel.find({}).select(["-password" , "-email"])  
      res.json({success:true , teachers}) 
} catch (error) { 
        res.json({success:false , message:error.message})
}
}

// login teacher API controller

const loginTeacher = async ( req , res) => {
   try {
      const { email , password } = req.body;
      const teacher = await teacherModel.findOne({ email })
     if(!teacher){
      res.json({success:false , message:"Invalid Credentials"})
     }
     const isMatch = bcrypt.compare(password , teacher.password)
     if(isMatch) {
      const token = jwt.sign({teacherId:teacher._id} , process.env.SECRET_KEY)
      res.json({success:true , token})
     } else{
      res.json({success:false , message: "Invalid Credentials"})
     }
   } catch (error) {
      res.json({success:false , message:error.message})
   }
}

// API to get all Appointments of specific teacher 

const teacherLectures = async ( req , res) => {
   try {
      const teachId = req.teachId; 
      const lectures = await lectureModel.find({ teachId });
 
    return res.json({success:true , lectures})  

   } catch (error) {
      console.log("Error in teacher lectures API " + error.message)
      return res.json({success:false , message:error.message})
   }
}

// API to confirm lecture by teacher
const confirmLecture = async (req , res) => {
   try {
      const teachId = req.teachId;
      const { lectureId } = req.body;
const lectureData = await lectureModel.findById( lectureId );
if(lectureData && lectureData.teachId === teachId){
   await lectureModel.findByIdAndUpdate( lectureId , { isCompleted:true})
   return res.json({ success:true , message:"Lecture Confirmed"})
} else{
   return res.json({success:false , message:"Mark Failed"})
}
   } catch (error) {
      console.log("Error in teacher lectures API " + error.message)
      res.json({success:false , message:error.message})
   }
}
// API to cancel lecture by teacher
const cancelLecture = async (req , res) => {
   try {
      const teachId = req.teachId;
      const { lectureId } = req.body;
const lectureData = await lectureModel.findById( lectureId );
if(lectureData && lectureData.teachId === teachId){
   await lectureModel.findByIdAndUpdate( lectureId , { cancelled:true})
   return res.json({ success:true , message:"Lecture Cancelled"})
} else{
   return res.json({success:false , message:"Cancellation Failled"})
}
   } catch (error) {
      console.log(error.message)
      res.json({success:false , message:error.message})
   }
}

const dashboardData = async (req , res) => {
   try {
      const teachId = req.teachId;
      const lectures = await lectureModel.find({ teachId })
      // earning
      let earning = 0    
      lectures.map((item)=> {
         if( item.isCompleted || item.payment ) {
             earning += item.amount
         }
   })

         // students
      let student = [] 
      lectures.map((item)=> {
         if( !student.includes(item.stdId)) {
             student.push(item.stdId)
         }
   })

   const dashData = {
      earning ,
      student : student.length ,
      lectures : lectures.length , 
      latestlecture : lectures.reverse().slice(0,5)
   }

   res.json({ success: true , dashData})
   } catch (error) {
            console.log(error.message)
      res.json({success:false , message:error.message})
   }
}


// Teacher profile data for teacher panel 

const teacherProfileData = async ( req , res ) => {
   try {
      const teachId = req.teachId 
      const teacherData = await teacherModel.findById(teachId).select("-password")
      return res.json({success:true , teacherData})
   } catch (error) {
      console.log(error.message)
      res.json({success:false , message:error.message})
   }
}

// Teacher profile data update for teacher panel 

const teacherProfileDataUpdate = async ( req , res ) => {
   try {
      const teachId = req.teachId 
      const { fees , avalibility } = req.body
            const teacherDataUpdate = await teacherModel.findByIdAndUpdate(teachId , {
               fees , avalibility
            })
      return res.json({success:true , teacherDataUpdate})
   } catch (error) {
      console.log(error.message)
      res.json({success:false , message:error.message})
   }
}




export { 
   changeAvalibility, 
   teacherList, 
   loginTeacher, 
   teacherLectures, 
   cancelLecture  , 
   confirmLecture , 
   dashboardData , 
   teacherProfileData , 
   teacherProfileDataUpdate  }