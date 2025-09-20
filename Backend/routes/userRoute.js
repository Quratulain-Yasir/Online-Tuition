import express from "express"
import {registerUser , loginUser , getProfile, updateProfile, bookLecture , listLecture } from "../controllers/userController.js";
 
const userRoute = express.Router();
import upload from "../middleware/multer.js"
import authUser from "../middleware/authUser.js"


userRoute.post("/register" , registerUser)

userRoute.post("/login" , loginUser)

userRoute.get("/get-profile" , authUser , getProfile)

userRoute.post("/update-profile" , upload.single("image") , authUser , updateProfile)

userRoute.post("/book-lecture" , authUser , bookLecture)

userRoute.get("/lectures" , authUser , listLecture)

// 
export default userRoute