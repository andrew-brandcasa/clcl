import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="welcome-section">
      <div className="welcome-content">
        <div className="container">
          <h2 className="welcome-title">WELCOME TO CASA LARGA</h2>
          <p className="welcome-description">
            Located in Fairport, NY. Celebrating 51 years of winemaking from graft to glass. Click below to 
            explore our wines, uncover our history, and tour our venue.
          </p>
          
          <div className="welcome-navigation" style={{ marginTop: '60px' }}>
            <div className="nav-item">
              <span className="nav-number">01.</span>
              <h3 className="nav-title">OUR WINES</h3>
              <p className="nav-subtitle">Old family recipes</p>
            </div>
            <div className="nav-item">
              <span className="nav-number">02.</span>
              <h3 className="nav-title">OUR HISTORY</h3>
              <p className="nav-subtitle">Discover our heritage</p>
            </div>
            <div className="nav-item">
              <span className="nav-number">03.</span>
              <h3 className="nav-title">OUR VENUE</h3>
              <p className="nav-subtitle">Meet a tradition that lasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;