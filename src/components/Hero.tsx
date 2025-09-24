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
    <div className="hero-section">
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
                  <li><a href="/our-history">OUR HISTORY</a></li>
                  <li><a href="#visit">VISIT US</a></li>
                  <li><a href="#shop">SHOP WINES</a></li>
                  <li><a href="#events">WINERY EVENTS</a></li>
                  <li><a href="/private-events">PRIVATE EVENTS</a></li>
                  <li><a href="/store-finder">STORE FINDER</a></li>
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
                <li><a href="/our-history" onClick={toggleMobileMenu}>OUR HISTORY</a></li>
                <li><a href="#visit" onClick={toggleMobileMenu}>VISIT US</a></li>
                <li><a href="#shop" onClick={toggleMobileMenu}>SHOP WINES</a></li>
                <li><a href="#events" onClick={toggleMobileMenu}>WINERY EVENTS</a></li>
                <li><a href="/private-events" onClick={toggleMobileMenu}>PRIVATE EVENTS</a></li>
                <li><a href="/store-finder" onClick={toggleMobileMenu}>STORE FINDER</a></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="hero-content">
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
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;