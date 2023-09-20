import React from "react";
import "./Login.css";

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
                            <input type="text" placeholder="Enter Name..." />
                        </div>
                        <div>
                            <input type="password" placeholder="Enter password..." />
                        </div>
                        <div>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;