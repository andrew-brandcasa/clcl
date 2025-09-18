import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import './OurWines.css';

interface Wine {
  id: number;
  name: string;
  type: string;
  price: string;
  bottleImage: string;
  inStock: boolean;
}

const wines: Wine[] = [
  {
    id: 1,
    name: "PALLIDO", 
    type: "White Wine",
    price: "99.00$",
    bottleImage: "/1.png",
    inStock: true
  },
  {
    id: 2,
    name: "LILAC HILL",
    type: "White Wine", 
    price: "99.00$",
    bottleImage: "/2.png",
    inStock: true
  },
  {
    id: 3,
    name: "WHITE NOIR",
    type: "White Wine",
    price: "99.00$",
    bottleImage: "/3.png",
    inStock: true
  },
  {
    id: 4,
    name: "RIESLING",
    type: "White Wine",
    price: "99.00$",
    bottleImage: "/4.png",
    inStock: true
  }
];

const OurWines: React.FC = () => {
  return (
    <section id="wine" className="relative container max-w-content mx-auto py-16 md:py-24 lg:py-28 fade-in-up">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/Frame 1618873355.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "1800px auto",
          opacity: 0.08,
          height: "70%",
          top: "20%",
          pointerEvents: "none"
        }}
      />
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/Frame 1618873355.png')",
          backgroundPosition: "bottom center",
          backgroundSize: "1800px auto",
          opacity: 0.08,
          height: "100%",
          pointerEvents: "none"
        }}
      />
          <div className="wine-carousel-track">
            {/* First set of wines */}
            {wines.map((wine) => (
              <div key={wine.id} className="wine-card-wrapper">
                <div className="wine-card">
                  <div className="wine-image">
                    <img src={wine.bottleImage} alt={wine.name} />
                  </div>
                  
                  <div className="wine-info">
                    <div className="wine-details">
                      <h3 className="wine-name">{wine.name}</h3>
                      <p className="wine-type">{wine.type}</p>
                    </div>
                    
                    <div className="wine-purchase">
                      <div className="wine-price-info">
                        <p className="stock-status">
                          {wine.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                        </p>
                        <p className="wine-price">{wine.price}</p>
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
            {/* Duplicate set for infinite scroll */}
            {wines.map((wine) => (
              <div key={`${wine.id}-duplicate`} className="wine-card-wrapper">
                <div className="wine-card">
                  <div className="wine-image">
                    <img src={wine.bottleImage} alt={wine.name} />
                  </div>
                  
                  <div className="wine-info">
                    <div className="wine-details">
                      <h3 className="wine-name">{wine.name}</h3>
                      <p className="wine-type">{wine.type}</p>
                    </div>
                    
                    <div className="wine-purchase">
                      <div className="wine-price-info">
                        <p className="stock-status">
                          {wine.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                        </p>
                        <p className="wine-price">{wine.price}</p>
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
        
        <div className="section-footer">
          <a href="#" className="custom-catalog-button">
            SHOP OUR CATALOG
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWines;