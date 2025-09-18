import React from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('down');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section relative hero-section">
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        muted
        playsInline
        loop
        src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Casa-Larga-Video-1.mp4"
      />

      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left" />
            <div className="header-center">
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="logo"
                />
              </a>
              
              <nav className="desktop-navigation-inline">
                <ul className="nav-menu">
                  <li><a href="#visit">VISIT US</a></li>
                  <li><a href="#shop">SHOP WINES</a></li>
                  <li><a href="#events">WINERY EVENTS</a></li>
                  <li><a href="/private-events">PRIVATE EVENTS</a></li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <a href="/cart" className="cart-link">
                <ShoppingCart size={24} />
                <span className="cart-count">0</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="container">
          <div className="mobile-header-content">
            <div className="mobile-logo">
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="mobile-controls">
              <a href="/cart" className="cart-link">
                <ShoppingCart size={24} />
                <span className="cart-count">0</span>
              </a>
              <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="mobile-navigation">
              <ul className="mobile-nav-menu">
                <li><a href="#visit" onClick={toggleMobileMenu}>VISIT US</a></li>
                <li><a href="#shop" onClick={toggleMobileMenu}>SHOP WINES</a></li>
                <li><a href="#events" onClick={toggleMobileMenu}>WINERY EVENTS</a></li>
                <li><a href="/private-events" onClick={toggleMobileMenu}>PRIVATE EVENTS</a></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="hero-content pb-16 md:pb-20">
        <div className="container">
          <div className="hero-text">
            <span className="hero-eyebrow">ITALIAN HERITAGE</span>
            <h1 className="hero-title">
              A LEGACY OF ITALIAN WINEMAKING IN NEW YORK
            </h1>
            <p className="hero-subtitle">
              Celebrating 51 years from graft to glass.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <button onClick={scrollToNext} aria-label="Scroll to next section">
          <svg width="24" height="84" viewBox="0 0 24 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Vertical line */}
            <line x1="12" y1="0" x2="12" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            {/* Arrow pointer */}
            <path d="M12 84L6 72H18L12 84Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;