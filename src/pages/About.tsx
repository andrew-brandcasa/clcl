import React from 'react';
import { ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
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
    <div className="about-page">
      {/* Hero Section - Same as homepage */}
      <section className="relative h-screen overflow-hidden flex flex-col">
        {/* Desktop Header */}
        <header className="absolute top-0 left-0 w-full z-10 bg-transparent pt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-center relative pb-6 mb-6">
              {/* Decorative lines */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
              
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                {/* Left side content if needed */}
              </div>
              
              <div className="bg-transparent px-4 z-10 flex flex-col items-center gap-3">
                <a href="/">
                  <img
                    src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                    alt="Casa Larga Logo"
                    className="h-20 w-auto filter brightness-0 invert"
                  />
                </a>
                
                <nav className="hidden lg:block">
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

      {/* Introduction Section - Welcome style */}
      <section id="continuing-legacy" className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-center items-center mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" className="w-[100px] h-[100px]" />
          </div>
          
          <h2 className="text-lg md:text-xl font-medium text-amber-900 uppercase tracking-widest text-center mb-8 md:mb-12">
            CONTINUING A LEGACY
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed text-gray-600 text-center">
              Casa Larga is dedicated to preserving our Italian heritage. The legacies of our founders, Andrew and Ann Colaruotolo, is a key part of our continued success. Fondly, we call them Mr. C and Mrs. C.
            </p>
          </div>
        </div>
      </section>

      {/* Italian Beginnings Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">OUR ORIGINS</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">
                  ITALIAN BEGINNINGS
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Andrew Colaruotolo was born in July of 1931 to Antonio and Josephine Colaruotolo in Gaeta, Italy, a small Mediterranean fishing village located between Rome and Naples. He was the third of four children.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  His father, Antonio, was a merchant marine as well as a fisherman and farmer. Antonio spent many months abroad in the newfound land of America, working as a laborer to send home money to his wife and four children.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  In his youth, Andrew spent much of his time working alongside his grandparents in the fields and in their small, family-owned grocery store. In Italy, it was customary for a family to have several very small farms that were in different climatic regions perfectly suited for growing different types of fruits and vegetables. It was here in the fields of Italy where Andrew fostered a stewardship for the land.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Each of the Colaruotolo family's farms had a different name and specialized in a different product, such as olives, cheese and citrus fruit. "Casa Larga" was the farm where Andrew's family grew grapes and made wine. Of all the vineyards in the Gaeta area, "Casa Larga" was known as the one where the highest quality grapes were grown. Here, Andrew was taught by his grandmother that only a meticulously tended vineyard will yield the fruit required to produce high quality wine.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  After World War II, at the age of 17, Andrew immigrated to Rochester along with his sister, Eliza. Leaving behind their mother, father, sister and war-torn country, the siblings joined their brother, Frank, who had already come to Rochester in search of a better life. Andrew began his career as a mason, studying architecture at RIT and learning English at night.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/09/4c037f636c3c55436ad9ca4091784592e1762573.webp" 
                  alt="Historic photo of Andrew Colaruotolo in Italy" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/09/d12a69a37997b0407ca91563052dbddd2647c3c5.webp" 
                  alt="Early Casa Larga vineyard in Italy" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italian American Roots Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/09/224ad2d758ea70c1cb6d2ff3fd6b348777d41770.webp" 
                  alt="Andrew and Ann Colaruotolo in their early years" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">THE JOURNEY</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">
                  ITALIAN AMERICAN ROOTS
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Antionette Campbell was born in 1934 in Rochester to immigrant parents. She grew up speaking Italian at home and taught herself to speak English at the age of 5 when she began kindergarten. She graduated from Jefferson High School in 1952 and later attended the Rochester Business Institute.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Andy and Ann met at a dance in 1956 and married in April of 1957. Shortly after they wed, they started a home building company, Anco Builders. After mastering the art of stone masonry and becoming a successful home builder, Mr. C set out to reconnect with his passion for the land. In 1974, he started planting a vineyard in Fairport as a hobby. That vineyard soon became another business venture – Casa Larga Vineyards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Winery Begins Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">THE BEGINNING</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900">
                  THE WINERY BEGINS
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  In 1974, Andrew began planting his first vineyard in Fairport, New York, as a hobby. What started as a passion project quickly grew into something much larger. By 1978, Casa Larga had produced its first commercial vintage and became New York's 21st licensed winery.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  The early years were challenging but rewarding. Andrew applied the same meticulous attention to detail he had learned from his grandmother in Italy, ensuring that every vine was carefully tended and every grape met the highest standards. This dedication to quality would become the foundation of Casa Larga's reputation for excellence.
                </p>
              </div>
            </div>
            
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp" 
                  alt="Early Casa Larga vineyard in Fairport, New York" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A New Era Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">THE LEGACY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-8">
              A NEW ERA
            </h2>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Andrew and Ann had three children: John (Marie), Mary Jo and Andrea (Dennis). Andrew and Ann were also blessed with a healthy harvest of grandchildren (Nina Marie, Andrew John, Alana, Andrea, Maria, Lucy, Andrew, Thomas and Elizabeth).
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              In 2004, Casa Larga's founder Mr. C passed away. Anyone who knew him was immediately captivated by his striking build and charismatic personality. Mr. C was succeeded by wife, Ann (Mrs. C), who left us in September of 2015. She gave us a legacy of family, charity and tradition. Mrs. C was a uniquely great lady and her many passions made Casa Larga what it is today. Her love of our family was matched in her generosity to others and her deep faith. She and Mr. C gave us our old-world approach to making wine and doing business.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Their three children are continuing their legacies – each has an active role at Casa Larga Vineyards. Andrea is Director of Marketing, Mary Jo is Director of Accounting and IT, and John is Director of Winemaking. As the vineyard and winery continue to operate under the watchful eye of Mr. C's children, a variety of other family and non-family employees at various positions are also continuing the legacy. Several grandchildren can be seen on occasion at the winery, doing their parts to continue the family tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Today and Tomorrow Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">OUR FUTURE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-8">
              TODAY AND TOMORROW
            </h2>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Now in its second generation of family ownership, Casa Larga continues to innovate while honoring our traditions. We remain committed to producing award-winning wines and creating memorable experiences for every guest who visits our "large house."
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Over the years, our wines have earned numerous awards and accolades, cementing our reputation as one of New York's premier wineries. We continue to expand our offerings while maintaining the quality and craftsmanship that Mr. C and Mrs. C instilled in every bottle.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">BY THE NUMBERS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">
              Our Legacy in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900">
                50+
              </div>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                Years of winemaking excellence
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900">
                35
              </div>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                Acres of premium vineyard land
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900">
                15+
              </div>
              <p className="text-base md:text-lg text-gray-600 font-medium">
                Wine varieties in production
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;