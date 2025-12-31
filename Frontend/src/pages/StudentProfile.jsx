import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
 

const StudentProfile = () => {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
 
  const { backendUrl, loaduserProfileData , token, stdData, setStdData } =
    useContext(AppContext);

  //  function to make api call
  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", stdData.name);
      formData.append("phone", stdData.phone);
      formData.append("address", JSON.stringify(stdData.address)); 
      formData.append("gender", stdData.gender);

      formData.append("dob", stdData.dob);
 
      // if the user want to update img it can & can not
      image && formData.append("image", image); 

 
      //  update api call
      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      ); 
      if (data.success) {
        toast.success(data.message);
        // refetch stdData
        await loaduserProfileData();
        setEdit(false);
        setImage(false) 
      } else{ 
        toast.error(data.message)
      }
    } catch (error) { 
        toast.error(error.message)
    }
  };

  return (
    stdData ? (
      <div className="max-w-lg flex flex-col gap-2 text-sm">
        {edit ?   
          <label htmlFor="image">
         <div className="p-3 inline-block relative cursor-pointer">
          <img src={image  instanceof File ? URL.createObjectURL(image) : `${stdData.image}?t=${Date.now()}`} alt=""  className="w-36 rounded opacity-75" />
          <img className="w-10 absolute bottom-12 right-12 bg-yellow-600" src={image ? "" : assets.upload_icon}  alt="" />
         </div>
             <input type="file" id="image" onChange={(e)=>setImage(e.target.files[0])} hidden />
          </label>
         : 
          <img className="w-36 rounded mx-auto sm:mx-0  bg-yellow-300" src={stdData.image} alt="profile-pic" />
         }
        {edit ? (
          <input
            type="text"
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            value={stdData.name || ""}
            onChange={(e) =>
              setStdData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <h1 className="font-medium text-3xl text-neutral-800 mt-4 text-center sm:text-start">
            {stdData.name}
          </h1>
        )}
        <hr className="bg-cyan-400 h-[1px] border-none" />

        {/* detail info std */}
        <div>
          <p className="bg-cyan-700 text-sm sm:text-base text-orange-50 px-8 py-3 rounded-full mt-6 mb-6 hover:scale-105 transition-all text-center">
            CONTACT INFORMATION
          </p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Email id:</p>
            {edit ? (
              <input
                type="text"
                placeholder="Your Email...."
                value={stdData.email || ""}
                onChange={(e) =>
                  setStdData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-500">{stdData.email}</p>
            )}
            <p className="font-medium">Phone:</p>
            {edit ? (
              <input
                type="number"
                value={stdData.phone || ""}
                onChange={(e) =>
                  setStdData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-500">{stdData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {edit ? (
              <p>
                {" "}
                <input
                  type="text"
                  value={stdData.address.a1 || ""}
                  onChange={(e) =>
                    setStdData((prev) => ({
                      ...prev,
                      address: { ...prev.address, a1: e.target.value },
                    }))
                  }
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  value={stdData.address.a2 || ""}
                  onChange={(e) =>
                    setStdData((prev) => ({
                      ...prev,
                      address: { ...prev.address, a2: e.target.value },
                    }))
                  }
                />
              </p>
            ) : (
              <p className="text-gray-500">
                {stdData.address.a1} <br /> {stdData.address.a2}{" "}
              </p>
            )}
          </div>
          <h3 className="bg-cyan-700 text-sm sm:text-base text-orange-50 px-8 py-3 rounded-full mt-6 mb-6 hover:scale-105 transition-all text-center">
            BASIC INFORMATION
          </h3>
          {/* 2 */}
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className="font-medium">Gender:</p>
            {edit ?  <select className="max-w-20 bg-gray-100" 
            value={stdData.gender || ""} 
            onChange={(e) =>
              setStdData((prev) => ({ ...prev, gender: e.target.value }))
            }
            >
                  <option value="" disabled>
      Select gender
    </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> :  
              <p className="text-gray-500">{stdData.gender || "-"}</p>
            }
            <p className="font-medium">Birthday:</p>
            {edit ? (
              <input
                type="date"
                value={stdData.dob || ""}
                onChange={(e) =>
                  setStdData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-500">{stdData.dob}</p>
            )}
          </div>

          <div className="mt-10">
            {edit ? (
              <button
                className="border border-cyan-700 px-8 py-2 rounded-full hover:bg-cyan-700 hover:text-orange-50 text-cyan-700 hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                onClick={updateUserProfileData}
              >
                Save information
              </button>
            ) : (
              <button
                className="border border-cyan-700 px-8 py-2 rounded-full hover:bg-cyan-700 hover:text-cyan-50 text-cyan-700 hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    ) : (<p>Loading profile...........</p>)
  );
};

export default StudentProfile;
