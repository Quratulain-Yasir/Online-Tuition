 
import React , { createContext, useEffect, useState } from "react"
import axios from "axios";
import {toast} from "react-toastify"


// cerate shared data space
export const AppContext = createContext();
 
 
const AppContextProvider = (props) => {
const currencySymbol = "$";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
 
const [teachers , setTeachers] = useState([])
const [token , setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token") : false)
const [stdData , setStdData] = useState(null)


// 
const getTeachersData = async () => {

    try {
        const {data} = await axios.get(backendUrl + '/api/teacher/list')
         
        if(data.success) {
            setTeachers(data.teachers)
        } else{
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}
//
const loaduserProfileData = async () => {
   try {
     const {data} = await axios.get(backendUrl + `/api/user/get-profile` , {headers:{token}})
    if(data.success){
        setStdData({ ...data.stdData })
    } else{
        toast.error(data.message)
    }
   } catch (error) {
    toast.error(error.message)
   }
}
 
const value = {
    teachers , getTeachersData , currencySymbol , token , setToken , backendUrl , stdData , setStdData , loaduserProfileData,  
}   


useEffect(()=>{
getTeachersData()
},[])


 useEffect(()=>{
if(token){
    loaduserProfileData()
}  else{
    setStdData(null)
}
},[token])


return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
)
}
export default AppContextProvider