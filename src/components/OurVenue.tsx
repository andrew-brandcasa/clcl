import React from 'react';
import './OurVenue.css';

const OurVenue: React.FC = () => {
  return (
    <section id="venu" className="container max-w-content mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
          <span className="kicker">OUR VENUE</span>
          <h2 className="h2">BELLA VISTA AT CASA LARGA</h2>
          <p className="sub">
            With breathtaking views (Bella Vista means "Beautiful View" in Italian), our venue hosts up to 
            300 guests for weddings, corporate gatherings, and social events. The winery's timeless elegance 
            features dramatic floor-to-ceiling windows, vaulted ceilings, and a wraparound deck. Our open, 
            pillar-free floor plan offers complete flexibility to bring your vision to life.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="elementor-button">
              BOOK A PRIVATE EVENT
            </a>
          </div>
        </div>
        
        {/* Media */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://casalarga.casasite.com/wp-content/uploads/2025/08/7662debe55392745c26323d52af7183e2300478a.webp" 
              alt="Bella Vista Venue" 
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVenue;