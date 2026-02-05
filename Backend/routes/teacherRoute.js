import express from "express";
import { loginTeacher, teacherList , teacherLectures, confirmLecture, cancelLecture , dashboardData, teacherProfileData, teacherProfileDataUpdate } from "../controllers/teacherController.js";
import authTeacher from "../middleware/authTeacher.js";

const teacherRoute = express.Router();


teacherRoute.get("/list" , teacherList)
teacherRoute.post("/login" , loginTeacher)
teacherRoute.get("/lectures" , authTeacher , teacherLectures)
teacherRoute.post("/confirm-lecture" , authTeacher , confirmLecture)
teacherRoute.post("/cancel-lecture" , authTeacher , cancelLecture)
teacherRoute.get("/dashboard" , authTeacher , dashboardData)
teacherRoute.get("/teacherprofiledata" , authTeacher , teacherProfileData)
teacherRoute.post("/profiledataupdate" , authTeacher , teacherProfileDataUpdate)

export default teacherRoute