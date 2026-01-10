import React, { useContext } from "react";
 
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopTeachers = () => {
  const navigate = useNavigate()
  const {teachers} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h2 className='text-3xl font-medium'>Top Teachers to Book</h2>
      <p className='sm:w-1/3 text-center text-sm lg:w-full'>Simply browse through our extensive list of trusted teachers</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {teachers.slice(0, 10).map((item , index) => (
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
      <button onClick={()=>{navigate('/teachers'); scrollTo(0 , 0)}} className='bg-cyan-100 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out' >
        more
      </button>
    </div>
  );
};

export default TopTeachers;
