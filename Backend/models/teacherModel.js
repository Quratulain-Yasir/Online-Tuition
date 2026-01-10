import mongoose from "mongoose"

const teacherSchema = {
    name:{type:String , required:true} ,
    email:{type:String , required:true ,  unique:true} ,
    password:{type:String , required:true} , 
    image:{type:String , required:true} , 
    speciality: {type:String , required:true} , 
    degree: {type:String , required:true} , 
    experience: {type:String , required:true} ,
    about: {type:String , required:true} ,
    fees: {type:Number , required:true} , 
    address: {type:Object , required:true} , 
    avalibility: {type:Boolean , default:true} ,
    date: {type:Number , required:true} , 
    slots_booked:{
    type: [
      {
        slotDate: { type: String, required: true },
        slotTime: { type: [String], required: true , default: [] }
      }
    ],
    default: []
  }
}
const teacherModel = mongoose.model("teacher" , teacherSchema)

export default teacherModel