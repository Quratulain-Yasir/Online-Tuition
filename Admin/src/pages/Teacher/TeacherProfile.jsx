import React from 'react'
import { useContext } from 'react'
import { TeacherContext } from '../../context/TeacherContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const TeacherProfile = () => {
  const {tToken , getProfileData , profileData , setProfileData , backendUrl } = useContext(TeacherContext)
 
    const { dollarCurrency } = useContext(AppContext)

    const [isEdit , setIsEdit] = useState(false)

const updateProfile = async () => {
  try {
    const updateData = {
      fees:profileData.fees , 
      avalibility : profileData.avalibility
    }
    const {data} = await axios.post(backendUrl + "/api/teacher/profiledataupdate" , updateData , {headers:{tToken}} )
    if(data.success) {
      toast.success(data.message)
      setIsEdit(false)
      getProfileData()
    } else {
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.messae)
  }
}



  useEffect(() => {
    if(tToken){
      getProfileData()
    }
  },[tToken])
  return profileData && (
    <div>
     <div className='flex flex-col gap-4 m-5'>
      <div>
        <img src={profileData.image} alt="profile-image"  className='bg-cyan-700 w-full sm:max-w-64 rounded-lg' />
      </div>
     </div>
     <div className='flex-1 boder border-stone-100 rounded-lg p-8 py-7 bg-white'>
     {/* ------ teacher Info */}
     <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
     <div className='flex items-center gap-2 mt-1 text-gray-600'>
      <p>
        {profileData.degree} - {profileData.speciality}
      </p>
      <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
     </div>

     {/* --------teacher About --------- */}
     <div>
      <p className='flex items-center gap-1 text-sm font-medium text-netural-800 mt-3'>About:</p>
      <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
        {profileData.about}
      </p>
     </div>
     <p className='text-gray-600 font-medium mt-4'>
      lecture fee: <span>{dollarCurrency} {isEdit? <input type="number" onChange={(e)=> setProfileData(prev => ({...prev , fees: e.target.value}))} value={profileData.fees} /> : profileData.fees}
      </span>
     </p>
     <div className='flex gap-2 py-2'>
      <p>
        Address:
      </p>
      <p className='text-sm'>{profileData.address.line}</p>
      <br />
      <p className='text-sm'>{profileData.address.line2}</p>
     </div>

<div className='flex gap-1 pt-2'>
  <input checked={profileData.avalibility} type="checkbox" name="" id="" onChange={()=> isEdit && setProfileData(prev => ({...prev , avalibility: !prev.avalibility }))} />
  <label htmlFor="">Available</label>
</div>
{ isEdit
? <button onClick={updateProfile} className='px-4 py-1 border border-cyan-700 text-sm rounded-full mt-5 hover:bg-cyan-700 hover:text-white transition-all'>Save</button>
: <button onClick={()=>setIsEdit(true)} className='px-4 py-1 border border-cyan-700 text-sm rounded-full mt-5 hover:bg-cyan-700 hover:text-white transition-all'>Edit</button> }
     </div>

    </div>

  )
}

export default TeacherProfile