 import React from 'react'
 import Home from "./pages/Home"
 import About from "./pages/About"
 import ContactUs from "./pages/ContactUs"
 import Teachers from "./pages/Teachers"
 import NotFound from "./pages/NotFound"
 import Footer from "./components/Footer"
 import Navbar from "./components/Navbar"
 import Login from "./pages/Login"
  import StudentProfile from "./pages/StudentProfile"
 import {Routes , Route} from "react-router-dom"
import Lecture from './pages/Lecture'
import MyLectures from './pages/MyLectures'

import { ToastContainer , toast } from 'react-toastify'

 const App = () => {
   return (
     <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <ToastContainer />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contactus" element={<ContactUs />} />
  <Route path="/login" element={<Login />} />
  <Route path="/student-profile" element={<StudentProfile />} />
  <Route path="/teachers" element={<Teachers />} />
  <Route path="/teachers/:speciality" element={<Teachers />} />
  <Route path="/lectures/teacher/:teachId" element={<Lecture />} />
  <Route path="/my-lectures" element={<MyLectures/>} />
  
  <Route path="*" element={<NotFound />} />
</Routes>
<Footer />
     </div>
   )
 }
 
 export default App
