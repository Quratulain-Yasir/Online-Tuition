import mongoose from "mongoose";

const lectureSchema = {
  stdId: { type: String, required: true },
  teachId: { type: String, required: true },
  slotData: { type: String, required: true },
  slotTime: { type: String, required: true },
  stdData: { type: Object, required: true },
  teachData: { type: Object, required: true },
  amount: { type: Number, required: true },
  date : {
    type:Number , required:true
  },
    cancelled : {
    type:Boolean , default:false
  },
    payment : {
    type:Boolean , default:false
  },
    isCompleted : {
    type:Boolean , default:false
  },
};
const lectureModel =
  mongoose.model.lecture || mongoose.model("lecture", lectureSchema);

export default lectureModel;
