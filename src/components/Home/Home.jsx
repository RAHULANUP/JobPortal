import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import homesvg from "../../assets/homesvg.svg";
function Home(){
    return(
        <>
            <div className='home_page'>
                <div>
                    <h1>FIND YOUR DREAM JOB </h1>
                    <h1>HERE</h1>
                    <div className='button'>
                        <Link to='/usersignin' className='getstarted'>GET STARTED</Link>
                    </div>
                </div>
                <div>
                    <img className='home_img' src={homesvg} alt='homeimage'/>
                </div>
            </div>
        </>
    );
}

export default Home;