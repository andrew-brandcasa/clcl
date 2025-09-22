import React from 'react';
import { ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';
import './OurHistory.css';

const OurHistory: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('continuing-legacy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="our-history-page">
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent z-[-1]"></div>

        <div className="absolute inset-0 grid place-items-center z-[5] text-center px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex flex-col gap-6 md:gap-8">
              <span className="font-serif font-normal text-[15px] tracking-[0.3em] uppercase opacity-85 text-white">
                OUR STORY
              </span>
              <h1 className="font-serif font-normal text-[clamp(28px,5.2vw,64px)] leading-[1.15] uppercase text-shadow-sm text-white max-w-[25ch] mx-auto tracking-[0.12em]">
                A FAMILY LEGACY OF WINEMAKING EXCELLENCE
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

      {/* Introduction Section */}
      <section id="continuing-legacy" className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="flex justify-center items-center mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" className="w-[100px] h-[100px]" />
          </div>
          
          <h2 className="text-lg md:text-xl font-medium text-amber-900 uppercase tracking-widest mb-8 md:mb-12">
            CONTINUING A LEGACY
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light mb-8">
            Casa Larga is dedicated to preserving our Italian heritage. The legacies of our founders, Andrew and Ann Colaruotolo, is a key part of our continued success.
          </p>
          
          <p className="text-lg text-gray-600">
            Fondly, we call them <em className="text-amber-900 font-medium">Mr. C and Mrs. C.</em>
          </p>
        </div>
      </section>

      {/* The Story Begins - Full Width Image with Text Overlay */}
      <section className="relative py-32 md:py-40 lg:py-48">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://casalarga.casasite.com/wp-content/uploads/2025/09/4c037f636c3c55436ad9ca4091784592e1762573.webp')"
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center text-white">
            <span className="text-sm md:text-base font-medium uppercase tracking-wider mb-4 block opacity-90">
              THE BEGINNING
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-serif mb-8">
              ITALIAN BEGINNINGS
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
                Andrew Colaruotolo was born in July of 1931 in Gaeta, Italy, a small Mediterranean fishing village between Rome and Naples.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                It was here, working alongside his grandparents in the fields, where Andrew fostered a deep stewardship for the land that would shape his destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casa Larga Origins - Magazine Style Layout */}
      <section className="py-20 md:py-28 lg:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/09/d12a69a37997b0407ca91563052dbddd2647c3c5.webp" 
                alt="Original Casa Larga vineyard in Italy" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
                  THE ORIGINAL
                </span>
                <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-6">
                  Casa Larga
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Each of the Colaruotolo family's farms had a different name and specialized in different products—olives, cheese, citrus fruit.
                </p>
                
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-amber-500">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                    <strong className="text-amber-900">"Casa Larga"</strong> was the farm where Andrew's family grew grapes and made wine.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  Of all the vineyards in the Gaeta area, "Casa Larga" was known as the one where the highest quality grapes were grown. Here, Andrew learned from his grandmother that only a meticulously tended vineyard will yield the fruit required to produce high quality wine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey to America - Timeline Style */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              THE JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-8">
              From Italy to America
            </h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 1948 - Immigration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                    <div className="text-2xl font-serif font-bold text-amber-900 mb-4">1948</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-4">Journey to America</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After World War II, at age 17, Andrew immigrated to Rochester with his sister Eliza, joining their brother Frank who had already come to America in search of a better life.
                    </p>
                  </div>
                </div>
                <div className="md:pl-12">
                  <img 
                    src="https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp" 
                    alt="Andrew and Ann in their early years" 
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>
              
              {/* 1957 - Marriage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 md:pl-12">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="text-2xl font-serif font-bold text-amber-900 mb-4">1957</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-4">A New Beginning</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Andy and Ann met at a dance in 1956 and married in April 1957. They started Anco Builders, a successful home building company.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      After mastering stone masonry and becoming a successful builder, Mr. C set out to reconnect with his passion for the land.
                    </p>
                  </div>
                </div>
                <div className="md:order-1 md:pr-12">
                  <div className="bg-amber-100 p-8 rounded-xl text-center">
                    <div className="text-6xl mb-4">💑</div>
                    <p className="text-lg font-medium text-amber-900">Andrew & Ann Colaruotolo</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>
              
              {/* 1974 - The Vineyard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                    <div className="text-2xl font-serif font-bold text-amber-900 mb-4">1974</div>
                    <h3 className="text-xl font-serif text-amber-900 mb-4">The Vineyard Begins</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Andrew began planting his first vineyard in Fairport, New York, as a hobby. That vineyard soon became another business venture—Casa Larga Vineyards.
                    </p>
                  </div>
                </div>
                <div className="md:pl-12">
                  <img 
                    src="https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp" 
                    alt="Early Casa Larga vineyard" 
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New York's 21st Winery - Feature Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl font-serif font-bold mb-6 opacity-90">21st</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif mb-8">
              New York's 21st Licensed Winery
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              By 1978, Casa Larga had produced its first commercial vintage and earned the distinction of becoming New York State's 21st licensed winery.
            </p>
            
            <p className="text-lg leading-relaxed opacity-90">
              The early years were challenging but rewarding. Andrew applied the same meticulous attention to detail he had learned from his grandmother in Italy, ensuring that every vine was carefully tended and every grape met the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* The Legacy Continues - Family Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              THE LEGACY
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-8">
              A Family Tradition
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* John */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-amber-900">J</span>
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-2">John Colaruotolo</h3>
              <p className="text-amber-700 font-medium mb-4">Director of Winemaking</p>
              <p className="text-gray-600 text-sm">Continuing the winemaking tradition with modern techniques and old-world craftsmanship.</p>
            </div>
            
            {/* Mary Jo */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-amber-900">M</span>
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-2">Mary Jo Colaruotolo</h3>
              <p className="text-amber-700 font-medium mb-4">Director of Accounting & IT</p>
              <p className="text-gray-600 text-sm">Managing the business operations with the same attention to detail as the vineyard.</p>
            </div>
            
            {/* Andrea */}
            <div className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-bold text-amber-900">A</span>
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-2">Andrea Colaruotolo</h3>
              <p className="text-amber-700 font-medium mb-4">Director of Marketing</p>
              <p className="text-gray-600 text-sm">Sharing the Casa Larga story and connecting with wine lovers everywhere.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-amber-50 p-8 md:p-12 rounded-2xl border border-amber-100 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                <strong className="text-amber-900">Mr. C passed away in 2004, followed by Mrs. C in 2015.</strong> Their three children continue their legacies, each playing an active role at Casa Larga Vineyards. As the vineyard and winery continue to operate under the watchful eye of Mr. C's children, the family tradition lives on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Today and Tomorrow - Stats & Future */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">
              OUR LEGACY
            </span>
            <h2 className="text-4xl md:text-5xl leading-tight font-serif text-amber-900 mb-8">
              50+ Years of Excellence
            </h2>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center mb-16">
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-serif font-bold text-amber-900">50+</div>
              <p className="text-lg text-gray-600 font-medium">Years of winemaking excellence</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-serif font-bold text-amber-900">35</div>
              <p className="text-lg text-gray-600 font-medium">Acres of premium vineyard land</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl font-serif font-bold text-amber-900">15+</div>
              <p className="text-lg text-gray-600 font-medium">Wine varieties in production</p>
            </div>
          </div>
          
          {/* Future Vision */}
          <div className="text-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif text-amber-900 mb-6">Looking Forward</h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                Now in its second generation of family ownership, Casa Larga continues to innovate while honoring our traditions. We remain committed to producing award-winning wines and creating memorable experiences for every guest who visits our "large house."
              </p>
              <a href="/" className="elementor-button">
                VISIT CASA LARGA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;