import React from 'react';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import OurWines from './components/OurWines';
import OurHistory from './components/OurHistory';
import OurVenue from './components/OurVenue';
import WineOnWheels from './components/WineOnWheels';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Welcome />
        <OurWines />
        <OurHistory />
        <OurVenue />
        <WineOnWheels />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;