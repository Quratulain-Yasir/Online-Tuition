import express from "express" ;
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongoDB.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import adminRoute from "./routes/adminRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
// port
const port = process.env.PORT || 5501
connectDB()
connectCloudinary()
// define middleware
app.use(express.json())
app.use(cors())

app.use("/api/admin" , adminRoute)
app.use("/api/teacher" , teacherRoute)
app.use("/api/user" , userRoute)

 
// api endpoints
app.get("/" , (req , res)=>{
    res.send("API WORKKING")
})

app.listen(port , ()=>{
    console.log("app is running" , port)
})