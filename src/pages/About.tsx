import React from 'react';
import { ChevronDown } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('continuing-legacy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section - Similar to homepage hero */}
      <section className="about-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          playsInline
          loop
          poster="https://casalarga.casasite.com/wp-content/uploads/2025/08/7662debe55392745c26323d52af7183e2300478a.webp"
        >
          <source src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Casa-Larga-Video-1.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <span className="hero-eyebrow">ITALIAN HERITAGE</span>
              <h1 className="hero-title">
                A FAMILY LEGACY OF WINEMAKING EXCELLENCE
              </h1>
              <p className="hero-subtitle">
                For more than five decades, Casa Larga has tended cool-climate vines on the hills of 
                Fairport, New York, honoring Italian craft and Finger Lakes character with every vintage.
              </p>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button onClick={scrollToNext} aria-label="Scroll to next section">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Continuing Legacy - Similar to Welcome section */}
      <section id="continuing-legacy" className="py-20 md:py-24 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="stamp-icon mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" />
          </div>
          
          <h2 className="text-lg md:text-xl font-medium text-amber-900 uppercase tracking-widest text-center mb-8 md:mb-12">CONTINUING A LEGACY</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-600 text-center">
              Casa Larga began as a family dream and became a New York wine landmark. What started as a 
              backyard passion grew into an estate winery known for inviting hospitality, meticulous cellar 
              work, and wines that reflect place. Today the traditions that shaped our first bottles continue 
              to guide our vineyards, our tasting room, and the way we welcome guests.
            </p>
          </div>
        </div>
      </section>

      {/* Italian Beginnings - Similar to OurHistory section */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 pr-0 lg:pr-8 xl:pr-12">
              <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">ITALIAN BEGINNINGS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">Our Story Begins</h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Our story traces back to the Colaruotolo family, where wine was part of daily life—set on 
                  the table, shared with neighbors, and made with care. Recipes and techniques traveled from 
                  Italy to upstate New York, along with a belief that great wine starts with patience and 
                  respect for the land.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Those early years were hands-on and humble: tending vines after work, repairing trellises 
                  by hand, and celebrating the first successful fermentations with family. The lessons were 
                  simple—work honestly, harvest only when the fruit is ready, and never stop learning.
                </p>
              </div>
            </div>
            
            <div className="pl-0 lg:pl-8 xl:pl-12">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
                  alt="Historic photo of the Colaruotolo family in their early winemaking days" 
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italian American Roots - Full width image like OurVenue */}
      <section className="relative py-20 md:py-28 lg:py-36">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://casalarga.casasite.com/wp-content/uploads/2025/08/4baba914a1de8731acdbc0ad8c1d02c8f54037ec.webp" 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="bg-white bg-opacity-95 rounded-2xl p-8 md:p-12 lg:p-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 italic">
              The cellar became a gathering place. Sunday dinners stretched long, friends arrived with 
              stories, and the house filled with the aromas of simmering sauce and fresh bread. Wine 
              connected generations—linking a new life in New York to memories of sun-baked hillsides in Italy.
            </p>
          </div>
        </div>
      </section>

      {/* The Winery Begins - Mirror of Italian Beginnings */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="pl-0 lg:pl-8 xl:pl-12 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
                  alt="Mr. Colaruotolo working in the vineyard among the original vine rows" 
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 italic">
                    Mr. C. in the vineyard, tending the rows that started it all.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 md:space-y-8 pr-0 lg:pr-8 xl:pr-12 order-1 lg:order-2">
              <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">THE WINERY BEGINS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">From Dream to Reality</h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  What started as a personal cellar soon outgrew the basement. Encouraged by family and friends, 
                  vines were planted on the Fairport hills and a bonded winery was born. The goal was 
                  straightforward: make honest, expressive wines and invite people to experience where they come from.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  From the earliest tastings to our first public events, the response was immediate. Visitors 
                  came for the wines and stayed for the view, the warmth, and the feeling that they were part 
                  of something built with heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A New Era - Similar to OurHistory layout */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-16">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/08/a3a395d6313a0da9beca8495e462c809a30e81cd.webp" 
                alt="Modern Casa Larga winery with guests enjoying wine tasting" 
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">A NEW ERA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">Modern Excellence</h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  As the estate grew, the next generation stepped in—modernizing the cellar, refining vineyard 
                  practices, and expanding guest experiences while preserving the soul of the place.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Today Casa Larga hosts tastings, tours, classes, and celebrations overlooking the vines. 
                  Each season brings new visitors, new releases, and familiar faces returning to raise a glass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Cards - Similar to WineOnWheels accordion style */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-serif text-amber-900 mb-6 uppercase tracking-wide">
                Winemaking Philosophy
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                We believe in gentle handling, clarity of fruit, and balance. Fermentations are kept cool 
                for freshness; oak is used thoughtfully for texture, not domination. Every lot is tasted 
                repeatedly—patience and precision from crush to bottle.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-serif text-amber-900 mb-6 uppercase tracking-wide">
                Today and Tomorrow
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                We continue to invest in sustainable practices, thoughtful canopy management, and careful 
                harvesting. Sparkling projects, small-lot selections, and cellar experiments keep us curious. 
                What never changes is our commitment to hospitality and wines that speak of this ridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards - Similar to Welcome navigation grid */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">RECOGNITION</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">Awards & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L29.09 14.26L40 16L32 23.74L34.18 34.65L24 29.27L13.82 34.65L16 23.74L8 16L18.91 14.26L24 4Z" fill="#AF6900"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Decades of Craft</h4>
              <p className="text-xs text-gray-600">Family-run since the first estate vines took root.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L22 8L32 2L36 12L46 16L40 26L46 36L36 40L32 50L22 44L12 50L8 40L2 36L8 26L2 16L8 12L12 2Z" fill="#AF6900"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Estate Vineyards</h4>
              <p className="text-xs text-gray-600">Cool-climate fruit from our hillside rows in Fairport.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#AF6900"/>
                  <path d="M16 24L20 28L32 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Cellar Discipline</h4>
              <p className="text-xs text-gray-600">Clean ferments, careful blending, bottled at peak expression.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 12C19.58 12 16 15.58 16 20V28C16 32.42 19.58 36 24 36C28.42 36 32 32.42 32 28V20C32 15.58 28.42 12 24 12Z" fill="#AF6900"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Welcoming Hospitality</h4>
              <p className="text-xs text-gray-600">Tastings, tours, and celebrations overlooking the vines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Similar to UpcomingEvents footer */}
      <section className="py-16 md:py-20 bg-white relative">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-8"
          style={{
            backgroundImage: "url('/Frame 1618873355.png')",
            backgroundPosition: "bottom center",
            backgroundSize: "100vw auto",
            filter: "grayscale(1)"
          }}
        />
        
        <div className="relative z-10 text-center">
          <a href="#visit" className="elementor-button">
            PLAN YOUR VISIT
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;