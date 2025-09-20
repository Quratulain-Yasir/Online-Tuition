import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col sm:flex-row bg-cyan-700 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-5 md:my-20 md:mx-10">
        {/* left */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:pl-3'>
<div className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>
    <h2 className='text-orange-50'> Book Lectures</h2>
<h2 className='mt-3 text-orange-50'>with 100+ Trusted Teachers</h2>
</div>
<button onClick={()=> {navigate(`/login`); scrollTo(0 , 0)}}  className='bg-orange-50 text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out' >Create Account</button>
        </div>
        <div className="w-full md:w-1/2 lg:w-[370px] relative">
            <img className="w-full md:absolute md:bottom-0 md:right-0 max-w-md" src={assets.appointment_img} alt="appointment_img" />
        </div>
    </div>
  )
}

export default Banner