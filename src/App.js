import React from 'react';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar/>
          <Home/>
          <AboutMe />
          <Projects /> 
          <Contact/>
          <Footer/>
          
        </Router>
      </header>
    </div>
  );
}

export default App;
