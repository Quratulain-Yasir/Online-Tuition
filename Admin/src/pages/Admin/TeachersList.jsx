import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const TeachersList = () => {
  const {teachers , getAllTeachers , adminToken , changedAvailibility} = useContext(AdminContext)

  useEffect(()=>{
if(adminToken){
  getAllTeachers()
}
  },[adminToken])
  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>ALL TEACHERS</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {teachers.map((item,index)=>(
<div className="border border-cyan-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group" key={index}>
  <img src={item.image} alt="image" className='bg-cyan-100 group-hover:bg-cyan-700 transition-all duration-500 group-hover:scale-110 rounded-t-xl' />
  <div className='p-4'>
    <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
    <p className='text-neutral-600 text-sm'>{item.speciality}</p>
    <div className='mt-2 flex items-center gap-1 text-sm'>
      <input type="checkbox" checked={item.avalibility} onChange={()=> changedAvailibility(item._id)} />
      <p>Avaliable</p>
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  )
}

export default TeachersList