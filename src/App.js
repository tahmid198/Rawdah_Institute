import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import OnlineClass from './components/online-class';
import Contact from './components/contact';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {

  // console.log(window.location)
  
    let component 
      switch (window.location.pathname) {
        case "/":
          component = <Home />
          break
        case "/OnlineClass":
          component = <OnlineClass />
          break
        case "/Contact":
          component = <Contact />
          break
        case "/About":
          component = <About />
          break
      }

        {/* <h1>Welcome to Rawdah Institute</h1> */}
    return (   
      <>
      <Navbar />
      <div className='container'>{component}</div> 
      </>
      );
}

export default App;
