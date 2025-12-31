import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// create a Context object (a shared "data space" for the app)
export const AppContext = createContext();

// This component wraps the app and provides shared state to all children
const AppContextProvider = (props) => {
  // store currency symbol for easy use across app
  const currencySymbol = "$";

  //backend API baseURL (taken from .env file)
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

 // teachers data state (will store list of teachers fetched from backend)
  const [teachers, setTeachers] = useState([]);

 // token state (check if token is already in localStorage, else false)
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
   // user profile data (for storing student details from backend)
  const [stdData, setStdData] = useState(null);

 // function to fetch all teachers data from backend
  const getTeachersData = async () => {
    try {
              // send GET request to backend API
      const { data } = await axios.get(backendUrl + "/api/teacher/list");
 // if request successful, update state with teachers list
      if (data.success) {
        setTeachers(data.teachers);
      } else {
          // show error toast if backend returns failure
        toast.error(data.message);
      }
    } catch (error) {
           // log error in console and show toast
      console.log(error);
      toast.error(error.message);
    }
  };

  
    // function to load logged-in user profile data
  const loaduserProfileData = async () => {
    try {
         // send GET request with token in headers for authentication
      const { data } = await axios.get(backendUrl + `/api/user/get-profile`, {
        headers: { token },
      });
            // if success, save user profile (student data) into state

      if (data.success) {
        setStdData({ ...data.stdData });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


    // object that contains all the states and functions
    //this object will be shared with all components using AppContext
  const value = {
    teachers,
    getTeachersData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    stdData,
    setStdData,
    loaduserProfileData,
  };

  // fetch teachers list when component first loads
  useEffect(() => {
    getTeachersData();
  }, []);


  // whenever token changes, decide whether to load user profile or clear it
  useEffect(() => {
    if (token) {
      loaduserProfileData();
    } else {
      setStdData(null);
    }
  }, [token]);




   // wrap all child components with AppContext provider
    // this makes "value" object accessible to them
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

// export provider so it can wrap the app in main.jsx
export default AppContextProvider;
