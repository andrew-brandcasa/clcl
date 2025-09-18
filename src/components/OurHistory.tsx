import React from 'react';

const OurHistory: React.FC = () => {
  return (
    <section id="history" className="py-20 md:py-28 lg:py-36">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Copy */}
          <div className="space-y-6 md:space-y-8 pr-0 lg:pr-8 xl:pr-12">
          <span className="section-subtitle">OUR HISTORY</span>
          <h2 className="section-title">New York's 21st Winery</h2>
          <p className="section-description">
            In 1974, our founder planted the first vines at Casa Larga, symbolizing his dedication 
            to his Italian Heritage. By 1978, our initial vintages earned rewards and we became 
            New York's 21st licensed winery.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="custom-catalog-button">
              <span className="button-content-wrapper">
              ABOUT CASA LARGA
              </span>
            </a>
          </div>
        </div>
        
        {/* Media */}
          <div className="pl-0 lg:pl-8 xl:pl-12">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
              alt="Casa Larga Founder" 
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default OurHistory;