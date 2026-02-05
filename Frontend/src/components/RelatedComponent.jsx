import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import { useNavigate } from 'react-router-dom'
const RelatedComponent = ({teachId , speciality}) => {

    const {teachers} = useContext(AppContext)
    const [relTeach , setRelTeach] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
if(teachers.length > 0 && speciality) {
    const teachersData = teachers.filter((teach)=> teach.speciality === speciality && teach._id !== teachId )
    setRelTeach(teachersData) 
}
    },[teachers , speciality , teachId])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h2 className='text-3xl font-medium'>Related Teachers</h2> 
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relTeach.slice(0, 5).map((item , index) => (
          <div key={index}  onClick={()=>{navigate(`/lectures/teacher/${item._id}`); scrollTo(0 ,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
            <img className="bg-cyan-100" src={item.image} alt="teacher_pro" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Avaliable</p>
                 </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedComponent