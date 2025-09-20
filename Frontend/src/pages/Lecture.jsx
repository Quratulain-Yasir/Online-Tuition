import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets.js";
import RelatedComponent from "../components/RelatedComponent.jsx";
import { toast } from "react-toastify";
import axios from "axios"


const Lecture = () => {
  const { teachId } = useParams();
  const { teachers, currencySymbol , backendUrl , token , getTeachersData } = useContext(AppContext);
  const [teachInfo, setTeachInfo] = useState(null);
 const daysOfWeek = ["Sun" , "MON" , "TUE" , "WED" , "THU" , "FRI" , "SAT" ]
  // 3 state variable for storing data
  const [teachSlots, setTeachSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");


const navigate = useNavigate()



  const fetchTeachInfo = async () => {
    const teachInfo = teachers.find((teach) => teach._id === teachId);
    setTeachInfo(teachInfo);
  };

  // function to calculate avalible slot
  const getAvalibleSlots = async () => {
     //  Guard clause to prevent error
  if (!teachInfo || !teachInfo.slots_booked) {
    return;
  }

  //   Now it's safe to access teachInfo.slots_booked 
    // clear the previous slots
    setTeachSlots([]);

    // get current date
   let today = new Date();
    for (let i = 0; i < 7; i++) {
      // set Date using index i
      let currentDate = new Date(today);
      // future date
      currentDate.setDate(today.getDate() + i);

      // endTime
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        // for min
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // if date is not today it means we are in future
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
let day = currentDate.getDate()
let month = currentDate.getMonth()+1
let year = currentDate.getFullYear()


const slotDate = day + "_" + month + "_" + year
const slotTime = formattedTime;
// const bookedSlots = teachInfo.slots_booked[slotDate] || []
// const isSlotAvalible = !bookedSlots.includes(slotsTime)


const isSlotAvalible = teachInfo.slots_booked[slotDate] && teachInfo.slots_booked[slotDate].includes(slotTime) ? false : true

if(isSlotAvalible){
        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        }); 
}



        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
   }
        // save slots when while loop ended
        setTeachSlots(prev => ([...prev, timeSlots]));
   
    }
  };


// 
const bookLecture = async () => {
if(!token){
  toast.warn("login to book lecture")
  return navigate("/login")
}

try {
const date =  teachSlots[slotIndex][0]?.datetime ;
// destructure date 
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

const slotDate = day + "_" + month + "_" + year
    
 
// api for booking lecture
const {data} = await axios.post(backendUrl+`/api/user/book-lecture` , {teachId , slotDate , slotTime} , {headers:{token}})  
  console.log("slotsDate after response " , slotDate)
if(data.success){
  toast.success(data.message)
  getTeachersData() 
  navigate("/my-lectures")
} else{ 
  console.log(data.message)
  toast.error(data.message)
}
  // to hide entries that already booked
} catch (error) { 
  toast.error(error.message)
}


}


  useEffect(() => {
    fetchTeachInfo();
  }, [teachId]);

  useEffect(() => {
    getAvalibleSlots();
  }, [teachInfo]);

  useEffect(() => { 
  }, [teachSlots]);

  return (
    teachInfo && (
      <div>
        {/* Teacher Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-cyan-700 w-full sm:max-w-72 rounded-lg"
              src={teachInfo.image}
              alt="image"
            />
          </div>
          {/* secound */}
          <div className="flex-1 border border-cyan-700 rounded-lg p-8 py-7 bg-cyan-50 mx-2 tracking-wide shadow-md hover:shadow-lg shadow-cyan-100">
            {/* -------- Teach Info : name , degree , experience ------ */}
            <h1 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {teachInfo.name}{" "}
              <span>
                <img src={assets.verified_icon} alt="verified_icon" />
              </span>
            </h1>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {teachInfo.degree} - {teachInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {teachInfo.experience}
              </button>
            </div>
            {/*------------------Doctor About --------------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="texy-sm text-gray-500 max-w-[700px] mt-1">
                {teachInfo.about}
              </p>
            </div>
            <p className="text-gray-600">
              Lecture Fee:{" "}
              <span>
                {currencySymbol}
                {teachInfo.fees}
              </span>
            </p>
            
          </div>
          
        </div>
        {/* slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="mt-10 text-xl">Booking Slots</p>
          <div className="flex gap-x-5 sm:h-[20vh] h-[25vh] items-center w-full hide-scrollbar  overflow-x-scroll mt-4 pl-5">
            {teachSlots.length &&
              teachSlots.map((item, index) => (
                <div key={index} onClick={()=>setSlotIndex(index)}  className={`text-center py-6 min-w-16 rounded-full cursor-pointer hover:scale-105  shadow-md ease-in-out transition-all duration-300 ease-in-out ${slotIndex === index ? "bg-cyan-700 text-orange-50" : "border border-gray-200" }`}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
        </div>
<div>
          {/* time slots for booking avalible */}
        <div className="flex items-center gap-x-5 h-[10vh] sm:ml-72 sm:pl-4 hide-scrollbar overflow-x-scroll mt-6"> 
            {
            teachSlots.length && teachSlots[slotIndex].map((item , index)=>(
              <p key={index} onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                 ${item.time === slotTime ? 'bg-cyan-700 text-orange-50' : 'border border-gray-300'} `}>{item.time.toLowerCase()}</p>
            ))
          }
        </div>
        <button className="sm:ml-72 bg-cyan-700 text-orange-50 text-md font-medium tracking-wider px-30 py-4 rounded-full my-6 cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out" onClick={bookLecture} >Book Lecture</button>
</div>
        <RelatedComponent teachId={teachId} speciality={teachInfo.speciality} />
      </div>
    )
  );
};

export default Lecture;
