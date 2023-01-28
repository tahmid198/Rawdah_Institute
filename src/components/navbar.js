import React from 'react';
import './css/navbar.css'

const Navbar = ()=> {
    
        return(
            <div className="navbar">
                <a href="/" className="logo">Rawdah Institute</a>
                <ul>
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#Online Courses">Online Courses</a></li>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Contact">Contact</a></li>

                </ul>
            </div>
        );
}

export default Navbar;