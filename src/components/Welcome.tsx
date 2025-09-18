import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="py-20 md:py-24 lg:py-32 fade-in-up">
      <div>
        <div className="container max-w-content mx-auto px-6 md:px-8 lg:px-12">
          <div className="stamp-icon mb-8 md:mb-12">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" />
          </div>
          
          <h2 className="welcome-title">WELCOME TO CASA LARGA</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Located in Fairport, NY. Celebrating 51 years of winemaking from graft to glass. 
              Click below to explore our wines, uncover our history, and tour our venue.
            </p>
          </div>
          
          <div className="welcome-navigation">
            <div className="nav-item" id="space-icon-box">
              <a href="#wine" className="nav-link">
                <div className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="91" height="67" viewBox="0 0 91 67" fill="none">
                    <path d="M52.19 33.59C52.19 55.46 39.23 66.44 26.27 66.44C13.31 66.44 0.35 55.46 0.35 33.59C0.35 11.63 13.31 0.739996 26.27 0.739996C39.23 0.739996 52.19 11.63 52.19 33.59ZM8.72 33.59C8.72 55.01 17.54 65.81 26.27 65.81C35.09 65.81 43.82 55.01 43.82 33.59C43.82 12.08 35 1.37 26.27 1.37C17.45 1.37 8.72 12.08 8.72 33.59ZM70.408 56.36C70.408 63.74 73.108 64.46 77.158 65H56.368C60.418 64.46 63.118 63.74 63.118 56.36V17.75C63.118 11.72 62.668 10.82 58.078 10.82L70.408 0.559998V56.36ZM90.6594 61.76C90.6594 64.01 88.8594 65.81 86.6094 65.81C84.3594 65.81 82.5594 64.01 82.5594 61.76C82.5594 59.51 84.3594 57.62 86.6094 57.62C88.8594 57.62 90.6594 59.51 90.6594 61.76Z" fill="#AF6900"/>
                  </svg>
                </div>
                <div className="nav-content">
                  <h3>OUR WINES</h3>
                  <p>Old family recipes</p>
                </div>
              </a>
            </div>
            
            <div className="nav-item">
              <a href="#history" className="nav-link">
                <div className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="108" height="67" viewBox="0 0 108 67" fill="none">
                    <path d="M52.2154 33.59C52.2154 11.63 39.2554 0.739996 26.2954 0.739996C13.3354 0.739996 0.375391 11.63 0.375391 33.59C0.375391 55.46 13.3354 66.44 26.2954 66.44C39.2554 66.44 52.2154 55.46 52.2154 33.59ZM8.74539 33.59C8.74539 12.08 17.4754 1.37 26.2954 1.37C35.0254 1.37 43.8454 12.08 43.8454 33.59C43.8454 55.01 35.1154 65.81 26.2954 65.81C17.5654 65.81 8.74539 55.01 8.74539 33.59ZM93.8755 49.34C92.4355 53.93 90.8155 58.34 83.5255 58.34H56.7955C60.8455 48.35 92.1655 40.79 92.1655 17.03C92.1655 5.87 83.2555 1.1 73.9855 1.1C66.9655 1.1 59.7655 3.8 56.1655 8.66L58.9555 21.62C56.7055 9.65 65.8855 2.08999 73.8055 2.08999C79.2955 2.08999 84.2455 5.78 84.2455 14.15C84.2455 37.91 52.0255 49.61 54.9055 65L91.7155 64.91L93.8755 49.34ZM107.472 61.76C107.472 59.51 105.672 57.62 103.422 57.62C101.172 57.62 99.3719 59.51 99.3719 61.76C99.3719 64.01 101.172 65.81 103.422 65.81C105.672 65.81 107.472 64.01 107.472 61.76Z" fill="#AF6900"/>
                  </svg>
                </div>
                <div className="nav-content">
                  <h3>OUR HISTORY</h3>
                  <p>Discover our heritage</p>
                </div>
              </a>
            </div>
            
            <div className="nav-item" id="top-space">
              <a href="#venu" className="nav-link">
                <div className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="110" height="68" viewBox="0 0 110 68" fill="none">
                    <path d="M52.2154 34.59C52.2154 12.63 39.2554 1.74 26.2954 1.74C13.3354 1.74 0.375391 12.63 0.375391 34.59C0.375391 56.46 13.3354 67.44 26.2954 67.44C39.2554 67.44 52.2154 56.46 52.2154 34.59ZM8.74539 34.59C8.74539 13.08 17.4754 2.37 26.2954 2.37C35.0254 2.37 43.8454 13.08 43.8454 34.59C43.8454 56.01 35.1154 66.81 26.2954 66.81C17.5654 66.81 8.74539 56.01 8.74539 34.59ZM97.1634 47.82C97.1634 37.29 89.5134 31.8 76.2834 31.62C88.3434 29.91 94.1034 23.97 94.2834 15.24C94.4634 4.98 85.4634 0.659999 76.7334 0.659999C70.4334 0.659999 64.3134 2.91 61.7034 6.78L63.9534 17.67H64.0434C63.9534 6.24 70.0734 1.47 76.0134 1.47C81.5934 1.47 87.0834 5.79 87.0834 12.54C87.0834 23.34 82.7634 29.73 72.3234 31.35V32.16C84.3834 32.79 89.2434 39.09 89.2434 47.55C89.2434 59.34 81.3234 65.28 73.3134 65.28C66.2934 65.28 59.1834 60.78 57.2034 51.69L56.4834 51.96C58.1934 62.49 66.6534 67.17 75.3834 67.17C86.0034 67.17 97.1634 60.15 97.1634 47.82ZM109.318 62.76C109.318 60.51 107.518 58.62 105.268 58.62C103.018 58.62 101.218 60.51 101.218 62.76C101.218 65.01 103.018 66.81 105.268 66.81C107.518 66.81 109.318 65.01 109.318 62.76Z" fill="#AF6900"/>
                  </svg>
                </div>
                <div className="nav-content">
                  <h3>OUR VENUE</h3>
                  <p>Meet a tradition that lasts</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;