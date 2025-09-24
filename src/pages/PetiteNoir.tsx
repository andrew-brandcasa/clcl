import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown, Star, Heart, Plus, Minus, Award, Package } from 'lucide-react';
import './PetiteNoir.css';

const PetiteNoir: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('tasting');
  const [quantity, setQuantity] = useState(1);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const productImages = [
    "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle.png",
    "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/39351/grapes-purple-fruit-vineyard-39351.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const relatedProducts = [
    { name: "Pallido", price: "$18.99", image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle.png" },
    { name: "Lilac Hill", price: "$22.99", image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-2.png" },
    { name: "White Noir", price: "$19.99", image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-3.png" },
    { name: "Riesling", price: "$16.99", image: "https://casalarga.casasite.com/wp-content/uploads/2025/08/pallido-bottle-4.png" }
  ];

  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Absolutely delicious! Perfect balance of fruit and elegance. Will definitely order again." },
    { name: "Michael R.", rating: 5, text: "This Petite Noir exceeded my expectations. Great with dinner or on its own." },
    { name: "Jennifer L.", rating: 4, text: "Smooth and approachable. Love supporting local New York wineries!" }
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="petite-noir-page">
      {/* Header */}
      <header className="hidden lg:block absolute top-0 left-0 w-full z-10 bg-transparent pt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-center relative pb-6 mb-6">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
            
            <div className="bg-transparent px-4 z-10 flex flex-col items-center gap-3">
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="h-20 w-auto filter brightness-0 invert"
                />
              </a>
              
              <nav>
                <ul className="flex items-center justify-center gap-20">
                  <li><a href="/about" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">ABOUT</a></li>
                  <li><a href="#visit" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">VISIT US</a></li>
                  <li><a href="#shop" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">SHOP WINES</a></li>
                  <li><a href="#events" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">WINERY EVENTS</a></li>
                  <li><a href="/private-events" className="text-white font-sans font-normal text-xs uppercase tracking-[2px] transition-opacity hover:opacity-70">PRIVATE EVENTS</a></li>
                </ul>
              </nav>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30">
              <a href="/cart" className="relative flex items-center text-white p-2">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden absolute top-0 left-0 w-full z-10 bg-transparent p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <img
                  src="https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg"
                  alt="Casa Larga Logo"
                  className="h-15 w-auto filter brightness-0 invert"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/cart" className="relative flex items-center text-white p-2">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
              </a>
              <button
                className="text-white p-1"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="mt-4 bg-black/90 rounded-lg border-t border-white/20">
              <ul className="py-2">
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="/about" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">ABOUT</a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="#visit" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">VISIT US</a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="#shop" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">SHOP WINES</a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="#events" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">WINERY EVENTS</a>
                </li>
                <li className="border-b border-white/10 last:border-b-0">
                  <a href="/private-events" onClick={toggleMobileMenu} className="block px-5 py-4 text-white font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-white/10">PRIVATE EVENTS</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-[-2]"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-[-1]"></div>
        
        <div className="text-center text-white z-10 px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-shadow-sm">
            Casa Larga Petite Noir
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light opacity-90">
            A Taste of Finger Lakes Elegance
          </h2>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <img 
                  src={productImages[selectedImage]} 
                  alt="Casa Larga Petite Noir" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`Product view ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Casa Larga Petite Noir</h2>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-amber-900">$14.41</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span className="text-sm text-amber-700">Award Winner</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience the delicate charm of our Petite Noir, a vibrant and expressive Pinot Noir from the heart of the Finger Lakes. This wine is a testament to our family's dedication to crafting exceptional wines that capture the unique character of our region. With its bright fruit flavors and smooth finish, the Petite Noir is a versatile and approachable red that is perfect for any occasion.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 py-4 border-y border-gray-200">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">In Stock</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <label className="text-lg font-medium text-gray-900">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={decrementQuantity}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 font-medium">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 elementor-button flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              {[
                { id: 'tasting', label: 'Tasting Notes' },
                { id: 'pairing', label: 'Food Pairings' },
                { id: 'specs', label: 'Technical Specs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'tasting' && (
                <div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-4">Tasting Notes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Petite Noir delights the senses with aromas of ripe cherry, raspberry, and a hint of spice. On the palate, you'll discover a burst of red fruit flavors, balanced by soft tannins and a smooth, lingering finish. This is a light-bodied red wine with a refreshing acidity that makes it incredibly food-friendly.
                  </p>
                </div>
              )}

              {activeTab === 'pairing' && (
                <div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-4">Food Pairings</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The versatility of our Petite Noir makes it an excellent companion for a wide range of dishes. Pair it with roasted chicken, grilled salmon, or a mushroom risotto. It's also a wonderful match for a cheese board featuring creamy, soft cheeses.
                  </p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-2xl font-serif text-amber-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">Varietal:</span>
                        <span className="text-gray-700">Pinot Noir</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">Region:</span>
                        <span className="text-gray-700">Finger Lakes, New York</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">Alcohol:</span>
                        <span className="text-gray-700">11%</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">Vintage:</span>
                        <span className="text-gray-700">2023</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">Winemaker:</span>
                        <span className="text-gray-700">John Colaruotolo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 md:py-28 lg:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://casalarga.casasite.com/wp-content/uploads/2025/09/2191daffdc0354ac2d35d9aa3868861c0a16ca84.webp')"
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="text-sm md:text-base font-medium text-white uppercase tracking-wider mb-4 block opacity-90">
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-serif text-white mb-8">
            A Legacy in Every Bottle
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white mb-8 font-light">
            The Petite Noir holds a special place in our family's story. It represents our commitment to innovation while honoring the traditions passed down from our founder, Andrew Colaruotolo. Every bottle is a celebration of our heritage and our passion for creating wines that bring people together.
          </p>
          <a href="/our-history" className="elementor-button white">
            LEARN OUR STORY
          </a>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">
              What Our Customers Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-amber-900">— {review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="elementor-button">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 md:py-28 lg:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-amber-900 mb-6">
              You Might Also Like
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-serif text-amber-900 mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                <button className="w-full elementor-button text-sm py-3">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetiteNoir;