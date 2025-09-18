import React from 'react';
import './OurHistory.css';

const OurHistory: React.FC = () => {
  return (
    <section id="history" className="our-history-section">
      <div className="container">
        <div className="history-content">
          <div className="history-text fade-in-up">
            <span className="section-subtitle">OUR HISTORY</span>
            <h2 className="section-title">New York's 21st Winery</h2>
            <p className="section-description">
              In 1974, our founder planted the first vines at Casa Larga, symbolizing his dedication 
              to his Italian Heritage. By 1978, our initial vintages earned rewards and we became 
              New York's 21st licensed winery.
            </p>
            <a href="#" className="elementor-button">
              ABOUT CASA LARGA
            </a>
          </div>
          
          <div className="history-image fade-in-up">
            <div className="image-container">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
                alt="Casa Larga Founder" 
                className="founder-image"
              />
              <div className="stamp-overlay">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/stamp-brown.svg" 
                  alt="Casa Larga Stamp" 
                  className="brown-stamp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;