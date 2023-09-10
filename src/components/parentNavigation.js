import React, {useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';



const ParentNavigation = () => {
  
  const[isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      
      <Sidebar isOpen={isOpen}/>
      <Navbar toggleMenu={toggleMenu} toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen}/>
    </div>
  );
};

export default ParentNavigation;