import React from "react";
import "./LoginR.css";
import {Link} from "react-router-dom";
function LoginR(){
    return(
        <>
        <form >
            <div className='box'>
                <div className='login_container'>
                    <div className='content'>
                        <div>
                            <h1>Recruiter LOGIN</h1>
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



export default LoginR;