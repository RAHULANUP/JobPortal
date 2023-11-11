import React, { useState } from "react";
import "./SignupR.css";

import { Link } from "react-router-dom";

function Signup(){

    return(
        <>
            <div className='box'>
                <div className='signup_container'>
                    <div className='content'>
                        <div>
                            <h1>RECRUITER SignUP</h1>
                        </div>
                        <div>
                            <input type="text" placeholder="Username" name="username" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" name="email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" name="password" />
                        </div>
                        <div>
                            <button>SIGN UP</button>
                        </div>
                        <div className="linker">
                            <Link className="linker" to='/loginR'>ALREADY HAVE AN ACCOUNT?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;