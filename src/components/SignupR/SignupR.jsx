import React from "react";
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
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
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