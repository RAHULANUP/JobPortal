import React,{useEffect} from "react";
import "./Select.css";

import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Select(){
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>
            <div className="select__container">
                <div className="recruiter" data-aos="flip-right">
                    <div>
                        <h1>RECRUITER</h1>
                    </div>
                    <Link to='/loginR' className="select__login">
                        <div>LOGIN</div>
                    </Link>
                
                </div>
                <div className="seeker" data-aos="flip-left">
                    <div>
                        <h1>JOB SEEKER</h1>
                    </div>
                    <Link to='/loginSeeker' className="select__login">
                        <div>LOGIN</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Select;
