import express from "express";
import { teacherList } from "../controllers/teacherController.js";

const teacherRoute = express.Router();


teacherRoute.get("/list" , teacherList)

export default teacherRoute