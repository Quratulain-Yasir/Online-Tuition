import React, { useContext } from 'react'
import  logo  from '../assets/logo.png'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {adminToken , setAdminToken} = useContext(AdminContext);
    const navigate = useNavigate()

    const logout = () => {
        navigate("/")
        adminToken && setAdminToken("")
        adminToken && localStorage.removeItem("adminToken")
    }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
        <div className="flex items-center gap-2 text-xs">
            <img src={logo} alt="logo" className="w-44 cursor-pointer" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{adminToken? "Admin" : "Teacher"}</p>
        </div>
        <button onClick={logout} className="bg-cyan-700 text-white text-sm px-10  py-2 hover:font-semibold shadow-md hover:shadow-lg rounded-full transform hover:scale-110 transition-all duration-500">Logout</button>
    </div>
  )
}

export default Navbar