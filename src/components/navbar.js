import React, { Children } from 'react';
import './css/navbar.css'

const Navbar = ()=> {
   

    return(
        <nav className="navbar">
            <a href="/" className="logo">Rawdah Institute</a>
            <ul>
                <CustomLink href="/">Home</CustomLink>
                <CustomLink href="/OnlineClass">Online Class</CustomLink>
                <CustomLink href="/About">About Us</CustomLink>
                <CustomLink href="/Contact">Contact</CustomLink>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/OnlineClass">Online Class</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Contact">Contact</a></li> */}

            </ul>
        </nav>
    );
}

// check if path is equal to href and add active class
function CustomLink({href, children, ...props}) {
     // use to get to active page path
     const path = window.location.pathname
     
    return (
        // if path is == href then active or noting
        <li className= {path === href ? "active" : ""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )
}

export default Navbar;