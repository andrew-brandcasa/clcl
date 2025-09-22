import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import OurWines from './components/OurWines';
import OurHistory from './components/OurHistory';
import OurVenue from './components/OurVenue';
import WineOnWheels from './components/WineOnWheels';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';
import About from './pages/About';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Welcome />
    <OurWines />
    <OurHistory />
    <OurVenue />
    <WineOnWheels />
    <UpcomingEvents />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <main>
              <HomePage />
            </main>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <main>
                <About />
              </main>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;