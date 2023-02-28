import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import OnlineClass from './components/online-class';
import Contact from './components/contact';
import { Route,  Routes } from 'react-router-dom';
import Footer from './components/footer';

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

        {/* <h1>Welcome to Rawdah Institute</h1> */}
    return (   
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OnlineClass" element={<OnlineClass />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />

        {/* {component} */}

      </div> 
    </>
  );
}

export default App;
