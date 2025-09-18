import React from 'react';

const OurHistory: React.FC = () => {
  return (
    <section id="history" className="container max-w-content mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-6 space-y-4">
          <span className="kicker">OUR HISTORY</span>
          <h2 className="h2">New York's 21st Winery</h2>
          <p className="sub">
            In 1974, our founder planted the first vines at Casa Larga, symbolizing his dedication 
            to his Italian Heritage. By 1978, our initial vintages earned rewards and we became 
            New York's 21st licensed winery.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="elementor-button">
              ABOUT CASA LARGA
            </a>
          </div>
        </div>
        
        {/* Media */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
              alt="Casa Larga Founder" 
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;