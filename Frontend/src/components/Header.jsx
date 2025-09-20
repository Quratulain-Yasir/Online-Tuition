import React from 'react'
import { assets } from '../assets/assets_frontend/assets';
const Header = () => {
  return (
 
<div className='flex flex-col-reverse md:flex-row flex-wrap bg-cyan-700 rounded-lg px-5 md:px-10 lg:px-20'>
    {/* left */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 py-10 m-auto md:py-[10vh] md:mb-[-30px] left">
<h1 className='text-4xl  text-orange-50 font-semibold leading-tight lg:tracking-wide'>
Book Online Lectures <br /> With Trusted Teachers
</h1>
<div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
    <img className="w-28" src={assets.group_profiles} alt="group_profiles" />
    <p>Simply browse through our extensive list of trusted teachers , <br className="hidden sm:block" /> schedule your online lecture</p>
</div>
<a className='flex items-center gap-2 bg-orange-50 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out' href="#speciality">Start Free Trial<img className='w-3' src={assets.arrow_icon} /> </a>
        </div>
        {/* right */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="header_img" />
        </div>
</div>
  
  )
}

export default Header;