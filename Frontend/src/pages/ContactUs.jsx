import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10  text-cyan-700'>
        <h1>CONTACT <span  className='text-cyan-500 font-semibold'>US</span></h1>
      
      <div  className='my-10 flex flex-col justify-center md:flex-row gap-10 sm:gap-30 text-sm'>
        <img  className='w-full md:max-w-[360px] rounded-lg'  src={assets.contact_img} alt="" />
       <div className='flex flex-col justify-center items-center sm:items-start gap-6'>
<h2 className='font-semibold text-lg text-gray-600'>OUR OFFICE</h2>
<p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Faisalabad,Pakistan</p>
<p className='text-gray-500'>Tel:(+92) 0325876513 <br />  Email:gratePakistan@developer.com</p>
<p className='font-semibold text-lg text-gray-600'> CAREERS AT ONLINETUITION</p>
<p className='text-gray-500'>learn more about our teams and job openings</p>
<button className='border border-cyan-700 px-8 py-4 text-sm text-cyan-700 hover:bg-cyan-700 hover:text-orange-50 transition-all duration-500 rounded-lg'>Explore Jobs</button>
</div>
      </div>
     
      </div>
     {/* contact form */}
     <ContactForm />
    </div>
  )
}

export default ContactUs