import { createContext, useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"



export const AdminContext = createContext()


const AdminContextProvider = (props) => {

const [teachers , setTeachers] = useState([]);


// state variable to store token
const [adminToken , setAdminToken] = useState(localStorage.getItem("adminToken")? localStorage.getItem("adminToken") : "")
const  backendUrl = import.meta.env.VITE_BACKEND_URL


// 
const getAllTeachers = async (req , res) => {
    try {
        const {data} = await axios.post(`${backendUrl }/api/admin/all-teachers` , {} , {headers : {adminToken}})
        if(data.success){
            setTeachers(data.teachers)
        } else{
            toast.error(data.error)
        }
    } catch (error) { 
        toast.error(error.message)
    }
}

// 
const changedAvailibility = async (teachId) =>{
try {
    const {data} = await axios.post(backendUrl + "/api/admin/change-avalibility" , {teachId} , {headers: {adminToken}})
    if(data.success){
        toast.success(data.message)
        getAllTeachers()
    } else{
        toast.error(data.message)
    }
} catch (error) {
    toast.error(error.message)
}
}




    const value = {
adminToken , setAdminToken ,backendUrl , teachers , getAllTeachers , changedAvailibility
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider