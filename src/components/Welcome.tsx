import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <section id="down" className="section-wrapper fade-in-up">
      <div className="content-wrapper">
        <div className="welcome-content">
          <span className="section-subtitle">WELCOME</span>
          <h2 className="section-title">WELCOME TO CASA LARGA</h2>
          <p className="section-description">
            Located in Fairport, NY. Celebrating 51 years of winemaking from graft to glass. 
            Click below to explore our wines, uncover our history, and tour our venue.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">01</div>
              <h3 className="stat-title">OUR WINES</h3>
              <p className="stat-description">Old family recipes</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">02</div>
              <h3 className="stat-title">OUR HISTORY</h3>
              <p className="stat-description">Discover our heritage</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">03</div>
              <h3 className="stat-title">OUR VENUE</h3>
              <p className="stat-description">Meet a tradition that lasts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;