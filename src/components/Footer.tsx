import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            {/* Brand Logo */}
            <div className="footer-brand">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/08/casalargalogo-1.svg" 
                alt="Casa Larga Vineyards and Winery" 
                className="footer-logo"
              />
            </div>

            {/* Footer Info */}
            <div className="footer-info">
              {/* Quick Links */}
              <div className="footer-column">
                <h5>Quick Links</h5>
                <div className="links-grid">
                  <div className="link-column">
                    <ul>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/shop">Shop</a></li>
                      <li><a href="/directions">Directions</a></li>
                    </ul>
                  </div>
                  <div className="link-column">
                    <ul>
                      <li><a href="/careers">Careers</a></li>
                      <li><a href="/trade">Trade</a></li>
                      <li><a href="/terms">Terms & Policies</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="footer-column">
                <h5>Hours</h5>
                <p className="hours-subtitle">Wine Shop + Tasting Room Hours</p>
                
                <div className="hours-info">
                  <div className="hours-item">
                    <h6>Monday-Thursday:</h6>
                    <p>11:00 a.m. - 6:00 p.m.</p>
                  </div>
                  <div className="hours-item">
                    <h6>Friday & Saturday:</h6>
                    <p>11:00 a.m. - 6:00 p.m.</p>
                  </div>
                  <div className="hours-item">
                    <h6>Sunday</h6>
                    <p>12:00 p.m. - 5:00 p.m.</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="footer-column">
                <h5>Contact Us</h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={16} />
                    <div>
                      <p>585-223-4210</p>
                      <p>Ext. 1 (Wine Shop)</p>
                      <p>Ext. 2 (Bella Vista)</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} />
                    <a href="mailto:info@casalarga.com">info@casalarga.com</a>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <div>
                      <p>2287 Turk Hill Road,</p>
                      <p>Fairport, NY 14450</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>© 2025. All rights reserved.</p>
                <p>Designed with ♥ by Brand Casa</p>
              </div>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;