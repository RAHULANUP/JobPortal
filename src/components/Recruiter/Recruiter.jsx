import React from 'react';
import "./Recruiter.css";
import {Link} from "react-router-dom";

import  RecruiterCard from "../RecruiterCard/RecruiterCard";

function Recruiter() {
  return (
    <>
        <div className="section__recruiter">
            <div className="recruiter__post">
                <Link to="/postjob"><button>POST JOB</button></Link>
                <Link to="/"><button>LOGOUT</button></Link>
            </div>
            <div className="recruiter__job">
                <div className="jobs__container">
                    <RecruiterCard />
                    <RecruiterCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default Recruiter