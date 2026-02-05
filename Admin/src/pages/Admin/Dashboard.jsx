import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import book from "../../assets/book.png"
import teacher from "../../assets/teacher.png"
import student from "../../assets/student_icon.svg"
import {assets} from "../../assets/assets"
const Dashboard = () => {
  const { adminToken, getDashData, dashData , cancelLecture , confirmLecture } = useContext(AdminContext);
  const { slotDateFormate } = useContext(AppContext)
  useEffect(() => {
    if (adminToken) {
      getDashData();
    }
  }, [adminToken, getDashData]);
  return dashData && (
    <div className="m-5">
       
       
        <div className="flex flex-wrap gap-4">

          <div className="flex items-center gap-2 bg-white p-4 w-56 rounded border-2 border-cyan-100 cursor-pointer hover:shadow-lg hover:border-cyan-700 hover:scale-105 transition-all duration-300">
            <img className="w-14" src={teacher} alt="" />
            <div>
<p className="font-semibold text-xl text-gray-600"> {dashData.teacher}</p>
<p className="text-gray-500 text-sm">Teachers</p>
            </div>
            
          </div>
          <div className="flex items-center gap-2 bg-white p-4 w-56 rounded border-2 border-cyan-100 cursor-pointer hover:shadow-lg hover:border-cyan-700 hover:scale-105 transition-all duration-300">
             <img className="w-7" src={student} alt="" />
            <div>
<p className="font-semibold text-xl text-gray-600"> {dashData.student}</p>
<p className="text-gray-500 text-sm">Students</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 w-56 rounded border-2 border-cyan-100 cursor-pointer hover:shadow-lg hover:border-cyan-700 hover:scale-105 transition-all duration-300">
             <img className="w-15" src={book} alt="" />
            <div>
<p className="font-semibold text-xl text-gray-600"> {dashData.lecture}</p>
<p className="text-gray-500 text-sm">Lectures</p>
            </div>
          </div>

        </div>
       
       <div className="flex-1 flex-col">
        <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border bg-cyan-700">
          <img src={assets.list_icon} alt="" />
          <h2 className="font-semibold">Recent lectures</h2>
        </div>
        <div className="pt-4 border border-t-0">
{
  dashData.latestlecture.map((item , index)=>(
    <div className="flex items-center px-6 py-3 gap-3 hover:bg-cyan-100" key={index}>
      <img className="rounded-full w-10" src={item.stdData.image} alt="" />
<div className="flex-1 text-sm">
  <p className="text-gray-800 font-medium">{item.stdData.name}</p>
  <p className="text-gray-600">Booking on {slotDateFormate(item.slotDate)}</p>
</div>
                 {
                 item.cancelled ? 
                 <p className='text-red-500'>Cancelled</p> : item.isCompleted ? <p className='text-green-500'>Completed</p> : 
                 <div className="flex">
                  <img onClick={() => cancelLecture(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" /> 
                  <img onClick={() => confirmLecture(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" /> 
                 </div>
                 }
    </div>
  ))
}
        </div>

       </div>
    </div>
  );
};

export default Dashboard;
