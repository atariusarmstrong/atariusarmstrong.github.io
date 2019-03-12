import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Choreography from './components/Choreography';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Navigation/>
        <About />
        <Choreography />
        <Portfolio/>
        <Contact />


      </div>
    );
  }
}

export default App;
