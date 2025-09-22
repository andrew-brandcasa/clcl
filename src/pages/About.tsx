import React from 'react';
import { ChevronDown } from 'lucide-react';
import SectionCurve from '../components/SectionCurve';
import './About.css';

const About: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('continuing-legacy');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <img 
            src="https://casalarga.casasite.com/wp-content/uploads/2025/08/7662debe55392745c26323d52af7183e2300478a.webp" 
            alt="" 
            className="hero-image"
          />
        </div>
        
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <span className="hero-kicker">ITALIAN HERITAGE</span>
              <h1 className="hero-title">A FAMILY LEGACY OF WINEMAKING EXCELLENCE</h1>
              <p className="hero-lead">
                For more than five decades, Casa Larga has tended cool-climate vines on the hills of 
                Fairport, New York, honoring Italian craft and Finger Lakes character with every vintage.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <button onClick={scrollToNext} aria-label="Scroll to next section">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Continuing a Legacy */}
      <section id="continuing-legacy" className="section-wrapper">
        <div className="content-wrapper">
          <div className="centered-intro">
            <h2 className="section-title">CONTINUING A LEGACY</h2>
            <p className="section-description">
              Casa Larga began as a family dream and became a New York wine landmark. What started as a 
              backyard passion grew into an estate winery known for inviting hospitality, meticulous cellar 
              work, and wines that reflect place. Today the traditions that shaped our first bottles continue 
              to guide our vineyards, our tasting room, and the way we welcome guests.
            </p>
          </div>
        </div>
      </section>

      {/* Italian Beginnings */}
      <section className="section-wrapper vineyard-bg">
        <div className="content-wrapper">
          <div className="two-column-section">
            <div className="text-column">
              <h3 className="section-heading">ITALIAN BEGINNINGS</h3>
              <p className="section-paragraph">
                Our story traces back to the Colaruotolo family, where wine was part of daily life—set on 
                the table, shared with neighbors, and made with care. Recipes and techniques traveled from 
                Italy to upstate New York, along with a belief that great wine starts with patience and 
                respect for the land.
              </p>
              <p className="section-paragraph">
                Those early years were hands-on and humble: tending vines after work, repairing trellises 
                by hand, and celebrating the first successful fermentations with family. The lessons were 
                simple—work honestly, harvest only when the fruit is ready, and never stop learning.
              </p>
            </div>
            <div className="image-column">
              <div className="historic-photo">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
                  alt="Historic photo of the Colaruotolo family in their early winemaking days"
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italian American Roots */}
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="full-width-image-section">
            <div className="image-container">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/08/4baba914a1de8731acdbc0ad8c1d02c8f54037ec.webp" 
                alt="Family gathering around the dinner table with wine"
                className="full-width-image"
              />
            </div>
            <div className="image-caption">
              <p>
                The cellar became a gathering place. Sunday dinners stretched long, friends arrived with 
                stories, and the house filled with the aromas of simmering sauce and fresh bread. Wine 
                connected generations—linking a new life in New York to memories of sun-baked hillsides in Italy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Winery Begins */}
      <section className="section-wrapper vineyard-bg">
        <div className="content-wrapper">
          <div className="two-column-section">
            <div className="text-column">
              <h3 className="section-heading">THE WINERY BEGINS</h3>
              <p className="section-paragraph">
                What started as a personal cellar soon outgrew the basement. Encouraged by family and friends, 
                vines were planted on the Fairport hills and a bonded winery was born. The goal was 
                straightforward: make honest, expressive wines and invite people to experience where they come from.
              </p>
              <p className="section-paragraph">
                From the earliest tastings to our first public events, the response was immediate. Visitors 
                came for the wines and stayed for the view, the warmth, and the feeling that they were part 
                of something built with heart.
              </p>
              <p className="section-caption">
                <em>Mr. C. in the vineyard, tending the rows that started it all.</em>
              </p>
            </div>
            <div className="image-column">
              <div className="founder-photo">
                <img 
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/mr-casa.png" 
                  alt="Mr. Colaruotolo working in the vineyard among the original vine rows"
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curve divider */}
        <SectionCurve height={120} fill="#FFFFFF" />
      </section>

      {/* A New Era */}
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="full-width-image-section">
            <div className="image-container">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/08/a3a395d6313a0da9beca8495e462c809a30e81cd.webp" 
                alt="Modern Casa Larga winery with guests enjoying wine tasting"
                className="full-width-image"
              />
            </div>
            <div className="new-era-text">
              <h3 className="section-heading">A NEW ERA</h3>
              <p className="section-paragraph">
                As the estate grew, the next generation stepped in—modernizing the cellar, refining vineyard 
                practices, and expanding guest experiences while preserving the soul of the place.
              </p>
              <p className="section-paragraph">
                Today Casa Larga hosts tastings, tours, classes, and celebrations overlooking the vines. 
                Each season brings new visitors, new releases, and familiar faces returning to raise a glass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winemaking Philosophy */}
      <section className="section-wrapper vineyard-bg">
        <div className="content-wrapper">
          <div className="philosophy-cards">
            <div className="philosophy-card">
              <h4 className="card-title">WINEMAKING PHILOSOPHY</h4>
              <p className="card-text">
                We believe in gentle handling, clarity of fruit, and balance. Fermentations are kept cool 
                for freshness; oak is used thoughtfully for texture, not domination. Every lot is tasted 
                repeatedly—patience and precision from crush to bottle.
              </p>
            </div>
            <div className="philosophy-card">
              <h4 className="card-title">TODAY AND TOMORROW</h4>
              <p className="card-text">
                We continue to invest in sustainable practices, thoughtful canopy management, and careful 
                harvesting. Sparkling projects, small-lot selections, and cellar experiments keep us curious. 
                What never changes is our commitment to hospitality and wines that speak of this ridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="awards-section">
            <h3 className="section-heading centered">AWARDS & RECOGNITION</h3>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L29.09 14.26L40 16L32 23.74L34.18 34.65L24 29.27L13.82 34.65L16 23.74L8 16L18.91 14.26L24 4Z" fill="#AF6900"/>
                  </svg>
                </div>
                <h5 className="award-title">DECADES OF CRAFT</h5>
                <p className="award-subtitle">Family-run since the first estate vines took root.</p>
              </div>
              <div className="award-item">
                <div className="award-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 8L32 2L36 12L46 16L40 26L46 36L36 40L32 50L22 44L12 50L8 40L2 36L8 26L2 16L8 12L12 2Z" fill="#AF6900"/>
                  </svg>
                </div>
                <h5 className="award-title">ESTATE VINEYARDS</h5>
                <p className="award-subtitle">Cool-climate fruit from our hillside rows in Fairport.</p>
              </div>
              <div className="award-item">
                <div className="award-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="#AF6900"/>
                    <path d="M16 24L20 28L32 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h5 className="award-title">CELLAR DISCIPLINE</h5>
                <p className="award-subtitle">Clean ferments, careful blending, bottled at peak expression.</p>
              </div>
              <div className="award-item">
                <div className="award-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 12C19.58 12 16 15.58 16 20V28C16 32.42 19.58 36 24 36C28.42 36 32 32.42 32 28V20C32 15.58 28.42 12 24 12Z" fill="#AF6900"/>
                  </svg>
                </div>
                <h5 className="award-title">WELCOMING HOSPITALITY</h5>
                <p className="award-subtitle">Tastings, tours, and celebrations overlooking the vines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-wrapper cta-section">
        <div className="content-wrapper">
          <div className="footer-cta">
            <a href="#visit" className="elementor-button">
              PLAN YOUR VISIT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;