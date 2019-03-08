import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Choreography from './components/Choreography';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <About />
        <Choreography />
        <Portfolio/>
        <Contact />

        {/* <Navbar />
        
        
         */}
      </div>
    );
  }
}

export default App;
