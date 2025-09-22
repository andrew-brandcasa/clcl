import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import './PrivateEventsHero.css';

const PrivateEventsHero: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('private-events-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="private-events-hero">
      {/* Background Image */}
      <img
        className="private-events-hero-bg"
        src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Private events at Casa Larga"
      />

      {/* Desktop Header */}
      <header className="private-events-header">
        <div className="container">
          <div className="private-events-header-content">
            <div className="private-events-header-left" />
            <div className="private-events-header-center">
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="private-events-logo"
                />
              </a>
              
              <nav className="private-events-navigation">
                <ul className="private-events-nav-menu">
                  <li><a href="/about">ABOUT</a></li>
                  <li><a href="#visit">VISIT US</a></li>
                  <li><a href="#shop">SHOP WINES</a></li>
                  <li><a href="#events">WINERY EVENTS</a></li>
                  <li><a href="/private-events" className="active">PRIVATE EVENTS</a></li>
                </ul>
              </nav>
            </div>
            <div className="private-events-header-right">
              <a href="/cart" className="private-events-cart-link">
                <ShoppingCart size={24} />
                <span className="private-events-cart-count">0</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="private-events-mobile-header">
        <div className="container">
          <div className="private-events-mobile-header-content">
            <div className="private-events-mobile-logo">
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="private-events-logo"
                />
              </a>
            </div>
            <div className="private-events-mobile-controls">
              <a href="/cart" className="private-events-cart-link">
                <ShoppingCart size={24} />
                <span className="private-events-cart-count">0</span>
              </a>
              <button
                className="private-events-mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="private-events-mobile-navigation">
              <ul className="private-events-mobile-nav-menu">
                <li><a href="/about" onClick={toggleMobileMenu}>ABOUT</a></li>
                <li><a href="#visit" onClick={toggleMobileMenu}>VISIT US</a></li>
                <li><a href="#shop" onClick={toggleMobileMenu}>SHOP WINES</a></li>
                <li><a href="#events" onClick={toggleMobileMenu}>WINERY EVENTS</a></li>
                <li><a href="/private-events" className="active" onClick={toggleMobileMenu}>PRIVATE EVENTS</a></li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="private-events-hero-content">
        <div className="container">
          <div className="private-events-hero-text">
            <span className="private-events-hero-eyebrow">WHERE MEMORIES ARE MADE</span>
            <h1 className="private-events-hero-title">
              HOST YOUR PRIVATE<br />
              EVENT AT CASA LARGA
            </h1>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="private-events-scroll-indicator">
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

export default PrivateEventsHero;