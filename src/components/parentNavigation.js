import React, { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const ParentNavigation = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
    </div>
  );
};

export default ParentNavigation;