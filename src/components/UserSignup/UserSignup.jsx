import React from 'react';
import "./UserSignup.css";
import {Link} from "react-router-dom";

function UserSignup() {
  return (
    <>
        <form>
            <div className='box'>
                <div className='signup_container'>
                    <div className='content'>
                        <div>
                            <h1>USER SignUP</h1>
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
                            <Link to="/usersignin">goto</Link>
                        </div>
                        
                        <div className="linker">
                            <Link className="linker" to='/usersignin'>ALREADY HAVE AN ACCOUNT?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default UserSignup;