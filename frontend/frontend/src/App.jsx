import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MomentumStats from './components/MomentumStats.jsx';
import Difference from './components/Difference.jsx';
import PartnerBand from './components/PartnerBand.jsx';
import Pathway from './components/Pathway.jsx';
import Competitions from './components/Competitions.jsx';
import TeamSection from './components/TeamSection.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import CompetitionsPage from './pages/Competitions.jsx';
import Programs from './pages/Programs.jsx';
import TeamsPage from './pages/Teams.jsx';
import Impact from './pages/Impact.jsx';
import Partners from './pages/Partners.jsx';
import GalleryPage from './pages/Gallery.jsx';
import Videos from './pages/Videos.jsx';
import ContactPage from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import TeamForm from './pages/TeamForm.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Pathway />
              <MomentumStats />
              <Difference />
              <PartnerBand />
              <Competitions showAllCompetitions={false} />
              <Gallery />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team-form" element={<TeamForm />} />
          <Route path="*" element={
            <>
              <Hero />
              <Pathway />
              <MomentumStats />
              <Difference />
              <PartnerBand />
              <Competitions showAllCompetitions={false} />
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