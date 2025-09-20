import React from 'react'
import {assets} from "../assets/assets.js"
import { toast } from "react-toastify";
import axios from "axios"
import { useContext , useState } from 'react';
import {AdminContext} from "../context/AdminContext.jsx"

const Login = () => {

  const [state , setState] = useState("Admin")
  const {setAdminToken , backendUrl} = useContext(AdminContext)
 const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

const onSubmitHandler = async (event) => {
  event.preventDefault();
  try{
if(state === "Admin"){
  // now start api call
  const {data} = await axios.post(backendUrl + "/api/admin/login" , {email,password});
 if(data.success){ 
localStorage.setItem("adminToken",  data.token)
setAdminToken(data.token)
 } else{
  toast.error(data.message)
 }
} else{
  {state === "Teacher"}
}
  } catch(error){
    toast.error(error.message)
  }
}

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'> 
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-cyan-700'>{state}</span> Login </p>
        <div className='w-full'>
          <p>Email : </p>
          <input type="email" className='border border-[#DADAD] rounded w-full p-2 mt-1' value={email} onChange={(e)=> setEmail(e.target.value)} required />
        </div>
        <div className='w-full'>
          <p>Pssword</p>
          <input type="password" className='border border-[#DADAD] rounded w-full p-2 mt-1' value={password} onChange={(e)=> setPassword(e.target.value)}  required />
        </div>
        <button className='bg-cyan-700 text-white w-full rounded-md py-2 text-base'>Login</button>
        {
          state === "Admin" ? <p>Teacher Login ? <span onClick={()=>setState("Teacher")} className='text-cyan-700 underline cursor-pointer' >Click here</span></p> :  <p>Admin Login ? <span onClick={()=>setState("Admin")} className='text-cyan-700 underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login