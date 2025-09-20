import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import {toast} from "react-toastify"
import {AdminContext} from "../../context/AdminContext"
import axios from "axios"


const AddTeacher = () => {
  const [teachImg, setTeachImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

const {adminToken , backendUrl} = useContext(AdminContext)


const onSubmitHandler = async (e) => {
e.preventDefault();

try {
  if(!teachImg){
  return toast.error("ADD PROFILE_IMAGE....")
}

const formData = new FormData();

formData.append("image" , teachImg)
formData.append("name" , name ) 
formData.append("email" , email)
formData.append("password" , password)
formData.append("experience" , experience)
formData.append("fees" , Number(fees))
formData.append("about" , about)
formData.append("speciality" , speciality ) 
formData.append("degree" , degree)
formData.append("address" , JSON.stringify({line:address1,line2:address2}))
// 
formData.forEach((key , value)=>{
  console.log(`${key} : ${value}`);
})

const {data} = await axios.post(backendUrl + `/api/admin/add-teacher` , formData , {headers : {adminToken}})
if(data.success){
toast.success(data.message);
setTeachImg(false)
setName("")
setEmail("")
setPassword("")
setExperience("")
setFees("")
setAbout("")
setSpeciality("")
setDegree("")
setAddress1("")
setAddress2("")
} else{
  toast.error(data.message)
}
} catch (error) {
  console.log(error)
}
 
}

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full ">
      <p className="mb-3 text-xl font-medium ">Add Teacher</p>
      <div className="bg-white px-8 py-8 border border-cyan-700 w-full max-w-4xl max-p-[80vh] overflow-y-scroll shadow-sm shadow-cyan-700 rounded-md hover:shadow-lg">
        <div className="flex items-center gap-4 mb-8 text-gray">
          <label htmlFor="teach_img" className="cursor-pointer">
            <img 
              src={teachImg ? URL.createObjectURL(teachImg) : assets.upload_area}
              alt="Upload"
              className="w-16 bg-gray-100 rounded-full"  />
          </label>
          <input  onChange={(e)=> setTeachImg(e.target.files[0])}
 type="file" id="teach_img" hidden />
          <p>
            Upload teacher <br /> picture
          </p>
        </div>
        {/* .. */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Your Name</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Teacher Email</p>
              <input
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Teacher Password</p>
              <input
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                className="border rounded px-3 py-2"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="11 Year">11Year</option>
                <option value="12 Year">12 Year</option>
                <option value="13 Year">13 Year</option>
                <option value="14 Year">14 Year</option>
                <option value="15 Year">15 Year</option>
                <option value="16 Year">16 Year</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                className="border rounded px-3 py-2"
                type="number"
                placeholder="fees"
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                required
              />
            </div>
          </div>
          {/* speciality */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                className="border rounded px-3 py-2"
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="German">German</option>
                <option value="Biology">Biology</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 1"
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                required
              />
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 2"
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                required
              />
            </div>
          </div>
        </div>
        {/* About */}
        <div>
          <p className="mt-4 mb-2">About Teacher</p>
          <textarea
            className="w-full px-4 pt-2 border rounded"
            placeholder="write about teacher"
            rows={5}
                onChange={(e) => setAbout(e.target.value)}
                value={about}
            required
          />
        </div>
        <button type='submit' className="bg-cyan-700 px-10 py-3 mt-4 text-white rounded-full">
          Add Teacher
        </button>
      </div>
    </form>
  );
};

export default AddTeacher;
