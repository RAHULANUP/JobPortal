import React from "react";
import { Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginR from "./components/LoginR/LoginR";
import Loginseeker from "./components/Loginseeker/Loginseeker";
import SignupR from "./components/SignupR/SignupR";
import Signupseeker from "./components/Signupseeker/Signupseeker";
import Select from "./components/Select/Select";
import UserSignin from "./components/UserSignin/UserSignin";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginR' element={<LoginR/>} />
        <Route path='/loginSeeker' element={<Loginseeker/>} />
        <Route path='/signupR' element={<SignupR/> }/>
        <Route path='/signupSeeker' element={<Signupseeker/>} />
        <Route path='/select' element={<Select/>} />
        <Route path='/usersignin' element={<UserSignin/>} />
      </Routes>
    </>
  );
}

export default App;
