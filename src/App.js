import React from "react";
import { Routes,Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginR from "./components/LoginR/LoginR";
import Loginseeker from "./components/Loginseeker/Loginseeker";
import SignupR from "./components/SignupR/SignupR";
import Signupseeker from "./components/Signupseeker/Signupseeker";
import Select from "./components/Select/Select";
import Recruiter from "./components/Recruiter/Recruiter";
import Seeker from "./components/Seeker/Seeker";
import Postjob from "./components/Postjob/Postjob";
import Updatejob from "./components/Updatejob/Updatejob";
import Applyjob from "./components/Applyjob/Applyjob";
import ViewApplicants from "./components/ViewApplicants/ViewApplicants";

import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <>

      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginR' element={<LoginR/>} />
        <Route path='/loginSeeker' element={<Loginseeker/>} />
        <Route path='/signupR' element={<SignupR/> }/>
        <Route path='/signupSeeker' element={<Signupseeker/>} />
        <Route path='/select' element={<Select/>} />
        <Route path='/recruiter' element={<Recruiter/>} />
        <Route path='/seeker' element={<Seeker/>} />
        <Route path='/postjob' element={<Postjob/>} />
        <Route path='/updatejob/:jobId' element={<Updatejob/>} />
        <Route path='/apply-job/:jobId' element={<Applyjob/>} />
        <Route path="/viewapplicants/:jobId" element={<ViewApplicants/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
      </Routes>

    </>
  );
}

export default App;
