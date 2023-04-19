import React, { Children, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './css/sidebar.css';

const Sidebar = ({isOpen, setIsOpen})  => {

const menuProps = {
  width: "60%"
};

return (
  <Menu className='sideBarMenu' disableOverlayClick right {...menuProps} isOpen={isOpen}>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/OnlineClass">Online Class</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
            <CustomLink to="/About">About Us</CustomLink>
        </ul>
  </Menu>
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

export  default Sidebar;