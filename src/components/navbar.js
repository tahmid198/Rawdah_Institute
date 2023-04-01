import React, { Children, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./css/navbar.css";
import Hamburger from "./hamburger";

const Navbar = () => {
  // for react router change  all "href" to "to" and change "a" tag to "Link"

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <nav className="navbar">

        <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
        </div>
        
        <Link to="/" className="logo">
            Rawdah Institute
        </Link>

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
 
        <style jsx>{`
            .navbar ul{
                display: ${hamburgerOpen ? 'inline' : 'none'}
            }
        `}</style>
      
    </nav>
  );
};

// check if path is equal to href and add active class
function CustomLink({ to, children, ...props }) {
  // use to get to active page path
  //  const path = window.location.pathname

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    // if path is == href then active or noting
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
