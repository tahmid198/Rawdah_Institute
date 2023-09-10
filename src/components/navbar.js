import React, {} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./css/navbar.css";
import Hamburger from "./hamburger";
// import Sidebar from './sidebar'; 


const Navbar = ({toggleMenu, toggleHamburger, hamburgerOpen}) => {
  // for react router change  all "href" to "to" and change "a" tag to "Link"

  const handleOpenMenu = () => {
    toggleMenu();
  }

  const handleOpenHamburger = () => {
    toggleHamburger();
  }

  const handleClick = () => {
    handleOpenHamburger();
    handleOpenMenu();
    console.log('toggleMenu called'); // Add a console.log statement
  }

  return (
    <nav className="navbar">

        <Link to="/" className="logo">
            Rawdah Institute
        </Link>

        <ul>
            <CustomLink to="/Rawdah_Institute/">Home</CustomLink>
            <CustomLink to="/Rawdah_Institute/online-class">Online Class</CustomLink>
            <CustomLink to="/Rawdah_Institute/contact">Contact</CustomLink>
            {/* <CustomLink to="/Rawdah_Institute/about">About Us</CustomLink> */}
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
        if screen < 770px display navbar when hamburger is open (display:inline) or hide it (display:none) 
        with sidebar implentation we will keep navbar hidden if regardless if hamburger menu is open or closed*/}
        <style jsx> {`
            @media screen and (max-width: 770px) {
                .navbar ul{
                  display: ${hamburgerOpen ? 'none' : 'none'}
                } 
            }
            @media screen and (min-width: 770px) {
                .navbar ul{
                    display: inline;
                } .hamburger {
                    display: none;
                } 
            }  
        `} </style>
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
