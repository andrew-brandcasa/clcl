import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      {/* Desktop Header */}
      <div className="desktop-header">
        <div className="container">
          <div className="header-content">
            <div className="header-spacer"></div>
            <div className="logo-section">
              <a href="/">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg" 
                  alt="Casa Larga Logo" 
                  className="logo"
                />
              </a>
            </div>
            <div className="cart-section">
              <a href="/cart" className="cart-link">
                <ShoppingCart size={24} />
                <span className="cart-count">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-navigation desktop-nav">
        <div className="container">
          <ul className="nav-menu">
            <li><a href="/about">ABOUT</a></li>
            <li><a href="#visit">VISIT US</a></li>
            <li><a href="#shop">SHOP WINES</a></li>
            <li><a href="#events">WINERY EVENTS</a></li>
            <li className="has-dropdown">
              <a href="/private-events">PRIVATE EVENTS</a>
              <ul className="dropdown-menu">
                <li><a href="/corporate-events">CORPORATE EVENTS</a></li>
                <li><a href="/weddings">Weddings</a></li>
                <li><a href="/proms">PROMS & SPECIAL OCCASIONS</a></li>
                <li><a href="/wine-on-wheels">WINE ON WHEELS</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="mobile-header">
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
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-navigation">
            <ul className="mobile-nav-menu">
              <li><a href="/about" onClick={toggleMobileMenu}>ABOUT</a></li>
              <li><a href="#visit" onClick={toggleMobileMenu}>VISIT US</a></li>
              <li><a href="#shop" onClick={toggleMobileMenu}>SHOP WINES</a></li>
              <li><a href="#events" onClick={toggleMobileMenu}>WINERY EVENTS</a></li>
              <li><a href="/private-events" onClick={toggleMobileMenu}>PRIVATE EVENTS</a></li>
              <li><a href="/corporate-events" onClick={toggleMobileMenu}>CORPORATE EVENTS</a></li>
              <li><a href="/weddings" onClick={toggleMobileMenu}>Weddings</a></li>
              <li><a href="/proms" onClick={toggleMobileMenu}>PROMS & SPECIAL OCCASIONS</a></li>
              <li><a href="/wine-on-wheels" onClick={toggleMobileMenu}>WINE ON WHEELS</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;