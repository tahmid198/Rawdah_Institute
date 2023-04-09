import React, { Children, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./css/navbar.css";
import Hamburger from "./hamburger";
import Sidebar from './sidebar'; 


const Navbar = ({toggleMenu}) => {
  // for react router change  all "href" to "to" and change "a" tag to "Link"

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
 
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const handleOpenMenu = () => {
    toggleMenu();
  }

  const handleClick = () => {
    toggleHamburger();
    handleOpenMenu();
    console.log('toggleMenu called'); // Add a console.log statement
  };

  return (
    <nav className="navbar">

        <Link to="/" className="logo">
            Rawdah Institute
        </Link>

        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/OnlineClass">Online Class</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
            <CustomLink to="/About">About Us</CustomLink>
            {/* <li><a href="/">Home</a></li>
                <li><a href="/OnlineClass">Online Class</a></li>
                <li><a href="/About">About Us</a></li>
                <li><a href="/Contact">Contact</a></li> */}
        </ul>
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}

        <div className="hamburger" onClick={handleClick}>
            < Hamburger isOpen={hamburgerOpen} />
        </div>


        {/* if screen > 770px always show navbar and keep hamburger menu hidden
        if screen < 770px display navbar when hamburger is open or hide it */}
        <style jsx>{`

            @media screen and (max-width: 770px) {
                .navbar ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'}
                } 
            }
            @media screen and (min-width: 770px) {
                .navbar ul{
                    display: inline;
                } .hamburger {
                    display: none;
                } 
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
