import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // 
  const {adminToken} = useContext(AdminContext);


  return (
    <div className='h-screen bg-white border-r w-64 flex-shrink-0'>
      {
        adminToken && <ul className='text-[#515151] mt-5'>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-cyan-700 font-semibold" : ""}`}  to={"/admin-dashboard"}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-cyan-700 font-semibold" : ""}`}  to={"/all-lecture"}>
            <img src={assets.appointment_icon} alt="" />
            <p>Lecture</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-cyan-700 font-semibold" : ""}`} to={"/add-teacher"}>
            <img src={assets.add_icon} alt="" />
            <p>Add Teacher</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-60 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-cyan-700 font-semibold" : ""}`} to={"/teacher-list"}>
            <img src={assets.people_icon} alt="" />
            <p>Teachers List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar