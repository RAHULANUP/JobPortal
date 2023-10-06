import React from "react";
import "./Select.css";

import { Link } from "react-router-dom";

function Select(){
    return(
        <>
            <div className="select__container">
                <div className="recruiter">
                    <div>
                        <h1>RECRUITER</h1>
                    </div>
                    <Link to='/loginR' className="select__login">
                        <div>LOGIN</div>
                    </Link>
                
                </div>
                <div className="seeker">
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
