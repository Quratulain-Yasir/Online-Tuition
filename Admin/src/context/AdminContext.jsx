import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [teachers, setTeachers] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [dashData , setDashData] = useState(false)

  // state variable to store token
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken")
      ? localStorage.getItem("adminToken")
      : ""
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  //
  const getAllTeachers = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/all-teachers`,
        {},
        { headers: { adminToken } },
      );
      if (data.success) {
        setTeachers(data.teachers);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //
  const changedAvailibility = async (teachId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-avalibility",
        { teachId },
        { headers: { adminToken } },
      );
      if (data.success) {
        toast.success(data.message);
        getAllTeachers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // API call to get ALL lecture Data

  const getAllLectures = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/all-lectures",  {},
        { headers: { adminToken } },
      );
      if (data.success) {
        setLectures(data.lectures);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

// API to cancel lecture by admin
const cancelLecture = async (lectureId) => {
  try {
    const { data } = await axios.post(
      backendUrl + "/api/admin/cancel-lecture",
      { lectureId },
      { headers: { adminToken } },
    );
    if (data.success) {
      toast.success(data.message);
      getAllLectures();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

// API to get dashboard data
 
const getDashData = async () => {
  try { 
    const {data} = await axios.post(backendUrl + "/api/admin/admin-dashboard" , {} , {headers : {adminToken}})
    if(data.success) {
      setDashData(data.dashData)
      console.log(data.dashData) 
    } else{
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}



  const value = {
    adminToken,
    setAdminToken,
    backendUrl,
    teachers,
    getAllTeachers,
    changedAvailibility,
    lectures,
    setLectures,
    getAllLectures,
    cancelLecture , dashData , getDashData
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
