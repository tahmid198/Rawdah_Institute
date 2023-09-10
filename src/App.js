import React from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import OnlineClass from './components/online-class';
import Contact from './components/contact';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
// import Sidebar from './components/sidebar';
import ParentNavigation from './components/parentNavigation';

function App() {

  // console.log(window.location)
  
    // let component 
    //   switch (window.location.pathname) {
    //     case "/":
    //       component = <Home />
    //       break
    //     case "/OnlineClass":
    //       component = <OnlineClass />
    //       break
    //     case "/Contact":
    //       component = <Contact />
    //       break
    //     case "/About":
    //       component = <About />
    //       break
    //   }

     return (   
    <>
      <ParentNavigation  />
      <div className='App' id='outer-container'>
      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}

        <div id='page-wrap'>
          <Routes> 
            <Route path="/" element={<Navigate replace to="/Rawdah_Institute" />} />
            <Route path="/Rawdah_Institute" element={<Home />} />
            <Route path="/Rawdah_Institute/online-class" element={<OnlineClass />} />
            <Route path="/Rawdah_Institute/contact" element={<Contact />} />
            <Route path="/Rawdah_Institute/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
        {/* {component} */}
      </div> 
    </>
  );
}

export default App;
