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

    // // Use a ref to get a reference to the sidebar element
    // const sidebarRef = useRef(null);

    // // Use the useEffect hook to handle outside click events
    // useEffect(() => {
    //   const handleOutsideClick = (event) => {
    //     // Check if the click target is outside the sidebar menus
    //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    //       toggleHamburger(); // Call toggleHamburger to update the state
    //     }
    //   }
  
    //   // Add the event listener on mount
    //   window.addEventListener('click', handleOutsideClick);
  
    //   // Remove the event listener on unmount
    //   return () => {
    //     window.removeEventListener('click', handleOutsideClick);
    //   }
    // }, [isOpen, hamburgerOpen]); // Update the dependency array to include isOpen and hamburgerOpen
  


  return (
    <div>
      
      <Sidebar isOpen={isOpen}/>
      <Navbar toggleMenu={toggleMenu} toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen}/>
    </div>
  );
};

export default ParentNavigation;