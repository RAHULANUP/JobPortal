import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
            <div className='box'>
                <div className='login_container'>
                    <div className='content'>
                        <div>
                            <h1>LOGIN</h1>
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
                            <Link className="linker" to='/signup'>CREATE AN ACCOUNT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;