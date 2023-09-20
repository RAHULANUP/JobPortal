import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar">
                <Link to='/' className='logo'>jobPortal</Link>
                <Link to='/login' className='login'>Login</Link>
            </nav>
        </>
    );
}

export default Navbar;