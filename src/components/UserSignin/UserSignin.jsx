import React from 'react';
import "./UserSignin.css";
import {Link} from "react-router-dom";
function UserSignin() {
  return (
    <>
                <form >
            <div className='box'>
                <div className='signin_container'>
                    <div className='content'>
                        <div>
                            <h1>USER SIGNIN</h1>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            <button>SIGNIN</button>
                            <Link to="/select">goto</Link>
                        </div>
                        
                        <div className="linker">
                            <Link className="linker" to='/usersignup'>CREATE AN ACCOUNT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default UserSignin;