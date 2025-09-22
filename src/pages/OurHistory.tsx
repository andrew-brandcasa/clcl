import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';
import './OurHistory.css';

interface TimelinePoint {
  year: string;
  label: string;
  description: string;
  content: {
    title: string;
    text: string;
    image?: string;
  };
}

const timelineData: TimelinePoint[] = [
  {
    year: '1931',
    label: 'Born in Italy',
    description: 'Gaeta, Italy',
    content: {
      title: 'Italian Beginnings',
      text: 'Andrew Colaruotolo was born in July of 1931 in Gaeta, Italy, a small Mediterranean fishing village between Rome and Naples. Working alongside his grandparents in the fields, Andrew fostered a deep stewardship for the land.',
      image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/4c037f636c3c55436ad9ca4091784592e1762573.webp'
    }
  },
  {
    year: '1948',
    label: 'Journey to America',
    description: 'Rochester, NY',
    content: {
      title: 'A New World',
      text: 'After World War II, at age 17, Andrew immigrated to Rochester with his sister Eliza, joining their brother Frank who had already come to America in search of a better life.',
      image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp'
    }
  },
  {
    year: '1957',
    label: 'Love & Partnership',
    description: 'Marriage',
    content: {
      title: 'Meeting Ann',
      text: 'Andy and Ann met at a dance in 1956 and married in April 1957. They started Anco Builders, a successful home building company, laying the foundation for their future dreams.',
    }
  },
  {
    year: '1974',
    label: 'First Vines',
    description: 'Fairport, NY',
    content: {
      title: 'Planting Dreams',
      text: 'Andrew began planting his first vineyard in Fairport as a hobby, reconnecting with his passion for the land. That vineyard would soon become Casa Larga Vineyards.',
      image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp'
    }
  },
  {
    year: '1978',
    label: 'First Wine',
    description: 'NY\'s 21st Winery',
    content: {
      title: 'The First Harvest',
      text: 'Casa Larga produced its first commercial vintage and earned the distinction of becoming New York State\'s 21st licensed winery, marking the beginning of a legacy.',
    }
  },
  {
    year: '2004',
    label: 'Mr. C Passes',
    description: 'Legacy Continues',
    content: {
      title: 'A Legacy Lives On',
      text: 'Casa Larga\'s founder Mr. C passed away, but his legacy lived on through his wife Ann and their three children, who continued to operate the winery with the same passion and dedication.',
    }
  },
  {
    year: 'Today',
    label: 'New Generation',
    description: '50+ Years',
    content: {
      title: 'The Future',
      text: 'Now in its second generation of family ownership, Casa Larga continues to innovate while honoring traditions, with John, Mary Jo, and Andrea leading the winery into the future.',
    }
  }
];

const storyCards = [
  {
    chapter: 'Chapter 1',
    title: 'From Gaeta to Rochester',
    summary: 'A young Italian immigrant leaves behind his homeland to chase the American dream, carrying with him the wisdom of his grandmother and a deep love for the land.',
    image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/4c037f636c3c55436ad9ca4091784592e1762573.webp'
  },
  {
    chapter: 'Chapter 2',
    title: 'Love & Partnership',
    summary: 'Andrew meets Ann at a dance, and together they build not just a successful business, but a partnership that would become the foundation of Casa Larga.',
    image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp'
  },
  {
    chapter: 'Chapter 3',
    title: 'Planting Dreams',
    summary: 'What started as a hobby vineyard in Fairport becomes a calling, as Andrew reconnects with his Italian heritage and plants the seeds of Casa Larga.',
    image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp'
  },
  {
    chapter: 'Chapter 4',
    title: 'The First Harvest',
    summary: 'From hobby to business, Casa Larga produces its first commercial vintage and becomes New York\'s 21st licensed winery, establishing a legacy of excellence.',
    image: 'https://casalarga.casasite.com/wp-content/uploads/2025/09/d12a69a37997b0407ca91563052dbddd2647c3c5.webp'
  }
];

const OurHistory: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTimelinePoint, setActiveTimelinePoint] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('story-timeline');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Reveal elements on scroll
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="our-history-page">
      {/* Progress Indicator */}
      <div className="story-progress">
        <div 
          className="story-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
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

        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-[-2]"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 z-[-1]"></div>

        <div className="absolute inset-0 grid place-items-center z-[5] text-center px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl w-full mx-auto">
            <div className="flex flex-col gap-8 md:gap-12">
              <span className="font-serif font-normal text-[15px] tracking-[0.3em] uppercase opacity-85 text-white">
                OUR STORY
              </span>
              <h1 className="font-serif font-normal text-[clamp(32px,6vw,72px)] leading-[1.1] uppercase text-shadow-sm text-white max-w-[20ch] mx-auto tracking-[0.02em]">
                A FAMILY STORY<br />
                90 YEARS IN THE MAKING
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                From a small Italian village to New York's wine country, discover the passionate journey that created Casa Larga.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button onClick={scrollToNext} aria-label="Scroll to next section" className="text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 animate-bounce">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="story-timeline" className="py-20 md:py-32 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              THE JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-6">
              Our Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any point to explore that chapter of our story
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-track">
              <div className="timeline-line"></div>
              {timelineData.map((point, index) => (
                <div
                  key={index}
                  className={`timeline-point ${activeTimelinePoint === index ? 'active' : ''}`}
                  onClick={() => setActiveTimelinePoint(index)}
                >
                  <span className="timeline-year">{point.year}</span>
                  <div className="timeline-label">{point.label}</div>
                  <div className="timeline-description">{point.description}</div>
                </div>
              ))}
            </div>

            {/* Active Timeline Content */}
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
                    {timelineData[activeTimelinePoint].content.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {timelineData[activeTimelinePoint].content.text}
                  </p>
                </div>
                {timelineData[activeTimelinePoint].content.image && (
                  <div className="order-first lg:order-last">
                    <img
                      src={timelineData[activeTimelinePoint].content.image}
                      alt={timelineData[activeTimelinePoint].content.title}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="py-20 md:py-32 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              THE CHAPTERS
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-6">
              Our Story in Chapters
            </h2>
          </div>

          <div className="story-cards">
            {storyCards.map((card, index) => (
              <div key={index} className="story-card">
                <div className="story-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="story-card-content">
                  <div className="story-card-chapter">{card.chapter}</div>
                  <h3 className="story-card-title">{card.title}</h3>
                  <p className="story-card-summary">{card.summary}</p>
                  <a href="#" className="story-card-cta">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="quote-content">
            <p className="quote-text">
              Only a meticulously tended vineyard will yield the fruit required to produce high quality wine.
            </p>
            <p className="quote-attribution">
              — Andrew's grandmother's wisdom
            </p>
          </div>
        </div>
      </section>

      {/* Immersive Casa Larga Origins */}
      <section 
        className="immersive-section scroll-reveal"
        style={{
          backgroundImage: "url('https://casalarga.casasite.com/wp-content/uploads/2025/09/d12a69a37997b0407ca91563052dbddd2647c3c5.webp')"
        }}
      >
        <div className="immersive-overlay"></div>
        <div className="immersive-content">
          <div className="immersive-eyebrow">The Original</div>
          <h2 className="immersive-title">Casa Larga</h2>
          <p className="immersive-text">
            Each of the Colaruotolo family's farms had a different name and specialized in different products. 
            "Casa Larga" was the farm where Andrew's family grew grapes and made wine. Of all the vineyards 
            in the Gaeta area, Casa Larga was known as the one where the highest quality grapes were grown.
          </p>
        </div>
      </section>

      {/* Family Tree */}
      <section className="family-tree-section scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              THE LEGACY
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-6">
              A Family Tradition
            </h2>
          </div>

          <div className="family-tree">
            <div className="founders-row">
              <div className="family-member">
                <div className="family-photo">
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-amber-900">A</span>
                  </div>
                </div>
                <div className="family-name">Andrew "Mr. C" Colaruotolo</div>
                <div className="family-role">Founder (1931-2004)</div>
              </div>
              <div className="family-member">
                <div className="family-photo">
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <span className="text-3xl font-serif font-bold text-amber-900">A</span>
                  </div>
                </div>
                <div className="family-name">Ann "Mrs. C" Colaruotolo</div>
                <div className="family-role">Co-Founder (1934-2015)</div>
              </div>
            </div>

            <div className="children-row">
              <div className="family-member">
                <div className="family-photo">
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-amber-900">J</span>
                  </div>
                </div>
                <div className="family-name">John Colaruotolo</div>
                <div className="family-role">Director of Winemaking</div>
              </div>
              <div className="family-member">
                <div className="family-photo">
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-amber-900">M</span>
                  </div>
                </div>
                <div className="family-name">Mary Jo Colaruotolo</div>
                <div className="family-role">Director of Accounting & IT</div>
              </div>
              <div className="family-member">
                <div className="family-photo">
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-amber-900">A</span>
                  </div>
                </div>
                <div className="family-name">Andrea Colaruotolo</div>
                <div className="family-role">Director of Marketing</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-amber-50 p-8 md:p-12 rounded-2xl border border-amber-100 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                <strong className="text-amber-900">Mr. C passed away in 2004, followed by Mrs. C in 2015.</strong> Their three children continue their legacies, each playing an active role at Casa Larga Vineyards. As the vineyard and winery continue to operate under the watchful eye of Mr. C's children, the family tradition lives on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Showcase */}
      <section className="stats-showcase scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-white mb-6">
              50+ Years of Excellence
            </h2>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Years of winemaking excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35</div>
              <div className="stat-label">Acres of premium vineyard land</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Wine varieties in production</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 md:py-32 bg-white scroll-reveal">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
            LOOKING FORWARD
          </span>
          <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-8">
            The Future of Casa Larga
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
            Now in its second generation of family ownership, Casa Larga continues to innovate while honoring our traditions. We remain committed to producing award-winning wines and creating memorable experiences for every guest who visits our "large house."
          </p>
          <a href="/" className="elementor-button">
            VISIT CASA LARGA
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;