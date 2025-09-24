import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import OurWines from './components/OurWines';
import OurHistorySection from './components/OurHistory';
import OurVenue from './components/OurVenue';
import WineOnWheels from './components/WineOnWheels';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';
import OurHistory from './pages/OurHistory';
import About from './pages/About';
import PrivateEvents from './pages/PrivateEvents';
import PetiteNoir from './pages/PetiteNoir';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <main>
              <Hero />
              <Welcome />
              <OurWines />
              <OurHistorySection />
              <OurVenue />
              <WineOnWheels />
              <UpcomingEvents />
            </main>
            <Footer />
          </>
        } />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/about" element={<About />} />
        <Route path="/private-events" element={<PrivateEvents />} />
        <Route path="/petite-noir" element={<PetiteNoir />} />
      </Routes>
    </div>
  );
}

export default App;