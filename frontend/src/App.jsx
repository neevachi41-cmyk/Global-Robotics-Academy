import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsBand from './components/StatsBand.jsx';
import Difference from './components/Difference.jsx';
import Momentum from './components/Momentum.jsx';
import Pathway from './components/Pathway.jsx';
import Competitions from './components/Competitions.jsx';
import Teams from './components/Teams.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

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
          <Route path="*" element={
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