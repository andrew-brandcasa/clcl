import React from 'react';
import './OurVenue.css';

const OurVenue: React.FC = () => {
  return (
    <section id="venu" className="container max-w-content mx-auto py-16 md:py-24 lg:py-28">
      <div className="venue-content">
        <div className="venue-text">
          <span className="section-subtitle">OUR VENUE</span>
          <h1 className="section-title">
            BELLA VISTA AT<br />
            CASA LARGA
          </h1>
          <p className="section-description">
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