import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import Difference from './components/Difference';
import Momentum from './components/Momentum';
import Pathway from './components/Pathway';
import Competitions from './components/Competitions';
import Teams from './components/Teams';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StatsBand />
              <Difference />
              <Momentum />
              <Pathway />
              <Competitions />
              <Teams />
              <Gallery />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;