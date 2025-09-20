import React from 'react'
import {assets} from "../assets/assets_frontend/assets"
const About = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-cyan-700">
      <h1>ABOUT <span className="text-cyan-500 font-medium">US</span> </h1>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 sm:gap-40">
        <img className="mx-auto sm:mx-0 max-w-[260px] rounded-full" src={assets.about1_img} alt="about_img" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm sm:text-lg text-gray-600">
        <p>
          Wellcome to OnlineTuition , your trusted partner in managing your
          healthcare Needs Conveniently And Efficienctly.
          At prescripto , We Understand the challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing their Health Records.
        </p>
        <p>OnlineTuition is committed to excellence in healthcare Technology.WE continously Strive To Enhance Our Platform , Integrating the Latest Advancements To improve User Experience And Deliver SSuperior Service . Whether You're Booking Your First Appointment Or Managing Ongoing Care , OnlineTuition is Here to Support You Every Step Of The Way. </p>
        </div>
      </div>
{/* center */}
<div className="flex flex-col md:flex-row mb-20">
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 hover:bg-cyan-700 hover:text-orange-50 hover:text-[16px] transition-all duration-300  cursor-pointer">
<b>Effciency:</b>
<p>Streamlined appointment scheduling that fits in to your busy lifestyle.</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-cyan-700 hover:text-orange-50 hover:text-[16px] transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
  </div>
    <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-cyan-700 hover:text-orange-50 hover:text-[16px] transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you story on top of your health.</p>
  </div>
</div>

      {/*  */}
      <div className="my-30 flex flex-col md:flex-row gap-12 sm:gap-20">
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
       <b className="text-cyan-700 text-3xl text-center sm:text-start">Our Vision</b>
        <p>
          Our vision at OnlineTuition is to create a seamless learning experience for every user . We aim to bridge the gap between students , making it easier for you to access the care you need , when you need it . 
          for every
        </p>
        </div>
        <img className="max-w-[360px] mx-auto sm:mx-0 rounded-full" src={assets.about2_img} alt="" />
      </div>
    </div>
  )
}

export default About