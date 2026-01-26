import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import {assets} from "../../assets/assets.js";

const AllLecture = () => {
  const { adminToken , lectures , getAllLectures , cancelLecture} = useContext(AdminContext)
  const { calculateAge , slotDateFormate , dollarCurrency } = useContext(AppContext)
 useEffect(() => {
  if(adminToken){
    getAllLectures()
  }
  }, [adminToken , getAllLectures])

  return (
    <div className='flex-1 max-w-6xl  m-5'>

      <p className='mb-3 text-lg font-medium'>All Lectures</p>
      <div className='bg-white border rounded text-sm h-[80vh] overflow-y-auto'>
        {/* name  */}
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
<p>#</p>
<p>Lecture</p> 
<p>Age</p>
<p>Date & Time</p>
<p>Teacher</p>
<p>Fees</p>
<p>Actions</p>
        </div>
        {/* content */}
        {lectures.map((item , index)=>( 
          <div key={index} className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-grey-500 py-3 px-6 border-b hover:bg-cyan-50'>
              <p className='max-sm:hidden'>{index+1}</p>
          <div className="flex items-center gap-2">
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img className="w-full h-full object-cover" src={item.stdData.image} alt="image" />
              </div>
                 <p>{item.stdData.name}</p>
          </div>
          <p className='max-sm:hidden'>{calculateAge(item.stdData.dob)}</p>
          <p>{slotDateFormate(item.slotDate)} {item.slotTime}</p>
                    <div className="flex items-center gap-2">
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img className="w-full h-full object-cover bg-gray-200" src={item.teachData.image} alt="image" />
              </div>
                 <p>{item.teachData.name}</p>
                 </div>
                 <p>{dollarCurrency}{item.teachData.fees}</p>
                 {
                 item.cancelled ? 
                 <p className='text-red-500'>Cancelled</p> : <img onClick={() => cancelLecture(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" /> 
                 }
          </div>
        ))}
        <div>

        </div>
      </div>
    </div>
  )
}

export default AllLecture