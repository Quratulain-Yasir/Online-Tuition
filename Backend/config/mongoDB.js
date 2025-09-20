import mongoose from "mongoose";

const connectDB = async () => {
mongoose.connection.on("connected" , ()=> console.log("DATABASE"))
await mongoose.connect(`${process.env.MONGODB_URL}/OnlineTuition`)    
}

export default connectDB