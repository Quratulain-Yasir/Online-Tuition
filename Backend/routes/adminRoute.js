import express from "express"

import {addTeach,adminLogin , allTeachers, cancelLecture, lecturesAdmin, dashboardData } from "../controllers/adminController.js";

import  upload  from "../middleware/multer.js"
import authAdmin from "../middleware/authAdmin.js";
import { changeAvalibility } from "../controllers/teacherController.js";

const adminRoute = express.Router();


adminRoute.post("/add-teacher" , authAdmin , upload.single("image") , addTeach )

adminRoute.post("/login" , adminLogin )

adminRoute.post("/all-teachers" , authAdmin , allTeachers )

adminRoute.post("/change-avalibility" , authAdmin , changeAvalibility )

adminRoute.post("/all-lectures" , authAdmin , lecturesAdmin )

adminRoute.post("/cancel-lecture" , authAdmin , cancelLecture )

adminRoute.post("/admin-dashboard" , authAdmin , dashboardData )
export default adminRoute