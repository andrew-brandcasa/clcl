import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="section-padding section-padding-bottom-curve">
      <div className="content-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">UPCOMING EVENTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">
            Join Us for Memorable Experiences
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            From wine tastings to seasonal celebrations, discover upcoming events that showcase 
            the best of Casa Larga's hospitality and exceptional wines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg" 
              alt="Wine Tasting Event" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-amber-700 font-medium">March 15, 2024</span>
              <h3 className="text-xl font-serif text-amber-900 mt-2 mb-3">Spring Wine Tasting</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join us for an exclusive tasting of our spring releases paired with local artisan cheeses.
              </p>
              <a href="#" className="text-amber-700 font-medium text-sm hover:text-amber-800">Learn More →</a>
            </div>
          </div>
          
          {/* Event Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg" 
              alt="Vineyard Tour" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-amber-700 font-medium">March 22, 2024</span>
              <h3 className="text-xl font-serif text-amber-900 mt-2 mb-3">Vineyard Tours</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore our vineyards and learn about our winemaking process from grape to glass.
              </p>
              <a href="#" className="text-amber-700 font-medium text-sm hover:text-amber-800">Learn More →</a>
            </div>
          </div>
          
          {/* Event Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg" 
              alt="Harvest Festival" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-amber-700 font-medium">April 5, 2024</span>
              <h3 className="text-xl font-serif text-amber-900 mt-2 mb-3">Harvest Celebration</h3>
              <p className="text-gray-600 text-sm mb-4">
                Celebrate the harvest season with live music, food trucks, and wine specials.
              </p>
              <a href="#" className="text-amber-700 font-medium text-sm hover:text-amber-800">Learn More →</a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="custom-catalog-button">
            <span className="button-content-wrapper">
              VIEW ALL EVENTS
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;