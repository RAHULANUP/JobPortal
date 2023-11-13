import React from 'react';
import "./RecruiterCard.css";
import {AiOutlineClose} from "react-icons/ai";
import {GrUpdate} from "react-icons/gr";
function RecruiterCard() {
  return (
    <>
        <div className="card__container">
            <div>
                <h1>SDE III</h1>
                <h2>Google</h2>
                <h3>San Francisco</h3>
                <h3>random desc</h3>
                <h4>B-TECH/B.E</h4>
                <h2>100000$-120000$</h2>
            </div>
            <div className="del__update">
                <button><GrUpdate/></button>
                <button><AiOutlineClose/></button>
            </div>
        </div>
    </>
  )
}

export default RecruiterCard;