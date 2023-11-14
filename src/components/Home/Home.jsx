import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import homeanimation from "../../assets/home_animation.json";
function Home(){
    return(
        <>
            <div className='home_page'>
                <div>
                    <h1>FIND YOUR DREAM JOB </h1>
                    <h1>HERE</h1>
                    <div className='button'>
                        <Link to='/select' className='getstarted'>GET STARTED</Link>
                    </div>
                </div>
                <div>
                    <Lottie className="home_right" animationData={homeanimation} />
                </div>
            </div>
        </>
    );
}

export default Home;