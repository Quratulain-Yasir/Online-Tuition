import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom"; 
import { AppContext } from "../context/AppContext.jsx";
 


const Navbar = () => {

  const [menu , setMenu] = useState(false)
  const [login, setLogin] = useState("");

  const {token , setToken , stdData} = useContext(AppContext)

  const logout = () => { 
    setToken(false)
    localStorage.removeItem("token")
    
  }
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray">
      
        <img  className="w-44 cursor-pointer" src={assets.logo} alt="" />
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <NavLink to="/">
            <li className="py-1 px-1 text-base hover:text-[18px] transition-all duration-300 ease-in-out">Home</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 text-orange-50 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1 px-1 text-base hover:text-[18px] transition-all duration-300 ease-in-out">About</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 text-orange-50 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/teachers">
            <li className="py-1 px-1 text-base hover:text-[18px] transition-all duration-300 ease-in-out">All Teachers</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 text-orange-50 w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contactus">
            <li className="py-1 px-1 text-base hover:text-[18px] transition-all duration-300 ease-in-out">Contact</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 text-orange-50 w-3/5 m-auto hidden"  />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? 
          <div className="flex items-center gap-2 cursor-pointer group relative">
<div className="w-13 h-13 rounded-full overflow-hidden">
  <img
    src={stdData?.image}
    className="w-full h-full object-cover"
    alt=""
  />
</div>
<img className="w-2.5" src={assets.dropdown_icon} alt="" />
<div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden  group-hover:block">
  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
    <p className="hover:text-black cursor-pointer" onClick={()=> navigate("/student-profile")}>My Profile</p>
    <p className="hover:text-black cursor-pointer" onClick={()=> navigate("/my-lectures")} >My Lectures</p>
    <p className="hover:text-black cursor-pointer" onClick={logout} >Logout</p>
  </div>
</div>
          </div> : <button onClick={()=> navigate("/login")} className="bg-cyan-700 text-orange-50 px-8 py-3 rounded-full font-light hidden md:block">Create Account</button> }

          <img onClick={()=> setMenu(true)} src={assets.menu_icon} alt="menu_icon" className="w-6 md:hidden" />
                 {/* for small screen */}
       <div className={
`${menu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`
        }>
<div className="flex items-center justify-between px-5 py-6">
  <img onClick={() => setMenu(false)} className="w-7" src={assets.cross_icon} alt="cross_icon" />
</div>
<ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
  <NavLink to="/" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 rounded inline-block">Home</p>
  </NavLink>

    <NavLink to="/about" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 rounded inline-block">About</p>
  </NavLink>
  
    <NavLink to="/teachers" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 rounded inline-block">All Teachers</p>
  </NavLink>
  
    <NavLink to="/contactus" onClick={()=> setMenu(false)}>
  <p className="px-4 py-2 rounded inline-block">Contact</p>
  </NavLink>
</ul>
       </div>
        </div>

    </div>
  );
};

export default Navbar;
