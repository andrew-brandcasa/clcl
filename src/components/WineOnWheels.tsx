import React from 'react';
import './WineOnWheels.css';

const WineOnWheels: React.FC = () => {
  return (
    <section id="wine-on-wheels" className="section-padding bg-gray-50">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Media */}
          <div className="pr-0 lg:pr-8 xl:pr-12">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg" 
                alt="Wine on Wheels Mobile Service" 
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
          
          {/* Copy */}
          <div className="space-y-6 md:space-y-8 pl-0 lg:pl-8 xl:pl-12">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">WINE ON WHEELS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">
              We Bring the Winery to You
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Our mobile wine service brings the Casa Larga experience directly to your event. 
              Perfect for corporate gatherings, private parties, and special occasions where you 
              want to share our exceptional wines with your guests.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="custom-catalog-button">
                <span className="button-content-wrapper">
                  BOOK WINE ON WHEELS
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineOnWheels;