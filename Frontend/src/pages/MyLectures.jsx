import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';


const MyLectures = () => {
  const { backendUrl , token } = useContext(AppContext)
    const  [lectures , setLectures] = useState([])
  const navigate = useNavigate()



  const getUserLecture = async () => {
    try{
const {data} = await axios.get(backendUrl + `/api/user/lectures` , {headers: {token}})
console.log("API response:", data);
if(data.success) {
setLectures(data.lectures.reverse())
console.log(data.lectures)
toast.success(data.message)
}  
    } catch(error){
      console.log("Error fetching lectures:", error);
toast.error(error.message)
    }
  }

useEffect(()=>{
if (token) {
  getUserLecture();
  console.log(getUserLecture)
}
},[token])


  return (
    <div> 
        <h2 className='py-3 my-10 font-medium border-b bg-cyan-700 text-orange-50 rounded-full px-10 inline-block tracking-wide shadow-lg  shadow-cyan-700 cursor-pointer'>My Lectures</h2>
        <hr />
        <div>
            {
              lectures.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/lecture/${item._id}`);
                scrollTo(0, 0);
              }}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            >
              <img className="w-32 bg-indigo-50" src={item.teachDate.image} alt="teacher_pro" />
              <div className="flex-1 text-sm text-zinc-600">
                <h3 className='text-neutral-800 font-semibold'>{item.name}</h3>
                <p>{item.speciality}</p>
                {/* address */}
                <p className='text-zinc-700 font-medium mt-1 sm:mt-3'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>

                <p className='text-xs sm:mt-6 mt-2'><span className='text-sm text-neutral-700 font-medium'>Date&Time: </span>25,July,2025 | 10:08 PM</p>
              </div>

              <div></div>

<div className='flex flex-col gap-2 justify-end'>
<button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-full hover:bg-cyan-700 hover:text-orange-50 transition-all duration-300 shadow-lg'>Pay Online</button>
<button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-full hover:bg-red-600 hover:text-orange-50 transition-all duration-300 shadow-lg'>Cancel Lecture</button>
</div>
            </div>
          ))}
             <hr />
          {/* btn */}

        </div>
    </div>
  )

}

export default MyLectures