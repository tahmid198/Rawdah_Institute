import React from 'react';
import './css/navbar.css'

const Navbar = ()=> {
    
        return(
            <div className="navbar">
                <a href="/" className="logo">Rawdah Institute</a>
                <ul>
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>

                </ul>
            </div>
        );
}

export default Navbar;