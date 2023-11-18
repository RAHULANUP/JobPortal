import React,{useEffect} from 'react';
import "./Recruiter.css";
import {Link} from "react-router-dom";

import  RecruiterCard from "../RecruiterCard/RecruiterCard";

import AOS from "aos";
import "aos/dist/aos.css";

function Recruiter() {
    useEffect(()=>{
        AOS.init();
    })
  return (
    <>
        <div className="section__recruiter">
            <div className="recruiter__post" data-aos="fade-right">
                <Link to="/postjob"><button>POST JOB</button></Link>
            </div>
            <div className="recruiter__job">
                <div className="jobs__container">
                    <RecruiterCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default Recruiter