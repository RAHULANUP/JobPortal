import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <Link to='/' className='logo'>jobPortal</Link>
                <Link to='/usersignin' className='login'>
                    <div>Get Started</div>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;