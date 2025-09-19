import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img 
              src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg" 
              alt="Casa Larga Logo" 
              className="footer-logo mb-6"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Celebrating over 50 years of Italian winemaking tradition in the heart of the Finger Lakes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  2287 Turk Hill Road<br />
                  Fairport, NY 14450
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(585) 223-4210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@casalarga.com</span>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="footer-heading">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-amber-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Mon-Thu: 11am-6pm</div>
                  <div>Fri-Sat: 11am-8pm</div>
                  <div>Sun: 12pm-6pm</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#visit" className="footer-link">Visit Us</a></li>
              <li><a href="#wines" className="footer-link">Our Wines</a></li>
              <li><a href="#events" className="footer-link">Events</a></li>
              <li><a href="#venue" className="footer-link">Private Events</a></li>
              <li><a href="#" className="footer-link">Wine Club</a></li>
              <li><a href="#" className="footer-link">Gift Cards</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Casa Larga Vineyards. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="footer-link text-sm">Privacy Policy</a>
              <a href="#" className="footer-link text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;