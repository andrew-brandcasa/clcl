import React from 'react';
import './OurVenue.css';

const OurVenue: React.FC = () => {
  return (
    <section id="venu" className="py-16 md:py-24 lg:py-28">
      <div className="venue-content">
        <div className="venue-text">
          <span className="text-sm md:text-base font-medium text-white uppercase tracking-wider mb-4 block">OUR VENUE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-serif text-white mb-6">
            BELLA VISTA AT<br />
            CASA LARGA
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white mb-8">
            With breathtaking views (Bella Vista means "Beautiful View" in Italian), our venue hosts up to 
            300 guests for weddings, corporate gatherings, and social events. The winery's timeless elegance 
            features dramatic floor-to-ceiling windows, vaulted ceilings, and a wraparound deck. Our open, 
            pillar-free floor plan offers complete flexibility to bring your vision to life.
          </p>
          <a href="#" className="venue-button">
            BOOK A PRIVATE EVENT
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurVenue;