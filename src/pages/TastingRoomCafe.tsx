import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, MapPin, Phone, Clock, Star, Wine, Users, Calendar } from 'lucide-react';
import './TastingRoomCafe.css';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'mr-c-panino',
    name: "Mr. C's Panino",
    price: '$13.40',
    shortDescription: 'Genoa salami, basil pesto, lettuce, tomato, mozzarella, roasted red peppers with a balsamic glaze.',
    fullDescription: 'A tribute to our founder, this classic Italian panino is packed with flavor. We layer premium Genoa salami, house-made basil pesto, fresh mozzarella, and roasted red peppers, all drizzled with a sweet balsamic glaze and served with a side of zesty Giardiniera.',
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'barrel-room-bites'
  },
  {
    id: 'charcuterie-board',
    name: 'Artisan Charcuterie Board',
    price: '$24.00',
    shortDescription: 'Selection of cured meats, artisan cheeses, olives, nuts, and seasonal accompaniments.',
    fullDescription: 'Our signature charcuterie board features a carefully curated selection of Italian cured meats, local artisan cheeses, Castelvetrano olives, marcona almonds, seasonal fruit, and house-made preserves. Perfect for sharing and pairing with our wines.',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'barrel-room-bites'
  },
  {
    id: 'margherita-pizza',
    name: 'Wood-Fired Margherita',
    price: '$16.00',
    shortDescription: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.',
    fullDescription: 'Our classic Margherita pizza showcases the beauty of simplicity. Made with authentic San Marzano tomatoes, creamy fresh mozzarella, aromatic basil, and finished with premium extra virgin olive oil. Cooked to perfection in our wood-fired oven.',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'wood-fired-pizza'
  },
  {
    id: 'prosciutto-pizza',
    name: 'Prosciutto & Arugula',
    price: '$19.00',
    shortDescription: 'Prosciutto di Parma, fresh arugula, shaved Parmigiano-Reggiano, truffle oil.',
    fullDescription: 'An elegant combination of paper-thin Prosciutto di Parma, peppery arugula, aged Parmigiano-Reggiano, and a delicate drizzle of truffle oil. This pizza embodies the sophisticated flavors of Northern Italy.',
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'wood-fired-pizza'
  },
  {
    id: 'petite-noir',
    name: 'Casa Larga Petite Noir',
    price: '$8.00',
    shortDescription: 'Light-bodied Pinot Noir with bright cherry and raspberry notes.',
    fullDescription: 'Our signature Petite Noir offers delicate charm with vibrant fruit flavors and a smooth finish. Perfect for pairing with lighter dishes or enjoying on its own.',
    image: 'https://media.liquormax.com/dtakhbk0dduu5inarcubm/casa-larga-petite-noir-1.png',
    category: 'wine-by-glass'
  },
  {
    id: 'riesling',
    name: 'Finger Lakes Riesling',
    price: '$7.00',
    shortDescription: 'Crisp and refreshing with notes of green apple and citrus.',
    fullDescription: 'Our estate-grown Riesling captures the essence of the Finger Lakes terroir with its bright acidity, mineral notes, and perfect balance of fruit and elegance.',
    image: 'https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-4.png',
    category: 'wine-by-glass'
  }
];

const TastingRoomCafe: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('barrel-room-bites');
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('introduction');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openMenuModal = (item: MenuItem) => {
    setSelectedMenuItem(item);
  };

  const closeMenuModal = () => {
    setSelectedMenuItem(null);
  };

  const filteredMenuItems = menuItems.filter(item => item.category === activeMenuTab);

  const menuTabs = [
    { id: 'barrel-room-bites', label: 'Barrel Room Bites' },
    { id: 'wood-fired-pizza', label: 'Wood-Fired Pizza' },
    { id: 'wine-by-glass', label: 'Wine by the Glass' },
    { id: 'cocktails-flights', label: 'Cocktails & Flights' }
  ];

  return (
    <div className="tasting-room-cafe-page">
      {/* Header */}
      <header className="hidden lg:block absolute top-0 left-0 w-full z-20 bg-transparent pt-8">
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
                  <li><a href="/tasting-room-cafe" className="text-amber-400 font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">CAFÉ</a></li>
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
      <header className="lg:hidden absolute top-0 left-0 w-full z-20 bg-transparent p-4">
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
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="/tasting-room-cafe" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-400 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">CAFÉ</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative h-screen overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-[-2]"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-[-1]"></div>

        <div className="absolute inset-0 grid place-items-center z-[5] text-center px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="font-serif font-normal text-[clamp(32px,6vw,72px)] leading-[1.1] text-shadow-sm text-white max-w-[20ch] mx-auto tracking-[0.02em]">
                THE TASTING ROOM CAFÉ<br />
                AT CASA LARGA
              </h1>
              <h2 className="font-serif font-light text-[clamp(18px,3vw,32px)] leading-[1.3] text-white/90 max-w-[30ch] mx-auto">
                Where Italian Heritage Meets Finger Lakes Charm
              </h2>
              <div className="mt-8">
                <a href="#reservations" className="cafe-cta-button">
                  MAKE A RESERVATION
                </a>
              </div>
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
      <section id="introduction" className="py-20 md:py-28 lg:py-36 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-white mb-6">
                A Culinary Journey Through Italy
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Welcome to The Tasting Room Café, the heart of the Casa Larga experience. Inspired by our family's Italian roots and the bounty of the Finger Lakes, our café offers a warm and inviting atmosphere where you can relax, savor, and celebrate.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-400">
                From wood-fired pizzas to artisanal charcuterie, every dish is crafted to complement our award-winning wines. Our menu celebrates the authentic flavors of Italy while showcasing the finest local ingredients from the Finger Lakes region.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Casa Larga Tasting Room Café exterior" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-white mb-6">
              Our Menu
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Discover our carefully crafted selection of Italian-inspired dishes, wood-fired pizzas, and perfectly paired wines.
            </p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMenuTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeMenuTab === tab.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openMenuModal(item)}
                className="menu-item-card bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-white">{item.name}</h3>
                    <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>

          {activeMenuTab === 'cocktails-flights' && (
            <div className="text-center mt-12">
              <p className="text-gray-400 text-lg">
                Our cocktail and flight menu is coming soon! In the meantime, enjoy our extensive wine selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Menu Item Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeMenuModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedMenuItem.image} 
                alt={selectedMenuItem.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif text-white">{selectedMenuItem.name}</h3>
                <span className="text-amber-400 font-bold text-xl">{selectedMenuItem.price}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{selectedMenuItem.fullDescription}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tastings & Events Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-white mb-6">
              Tastings & Events
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Enhance your visit with our curated tasting experiences and special events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-black rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wine className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Wine & Chocolate Pairings</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Indulge in a curated selection of our wines expertly paired with artisan chocolates from Hedonist.
              </p>
              <a href="#" className="cafe-cta-button-small">
                Learn More
              </a>
            </div>

            <div className="bg-black rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Celebrate with Us</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                From birthdays to corporate events, we offer a variety of group tasting packages to make your celebration unforgettable.
              </p>
              <a href="#" className="cafe-cta-button-small">
                Book an Event
              </a>
            </div>

            <div className="bg-black rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">Join the Family</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Become a member of our Wine Lover's Club and enjoy exclusive benefits, discounts, and events.
              </p>
              <a href="#" className="cafe-cta-button-small">
                Discover the Club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-white mb-6">
              A Glimpse into the Café
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Experience the warmth and elegance of our tasting room through these moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Tasting room ambiance"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Charcuterie board close-up"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Wood-fired pizza"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Guests enjoying wine"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Bartender crafting cocktails"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Wine tasting experience"
                className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 md:py-28 lg:py-36 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Map */}
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.123456789!2d-77.4419!3d43.0998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA1JzU5LjMiTiA3N8KwMjYnMzAuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa Larga Vineyards Location"
              ></iframe>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-white mb-6">
                Visit Us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Address</p>
                    <p className="text-gray-300">2287 Turk Hill Rd<br />Fairport, NY 14450</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-3">Hours of Operation</p>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="font-medium">Monday-Thursday:</span> 11am - 6pm</p>
                      <p><span className="font-medium">Friday-Saturday:</span> 11am - 9pm</p>
                      <p><span className="font-medium">Sunday:</span> 11am - 6pm</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Contact</p>
                    <p className="text-gray-300">(585) 223-4210</p>
                    <p className="text-gray-300">info@casalarga.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                <p className="text-amber-400 font-medium mb-2">Please Note:</p>
                <p className="text-gray-300">Please place your order at the bar. Our friendly staff will be happy to assist you with menu selections and wine pairings.</p>
              </div>

              <div className="pt-4">
                <a href="#reservations" className="cafe-cta-button">
                  MAKE A RESERVATION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TastingRoomCafe;