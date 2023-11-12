import React from 'react';
import "./UserSignin.css";
import {signInWithGoogle} from "../../Firebase";
function UserSignin() {
  return (
    <>
        <div className="signin__page">
            <button className="googlesign" onClick={signInWithGoogle}>Sign In With Google</button>
            <h1>HEY THERE ! {localStorage.getItem("name")}</h1>
        </div>
        
    </>
  )
}

export default UserSignin;