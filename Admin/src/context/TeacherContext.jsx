import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const TeacherContext = createContext()

const TeacherContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [tToken, setTToken] = useState(
    localStorage.getItem("tToken")
      ? localStorage.getItem("tToken")
      : "")

      const [lectures, setLectures] = useState([]) 
      const [dashData , setDashData] = useState(false)
      
      const [ profileData , setProfileData] = useState(false)
      const getLectures = async ( ) => {
        try {
            const {data} = await axios.get(backendUrl + "/api/teacher/lectures" , {headers:{tToken}})
            if(data.success){
                setLectures(data.lectures) 
            } else{
                toast.error(data.message)
            }
        } catch (error) { 
            toast.error("Error in getting lectures" + error.message)
        }
      }

    //   confirm lecture
    const confirmLecture = async (lectureId) => {
        try {
            const {data} = await axios.post(backendUrl + "/api/teacher/confirm-lecture" , {lectureId} , {headers:{tToken}})
            if(data.success){
                toast.success(data.message)
                getLectures() 
                console.log(data)
            } else{
                toast.error(data.message)
            }
        } catch (error) { 
            toast.error(error.message)
        }
    }
    // cancel lecture 
      const cancelLecture = async (lectureId) => {
        try {
            const {data} = await axios.post(backendUrl + "/api/teacher/cancel-lecture" , {lectureId} , {headers:{tToken}})
            if(data.success){
                toast.success(data.message)
                getLectures()  
            } else{
                toast.error(data.message)
            }
        } catch (error) { 
            toast.error(error.message)
        }
    }

// Dashboard data
const getDashData = async () => {
    try {
        const {data} = await axios.get(backendUrl + "/api/teacher/dashboard" , {headers : {tToken}})
        if(data.success) {
          setDashData(data.dashData)
          toast.success(data.message)
          console.log(data.dashData)
        } else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}

// profile data
const getProfileData = async () => {
    try {
        const {data} = await axios.get(backendUrl + "/api/teacher/teacherprofiledata" , {headers:{tToken}})
        if(data.success) {
            setProfileData(data.teacherData) 
        } else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}

    const value = {
tToken, setTToken , backendUrl, lectures, setLectures , getLectures , confirmLecture , cancelLecture , getDashData , dashData , setDashData , setProfileData , profileData , getProfileData
    }
    return(
        <TeacherContext.Provider value={value}>
            {props.children}
        </TeacherContext.Provider>
    )
}
export default TeacherContextProvider