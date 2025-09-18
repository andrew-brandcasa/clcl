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
    <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="wow-image fade-in">
            <div className="bg-cream rounded-3xl p-8 md:p-12 flex justify-center items-center">
              <img 
                src="https://casalarga.casasite.com/wp-content/uploads/2025/09/45d39b32b996c7d3fef96ed85e2728260a0fe416.png" 
                alt="Wine on Wheels Trailer" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="text-sm md:text-base font-medium text-amber-700 uppercase tracking-wider">We COME TO YOU!</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-amber-900 leading-tight">Wine on Wheels</h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              With just a few simple steps, we handle everything from booking and menu planning to 
              setup, service, and cleanup. You choose the location and the vibe, we'll roll in with 
              our mobile bar, serve your guests with award-winning wines and slushies, and roll out 
              when the party winds down.
            </p>
            
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div key={item.id} className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${item.isOpen ? 'shadow-lg border-amber-200' : 'shadow-sm hover:shadow-md'}`}>
                  <button 
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={item.isOpen}
                  >
                    <span className="text-lg font-semibold text-amber-900">{item.title}</span>
                    <ChevronDown 
                      className={`text-amber-700 transition-transform duration-300 ${item.isOpen ? 'rotate-180' : ''}`} 
                      size={24}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${item.isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                    <div className="px-6">
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a href="#" className="elementor-button">
                BOOK WINE ON WHEELS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineOnWheels;