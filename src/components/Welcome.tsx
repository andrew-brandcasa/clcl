import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="section-wrapper">
      <div className="content-wrapper">
        <div className="welcome-content">
          <div className="stamp-icon">
            <img src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Stamp.png" alt="Casa Larga Stamp" />
          </div>
          
          <h2 className="welcome-title">WELCOME TO CASA LARGA</h2>
          
          <p className="welcome-description">
            Located in Fairport, NY. Celebrating 51 years of winemaking from graft to glass. 
            Click below to explore our wines, uncover our history, and tour our venue.
          </p>
          
          <div className="numbers-row">
            <div className="number-item">
              <div className="number">01.</div>
              <h3 className="number-title">OUR WINES</h3>
              <p className="number-description">Old family recipes</p>
            </div>
            
            <div className="number-item">
              <div className="number">02.</div>
              <h3 className="number-title">OUR HISTORY</h3>
              <p className="number-description">Discover our heritage</p>
            </div>
            
            <div className="number-item">
              <div className="number">03.</div>
              <h3 className="number-title">OUR VENUE</h3>
              <p className="number-description">Meet a tradition that lasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;