import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="section-padding">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <div className="space-y-6 md:space-y-8 pr-0 lg:pr-8 xl:pr-12">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">WELCOME</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">
              Experience the Essence of Italian Winemaking
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Nestled in the heart of the Finger Lakes, Casa Larga Vineyards has been crafting exceptional 
              wines for over four decades. Our commitment to traditional Italian winemaking techniques, 
              combined with the unique terroir of New York, creates wines that tell a story of heritage and passion.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="custom-catalog-button">
                <span className="button-content-wrapper">
                  PLAN YOUR VISIT
                </span>
              </a>
            </div>
          </div>
          
          {/* Media */}
          <div className="pl-0 lg:pl-8 xl:pl-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg" 
                alt="Casa Larga Vineyard" 
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;