import React from 'react';
import WineCarousel from './WineCarousel';
import './OurWines.css';

const OurWines: React.FC = () => {
  return (
    <section id="wines" className="section-padding bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">OUR WINES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">
            Crafted with Italian Tradition
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            From crisp whites to bold reds, each bottle reflects our dedication to quality and our Italian heritage. 
            Discover wines that capture the essence of the Finger Lakes terroir.
          </p>
        </div>
        
        <WineCarousel />
        
        <div className="text-center mt-12">
          <a href="#" className="custom-catalog-button">
            <span className="button-content-wrapper">
              VIEW ALL WINES
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWines;