import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="container max-w-content mx-auto py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <h2 className="h2">Welcome to Casa Larga</h2>
        <p className="sub">
          Located in Fairport, NY. Celebrating 51 years of winemaking from graft to glass. 
          Click below to explore our wines, uncover our history, and tour our venue.
        </p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="space-y-2">
          <div className="text-2xl font-serif text-neutral-400">01.</div>
          <h3 className="font-serif text-xl">Our Wines</h3>
          <p className="sub">Discover our recipes</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-serif text-neutral-400">02.</div>
          <h3 className="font-serif text-xl">Our History</h3>
          <p className="sub">Learn our heritage</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-serif text-neutral-400">03.</div>
          <h3 className="font-serif text-xl">Our Venue</h3>
          <p className="sub">Book a private event</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;