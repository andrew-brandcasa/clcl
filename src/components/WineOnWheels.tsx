import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './WineOnWheels.css';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
}

const WineOnWheels: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 1,
      title: "1. Book Your Date",
      content: "Reserve your spot with a signed catering agreement and deposit. Our team locks in your event and begins planning right away.",
      isOpen: true
    },
    {
      id: 2,
      title: "2. Plan YOUR MENU",
      content: "Work with our staff to customize your bar — from award-winning wines and refreshing Wine Slushies to partner brews and non-alcoholic options.",
      isOpen: false
    },
    {
      id: 3,
      title: "3. WE ROLL IN",
      content: "On event day, our trailer arrives, sets up, and transforms your venue into a mobile bar experience with professional staff ready to serve.",
      isOpen: false
    },
    {
      id: 4,
      title: "4. YOU CELEBRATE",
      content: "Enjoy three hours of seamless service while your guests toast, dance, and mingle. When the night winds down, we pack up and roll away — leaving only great memories behind.",
      isOpen: false
    }
  ]);

  const toggleAccordion = (id: number) => {
    setAccordionItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <section className="wine-on-wheels-section">
      <div className="wow-container">
        <div className="wow-content">
          <div className="wow-image fade-in">
            <img 
              src="https://casalarga.casasite.com/wp-content/uploads/2025/09/45d39b32b996c7d3fef96ed85e2728260a0fe416.png" 
              alt="Wine on Wheels Trailer" 
              className="trailer-image"
            />
          </div>
          
          <div className="wow-info fade-in-up">
            <span className="section-subtitle">We COME TO YOU!</span>
            <h2 className="section-title">Wine on Wheels</h2>
            <p className="section-description">
              With just a few simple steps, we handle everything from booking and menu planning to 
              setup, service, and cleanup. You choose the location and the vibe, we'll roll in with 
              our mobile bar, serve your guests with award-winning wines and slushies, and roll out 
              when the party winds down.
            </p>
            
            <div className="wow-process">
              {accordionItems.map((item) => (
                <div key={item.id} className={`accordion-item ${item.isOpen ? 'active' : ''}`}>
                  <button 
                    className="accordion-header"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={item.isOpen}
                  >
                    <span className="accordion-title">{item.title}</span>
                    <ChevronDown 
                      className={`accordion-icon ${item.isOpen ? 'rotated' : ''}`} 
                      size={20}
                    />
                  </button>
                  
                  <div className={`accordion-content ${item.isOpen ? 'open' : ''}`}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className="elementor-button">
              BOOK WINE ON WHEELS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineOnWheels;