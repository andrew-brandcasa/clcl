import React, { useState } from 'react';
import { ChevronDown, MapPin, Users, Wine } from 'lucide-react';
import './PrivateEvents.css';

const PrivateEvents: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    numberOfGuests: '',
    message: ''
  });

  const scrollToNext = () => {
    const nextSection = document.getElementById('let-us-host-you');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="private-events-page">
      {/* Hero Section */}
      <section className="private-events-hero">
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
              <span className="hero-eyebrow">WHERE MEMORIES ARE MADE</span>
              <h1 className="hero-title">
                HOST YOUR PRIVATE EVENT AT CASA LARGA
              </h1>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button onClick={scrollToNext} aria-label="Scroll to next section">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Let Us Host You - Welcome style */}
      <section id="let-us-host-you" className="py-20 md:py-24 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="stamp-icon mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" />
          </div>
          
          <h2 className="text-lg md:text-xl font-medium text-amber-900 uppercase tracking-widest text-center mb-8 md:mb-12">LET US HOST YOU</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-600 text-center">
              Casa Larga provides the perfect backdrop for your most important celebrations. With our stunning 
              vineyard views, elegant facilities, and award-winning wines, we create unforgettable experiences 
              for weddings, corporate events, and special occasions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MapPin className="w-12 h-12 text-amber-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900">Breathtaking Setting</h3>
              <p className="text-gray-600">Panoramic vineyard views and beautifully landscaped grounds</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Users className="w-12 h-12 text-amber-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900">Flexible Spaces</h3>
              <p className="text-gray-600">Indoor and outdoor venues to accommodate 50-300 guests</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Wine className="w-12 h-12 text-amber-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900">Award-Winning Wines</h3>
              <p className="text-gray-600">Exclusive access to our complete wine collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Venue - OurVenue style */}
      <section className="py-20 md:py-28 lg:py-36 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://casalarga.casasite.com/wp-content/uploads/2025/08/7662debe55392745c26323d52af7183e2300478a.webp" 
            alt="" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-sm md:text-base font-medium text-white uppercase tracking-wider mb-4 block">OUR VENUE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-serif text-white mb-6">
              BELLA VISTA AT<br />
              CASA LARGA
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white mb-8">
              With breathtaking views (Bella Vista means "Beautiful View" in Italian), our venue hosts up to 
              300 guests for weddings, corporate gatherings, and social events. The winery's timeless elegance 
              features dramatic floor-to-ceiling windows, vaulted ceilings, and a wraparound deck. Our open, 
              pillar-free floor plan offers complete flexibility to bring your vision to life.
            </p>
            <a href="#inquire" className="elementor-button white">
              BOOK A PRIVATE EVENT
            </a>
          </div>
        </div>
      </section>

      {/* Event Types - OurHistory style */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">EVENT TYPES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">Our Services</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              Our pricing is designed to make mobile bar service simple and transparent. Every package includes 
              3 hours of bar service, setup and breakdown, professional staff, and all the essentials — with 
              flexible add-ons to fit your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/4baba914a1de8731acdbc0ad8c1d02c8f54037ec.webp" 
                  alt="Wedding celebration at Casa Larga vineyard" 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900 mb-4">Weddings</h3>
              <p className="text-gray-600 mb-6">
                Create your dream wedding surrounded by rolling vineyards and elegant charm. Our wedding 
                packages include ceremony and reception options with customizable details.
              </p>
              <a href="#" className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/a3a395d6313a0da9beca8495e462c809a30e81cd.webp" 
                  alt="Corporate event at Casa Larga winery" 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6">
                Impress clients and reward employees with sophisticated corporate gatherings. Perfect for 
                meetings, retreats, product launches, and team building.
              </p>
              <a href="#" className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/64f3e826d389d57eb75ad44a2114ff3c24d99e3b.webp" 
                  alt="Special occasion celebration at Casa Larga" 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-amber-900 mb-4">Proms & Special Occasions</h3>
              <p className="text-gray-600 mb-6">
                Celebrate life's milestones in style. From proms to anniversaries, graduations to family 
                reunions, we make every occasion special with memorable experiences.
              </p>
              <a href="#" className="text-amber-700 font-semibold hover:text-amber-900 transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Similar to UpcomingEvents with form */}
      <section id="inquire" className="py-20 md:py-28 lg:py-36 bg-gray-50 relative">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-8"
          style={{
            backgroundImage: "url('/Frame 1618873355.png')",
            backgroundPosition: "bottom center",
            backgroundSize: "100vw auto",
            filter: "grayscale(1)"
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider mb-4 block">INQUIRE NOW</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">Start Planning Your Event</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Ready to create an unforgettable celebration? Contact our events team to begin planning your perfect day at Casa Larga.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="prom">Prom</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Number of Guests"
                  min="1"
                  max="300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="elementor-button">
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;