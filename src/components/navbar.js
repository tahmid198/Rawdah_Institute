import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'



const Navbar = ()=> {
   

    // for react router change  all "href" to "to" and change "a" tag to "Link"
    return(
        <nav className="navbar">
            <Link to="/" className="logo">Rawdah Institute</Link>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/OnlineClass">Online Class</CustomLink>
                <CustomLink to="/About">About Us</CustomLink>
                <CustomLink to="/Contact">Contact</CustomLink>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/OnlineClass">Online Class</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Contact">Contact</a></li> */}

            </ul>
        </nav>
    );
}

// check if path is equal to href and add active class
function CustomLink({to, children, ...props}) {
     // use to get to active page path
     const path = window.location.pathname
     
    return (
        // if path is == href then active or noting
        <li className= {path === to ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}

export default Navbar;