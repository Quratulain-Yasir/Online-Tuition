// multiple controller function for multiple api

import teacherModel from "../models/teacherModel.js" 


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


//  
const teacherList = async (req , res) => {
try {
   const teachers = await teacherModel.find({}).select(["-password" , "-email"])  
      res.json({success:true , teachers}) 
} catch (error) {
   console.log(error)
        res.json({success:false , message:error.message})
}
}



export {changeAvalibility,teacherList}