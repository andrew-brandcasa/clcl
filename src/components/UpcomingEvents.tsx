import React from 'react';
import './UpcomingEvents.css';
import SectionCurve from './SectionCurve';

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "LAST PATIO PARTY OF THE SUMMER",
    date: "Thursday, August 28, 2025",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/4baba914a1de8731acdbc0ad8c1d02c8f54037ec.webp"
  },
  {
    id: 2,
    title: "ZAC BROWN TRIBUTE UNCAGED",
    date: "Friday, September 1, 2025",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/64f3e826d389d57eb75ad44a2114ff3c24d99e3b.webp"
  },
  {
    id: 3,
    title: "WINE TASTING",
    date: "Thursday, September 22, 2025",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/a3a395d6313a0da9beca8495e462c809a30e81cd.webp"
  }
];

const UpcomingEvents: React.FC = () => {
  return (
    <section className="upcoming-events-section relative py-20 md:py-28 lg:py-36">
      {/* full-bleed illustration behind the section */}
      <div className="transition-graphic">
        <img
          src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Group-1597885392.png"
          alt=""
          className="transition-image"
        />
      </div>

      {/* content container */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="section-header">
          <span className="section-subtitle">JOIN US!</span>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-description">
            The fun doesn't stop at the vineyard. From concerts that fill the air with music to 
            patio parties on our grounds, there's always something happening worth toasting to. 
            Take a look at what's coming up and join us for the next celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="p-8 md:p-10 lg:p-12 text-center space-y-6 md:space-y-8">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <a href="#" className="event-button elementor-button">
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="elementor-button">
            VIEW EVENT CALENDAR
          </a>
        </div>
      </div>

      {/* bottom curve that "cuts" into the next section */}
      <SectionCurve height={180} fill="#FFFFFF" />
    </section>
  );
};

export default UpcomingEvents;