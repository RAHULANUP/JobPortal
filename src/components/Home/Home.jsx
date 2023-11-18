import React,{useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import homeanimation from "../../assets/home_animation.json";

import AOS from "aos";
import "aos/dist/aos.css";

function Home(){
    useEffect(()=>{
        AOS.init();
    })
    return(
        <>
            <div className='home_page'>
                <div>
                    <h1>FIND YOUR DREAM JOB </h1>
                    <h1>FASTER</h1>
                    <div className='button' data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300">
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