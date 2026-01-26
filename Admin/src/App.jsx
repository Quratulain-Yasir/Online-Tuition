import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer , toast } from 'react-toastify'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Admin/Dashboard";
import AllLecture  from "./pages/Admin/AllLecture"
import TeachersList  from "./pages/Admin/TeachersList"
import AddTeacher from "./pages/Admin/AddTeacher"

const App = () => {

  const {adminToken} = useContext(AdminContext)
  return adminToken ? (
<div className='bg-[#F8F9FD]'>
<Navbar />
  <ToastContainer />
<div className="flex h-screen overflow-hidden">
  <Sidebar />

  {/* MAIN CONTENT */}
  <div className="flex-1 overflow-y-auto">
    <Routes>
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/all-lecture" element={<AllLecture />} />
      <Route path="/add-teacher" element={<AddTeacher />} />
      <Route path="/teacher-list" element={<TeachersList />} />
    </Routes>
  </div>
</div>

</div>
  ) : (
        <>
    <Login /> 
    <ToastContainer />
    </>
  )
}

export default App