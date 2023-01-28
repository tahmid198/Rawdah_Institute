import React from 'react';
import './css/navbar.css'

const Navbar = ()=> {
    
        return(
            <div className="navbar">
                <a href="/" className="logo">Rawdah Institute</a>
                <ul>
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="OnlineClass">Online Class</a></li>
                    <li><a href="About">About Us</a></li>
                    <li><a href="Contact">Contact</a></li>

                </ul>
            </div>
        );
}

export default Navbar;