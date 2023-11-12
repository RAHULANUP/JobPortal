import React from "react";
import "./Loginseeker.css";
import {Link} from "react-router-dom";
function Loginseeker(){
    return(
        <>
            <form >
            <div className='box'>
                <div className='login_container'>
                    <div className='content'>
                        <div>
                            <h1>Job Seeker LOGIN</h1>
                        </div>
                        <div>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            <button>LOGIN</button>
                        </div>
                        <div className="linker">
                            <Link className="linker" to='/signupR'>CREATE AN ACCOUNT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default Loginseeker;