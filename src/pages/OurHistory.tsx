import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';
import './OurHistory.css';

interface TimelineEvent {
  year: string;
  label: string;
  title: string;
  content: string[];
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1931",
    label: "A Gaetan Beginning",
    title: "Born in Gaeta, Italy",
    content: [
      "Andrew Colaruotolo is born in Gaeta, Italy, a small Mediterranean fishing village between Rome and Naples.",
      "It is here, in his family's vineyards, that he first learns the art of winemaking and the importance of a meticulously tended vineyard.",
      "His grandmother teaches him that only careful attention to every vine will yield the fruit required to produce high quality wine."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/09/4c037f636c3c55436ad9ca4091784592e1762573.webp"
  },
  {
    year: "1948",
    label: "The American Dream",
    title: "Journey to America",
    content: [
      "At the age of 17, Andrew immigrates to Rochester, New York, seeking a better life after the turmoil of World War II.",
      "He begins his career as a mason, studying architecture at RIT and learning English at night.",
      "His sister Eliza joins him, and together they work to build new lives in America while honoring their Italian heritage."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp"
  },
  {
    year: "1957",
    label: "A Partnership for Life",
    title: "Marriage and New Beginnings",
    content: [
      "Andrew marries Ann Campbell, a Rochester native with a shared appreciation for Italian heritage.",
      "Together, they found Anco Builders, a successful home-building company that establishes their reputation for quality craftsmanship.",
      "Their partnership in business and life becomes the foundation for everything that follows."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp"
  },
  {
    year: "1974",
    label: "The First Vines",
    title: "Planting Dreams",
    content: [
      "Driven by a desire to reconnect with his roots, Mr. C plants the first vines on a picturesque hill in Fairport, New York.",
      "He names the vineyard 'Casa Larga,' in honor of his grandparents' vineyards in Italy where the highest quality grapes were grown.",
      "What begins as a hobby soon becomes a passion that will define the family's legacy."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp"
  },
  {
    year: "1978",
    label: "A Vintage of Victory",
    title: "New York's 21st Winery",
    content: [
      "The first harvest from Casa Larga produces an award-winning vintage, earning recognition at wine competitions.",
      "Casa Larga officially becomes New York State's 21st licensed winery, marking the beginning of commercial operations.",
      "The early success validates Andrew's vision and his grandmother's teachings about meticulous vineyard care."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp"
  },
  {
    year: "2004",
    label: "Passing the Torch",
    title: "A Legacy Continues",
    content: [
      "Casa Larga mourns the passing of its visionary founder, Mr. C, in 2004, followed by his beloved wife, Mrs. C, in 2015.",
      "Their spirit and 'old-world approach to making wine and doing business' live on through their children.",
      "The family's commitment to quality and tradition remains unwavering as the next generation takes the helm."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png"
  },
  {
    year: "Today",
    label: "A New Era",
    title: "The Legacy Lives On",
    content: [
      "The Colaruotolo children—John, Mary Jo, and Andrea—continue their parents' legacy, each playing an active role in the winery's operations.",
      "John serves as Director of Winemaking, Mary Jo manages Accounting and IT, and Andrea leads Marketing efforts.",
      "The third generation of the family is now beginning to contribute, ensuring that the Casa Larga tradition will continue for years to come."
    ],
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png"
  }
];

const OurHistory: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('heritage-intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="our-history-page">
      {/* Hero Section - A Legacy of Wine */}
      <section className="relative h-screen overflow-hidden flex flex-col">
        {/* Desktop Header */}
        <header className="hidden lg:block absolute top-0 left-0 w-full z-10 bg-transparent pt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-center relative pb-6 mb-6">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
              
              <div className="bg-transparent px-4 z-10 flex flex-col items-center gap-3">
                <a href="/">
                  <img
                    src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                    alt="Casa Larga Logo"
                    className="h-20 w-auto filter brightness-0 invert"
                  />
                </a>
                
                <nav>
                  <ul className="flex items-center justify-center gap-20">
                    <li><a href="/about" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">ABOUT</a></li>
                    <li><a href="#visit" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">VISIT US</a></li>
                    <li><a href="#shop" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">SHOP WINES</a></li>
                    <li><a href="#events" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">WINERY EVENTS</a></li>
                    <li><a href="/private-events" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">PRIVATE EVENTS</a></li>
                  </ul>
                </nav>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30">
                <a href="/cart" className="relative flex items-center text-white p-2">
                  <ShoppingCart size={24} />
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden absolute top-0 left-0 w-full z-10 bg-transparent p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <a href="/">
                  <img
                    src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                    alt="Casa Larga Logo"
                    className="h-15 w-auto filter brightness-0 invert"
                  />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="/cart" className="relative flex items-center text-white p-2">
                  <ShoppingCart size={24} />
                  <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
                </a>
                <button
                  className="text-white p-1"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <nav className="mt-4 bg-black/90 rounded-lg border-t border-white/20">
                <ul className="py-2">
                  <li className="border-b border-white/10 last:border-b-0">
                    <a href="/about" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">ABOUT</a>
                  </li>
                  <li className="border-b border-white/10 last:border-b-0">
                    <a href="#visit" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">VISIT US</a>
                  </li>
                  <li className="border-b border-white/10 last:border-b-0">
                    <a href="#shop" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">SHOP WINES</a>
                  </li>
                  <li className="border-b border-white/10 last:border-b-0">
                    <a href="#events" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">WINERY EVENTS</a>
                  </li>
                  <li className="border-b border-white/10 last:border-b-0">
                    <a href="/private-events" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">PRIVATE EVENTS</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
          autoPlay
          muted
          playsInline
          loop
          src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Casa-Larga-Video-1.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-[-1]"></div>

        <div className="absolute inset-0 grid place-items-center z-[5] text-center px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="font-serif font-normal text-[clamp(32px,6vw,72px)] leading-[1.1] text-shadow-sm text-white max-w-[20ch] mx-auto tracking-[0.02em]">
                A LEGACY OF WINE,<br />
                A FUTURE OF TRADITION
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button onClick={scrollToNext} aria-label="Scroll to next section" className="text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 animate-bounce">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Introduction - The Heart of Our Heritage */}
      <section id="heritage-intro" className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-center items-center mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" className="w-[100px] h-[100px]" />
          </div>
          
          <span className="section-subtitle text-center block">THE HEART OF OUR HERITAGE</span>
          
          <div className="text-center">
            <p className="section-description">
              Casa Larga is more than a winery; it is a living tribute to our Italian heritage and the enduring legacy of our founders, Andrew and Ann Colaruotolo. Known affectionately as Mr. and Mrs. C, their passion, dedication, and love for family are the cornerstones of our continued success. This is their story, and ours.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline - The Journey of Casa Larga */}
      <section className="timeline-container">
        <div className="timeline-wrapper">
          <div className="text-center mb-24">
            <span className="section-subtitle">THE JOURNEY</span>
            <h2 className="mb-6">The Journey of Casa Larga</h2>
            <p className="section-description">
              Follow the remarkable story of Casa Larga through the decades, from a small vineyard in Italy to New York's celebrated winery.
            </p>
          </div>

          <div className="vertical-timeline">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  {event.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="timeline-description">{paragraph}</p>
                  ))}
                  <div className="timeline-image">
                    <img 
                      src={event.image} 
                      alt={event.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founders' Philosophy - A Quote to Remember */}
      <section 
        className="parallax-quote"
        style={{
          backgroundImage: "url('https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp')"
        }}
      >
        <span className="section-subtitle">THE PHILOSOPHY</span>
        <div className="quote-content">
          <div className="quote-text">
            "Only a meticulously tended vineyard will yield the fruit required to produce high quality wine."
          </div>
          <div className="quote-author">
            — Andrew Colaruotolo
          </div>
        </div>
      </section>

      {/* The Family Today - Continuing the Legacy */}
      <section className="family-gallery">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-24">
            <span className="section-subtitle">THE LEGACY</span>
            <h2 className="mb-6">The Family Today</h2>
            <p className="section-description">
              Today, the legacy of Mr. and Mrs. C is carried on by their children and grandchildren. John, our Director of Winemaking, inherited his father's passion for the craft. Mary Jo, our Director of Accounting and IT, ensures the smooth operation of the business. And Andrea, our Director of Marketing, shares the Casa Larga story with the world.
            </p>
          </div>

          {/* Featured Family Photo */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/api/placeholder/800/600" 
                alt="The Colaruotolo family in the vineyard" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <p className="text-center text-gray-600 italic mt-6 text-lg">
                The Colaruotolo family sharing a moment in the vineyard that started it all
              </p>
            </div>
          </div>

          {/* Family Roles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-amber-900 mb-3">John Colaruotolo</h3>
              <p className="text-amber-700 font-medium text-lg mb-4">Director of Winemaking</p>
              <p className="text-gray-600 leading-relaxed">Continuing the winemaking tradition with modern techniques and old-world craftsmanship, ensuring every bottle reflects the family's commitment to excellence.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-serif text-amber-900 mb-3">Mary Jo Colaruotolo</h3>
              <p className="text-amber-700 font-medium text-lg mb-4">Director of Accounting & IT</p>
              <p className="text-gray-600 leading-relaxed">Managing the business operations with the same attention to detail as the vineyard, ensuring Casa Larga runs smoothly behind the scenes.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-serif text-amber-900 mb-3">Andrea Colaruotolo</h3>
              <p className="text-amber-700 font-medium text-lg mb-4">Director of Marketing</p>
              <p className="text-gray-600 leading-relaxed">Sharing the Casa Larga story and connecting with wine lovers everywhere, bringing the family's passion to new generations.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-amber-50 p-8 md:p-12 rounded-2xl border border-amber-100 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                <strong className="text-amber-900">Together, they are committed to upholding the family's tradition of excellence,</strong> ensuring that the Casa Larga legacy continues for generations to come. The third generation is now beginning to contribute, carrying forward the values of quality, heritage, and family that have defined Casa Larga for over 50 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Experience the Legacy */}
      <section className="cta-section">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="cta-title">Experience the Casa Larga Legacy</h2>
          <div className="cta-buttons">
            <a href="#visit" className="elementor-button white">Visit Our Winery</a>
            <a href="#shop" className="elementor-button white">Shop Our Wines</a>
            <a href="#club" className="elementor-button white">Join Our Wine Club</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;