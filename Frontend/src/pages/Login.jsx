import React, { useContext , useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [isState, setIsState] = useState("Sign Up");
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

const {backendUrl , token , setToken} = useContext(AppContext)
const navigate = useNavigate()

  const HandleDefault = async (e) => {
    e.preventDefault();

if( isState === "Sign Up" ){
  const {data} = await axios.post(backendUrl + "/api/user/register" , {name , email , password})
  if(data.success){
    localStorage.setItem("token" , data.token)
    setToken(data.token)
  } else{
    toast.error(data.message)
  }
} else{
    const {data} = await axios.post(backendUrl + "/api/user/login" , { email , password})
  if(data.success){
    localStorage.setItem("token" , data.token)
    setToken(data.token)
  } else{
    toast.error(data.message)
  }
}


  };

  useEffect(()=>{
    if(token){
navigate('/')
    }
  },[token])
  return (
    <form onSubmit={HandleDefault} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border border-cyan-700 rounded-xl text-zinc-600 text-sm shadow-lg">
        <h1 className="text-2xl font-semibold">{isState === "Sign Up" ? "Create Account" : "Login"}</h1>
        <p>
          Please {isState === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        {isState === "Sign Up" ? (
          <div>
            <label htmlFor="name">Name</label>{" "}
            <input className="border border-cyan-700 rounded w-full p-2 mt-1"
              type="text"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input className="border border-cyan-700 rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className="border border-cyan-700 rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="bg-cyan-700 text-orange-50 w-full py-2 rounded-md text-base" type="submit">
          {isState === "Sign Up" ? "Create Account" : "LogIn"}
        </button>
        {isState === "Sign Up" ? (
          <p>
            Already have an account?
            <span className="text-cyan-700 underline cursor-pointer" onClick={() => setIsState("login")}>login</span>
          </p>
        ) : (
          <p>
            Don't have an account?
            <span onClick={() => setIsState("Sign Up")} className="text-cyan-700 underline cursor-pointer">sign in</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
