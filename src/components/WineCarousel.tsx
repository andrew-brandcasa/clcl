import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import './WineCarousel.css';

interface Wine {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  inStock: boolean;
}

const wines: Wine[] = [
  {
    id: 1,
    name: "PALLIDO",
    type: "White Wine",
    price: "99.00$",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle.png",
    inStock: true
  },
  {
    id: 2,
    name: "PALLIDO",
    type: "White Wine",
    price: "99.00$",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-2.png",
    inStock: true
  },
  {
    id: 3,
    name: "PALLIDO",
    type: "White Wine",
    price: "99.00$",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-3.png",
    inStock: true
  },
  {
    id: 4,
    name: "PALLIDO",
    type: "White Wine",
    price: "99.00$",
    image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-4.png",
    inStock: true
  }
];

const WineCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 550) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 850) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % wines.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleWines = () => {
    const visibleWines = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % wines.length;
      visibleWines.push(wines[index]);
    }
    return visibleWines;
  };

  return (
    <div className="wine-carousel">
      <div className="wine-carousel-track">
        {getVisibleWines().map((wine, index) => (
          <div key={`${wine.id}-${index}`} className="wine-card">
            <div className="wine-card-inner">
              <div className="wine-image">
                <img src={wine.image} alt={wine.name} />
              </div>
              <div className="wine-info">
                <div className="wine-details">
                  <h6 className="wine-name">{wine.name}</h6>
                  <span className="wine-type">{wine.type}</span>
                </div>
                <div className="wine-purchase">
                  <div className="wine-price-info">
                    <span className="stock-status">
                      {wine.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                    </span>
                    <h5 className="wine-price">{wine.price}</h5>
                  </div>
                  <div className="wine-actions">
                    <button className="wishlist-btn" aria-label="Add to wishlist">
                      <Heart size={16} />
                    </button>
                    <button className="cart-btn" aria-label="Add to cart">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineCarousel;