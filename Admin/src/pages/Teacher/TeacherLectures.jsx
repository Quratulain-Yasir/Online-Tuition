import React from 'react'
import { TeacherContext } from '../../context/TeacherContext'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import {assets} from '../../assets/assets'

const TeacherLectures = () => {
  const {tToken , getLectures , lectures , confirmLecture , cancelLecture } = useContext(TeacherContext)
  const { calculateAge, slotDateFormate ,dollarCurrency } = useContext(AppContext)

  useEffect(() => {
    if(tToken){
      getLectures()
    }
  },[tToken])

  return lectures && (
        <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Lectures</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Student</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {
          lectures.map((item, index) => (
            <div key={index} className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 item-center text-gray-500 py-3 px-6 border-b">
              <p className='max-sm:hidden'>{index+1}</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={item.stdData.image} alt="" className="w-full h-full object-cover" />
                </div>
                <p>{item.stdData.name}</p>
              </div>
              <div>
              <p className='text-xs inline border border-primary px-2 rounded-full'>{item.payment ? "Online" : "CASH"}</p>
              </div>
              <p className='max-sm:hidden'>
                {calculateAge(item.stdData.dob)}
              </p>
              <p>{slotDateFormate(item.slotDate)} , {item.slotTime}</p>
              <p>{dollarCurrency}{item.amount}</p>
              <div className="flex">
            <img onClick={()=>cancelLecture(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            <img onClick={()=>confirmLecture(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
           </div>
            </div>

          ))
        }
      </div>
    </div> 
  )
}

export default TeacherLectures