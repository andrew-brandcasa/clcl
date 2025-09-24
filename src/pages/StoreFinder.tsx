import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Phone, Clock, ExternalLink, Settings } from 'lucide-react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: string;
  website?: string;
  lat: number;
  lng: number;
  distance?: number;
}

interface StoreFinderSettings {
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  defaultRadius: number;
  googleMapsApiKey: string;
}

// Mock store data - in a real app, this would come from an API
const mockStores: Store[] = [
  {
    id: '1',
    name: 'Wine & Spirits Emporium',
    address: '123 Main Street',
    city: 'Rochester',
    state: 'NY',
    zipCode: '14604',
    phone: '(585) 555-0123',
    hours: 'Mon-Sat: 9AM-9PM, Sun: 12PM-6PM',
    website: 'https://example.com',
    lat: 43.1566,
    lng: -77.6088
  },
  {
    id: '2',
    name: 'Premium Liquor Store',
    address: '456 Oak Avenue',
    city: 'Fairport',
    state: 'NY',
    zipCode: '14450',
    phone: '(585) 555-0456',
    hours: 'Mon-Fri: 10AM-8PM, Sat-Sun: 10AM-6PM',
    lat: 43.0998,
    lng: -77.4419
  },
  {
    id: '3',
    name: 'Village Wine Shop',
    address: '789 Elm Street',
    city: 'Pittsford',
    state: 'NY',
    zipCode: '14534',
    phone: '(585) 555-0789',
    hours: 'Daily: 11AM-7PM',
    website: 'https://example.com',
    lat: 43.0909,
    lng: -77.5144
  }
];

// Default settings
const defaultSettings: StoreFinderSettings = {
  logoUrl: 'https://casalarga.casasite.com/wp-content/uploads/2025/08/Logo.svg',
  primaryColor: '#AF6900',
  secondaryColor: '#482817',
  defaultRadius: 25,
  googleMapsApiKey: '' // Would need to be configured
};

const StoreFinder: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [settings, setSettings] = useState<StoreFinderSettings>(defaultSettings);
  const [zipCode, setZipCode] = useState('');
  const [searchRadius, setSearchRadius] = useState(settings.defaultRadius);
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const [mapCenter, setMapCenter] = useState({ lat: 43.1566, lng: -77.6088 }); // Rochester, NY
  
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Initialize Google Map
  useEffect(() => {
    if (mapRef.current && window.google) {
      googleMapRef.current = new google.maps.Map(mapRef.current, {
        center: mapCenter,
        zoom: 10,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });
    }
  }, [mapCenter]);

  // Update map markers when stores change
  useEffect(() => {
    if (googleMapRef.current) {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add new markers
      stores.forEach(store => {
        const marker = new google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map: googleMapRef.current,
          title: store.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" fill="${settings.primaryColor}" stroke="white" stroke-width="2"/>
                <circle cx="16" cy="16" r="4" fill="white"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32)
          }
        });

        marker.addListener('click', () => {
          setSelectedStore(store);
        });

        markersRef.current.push(marker);
      });

      // Fit bounds to show all markers
      if (stores.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        stores.forEach(store => {
          bounds.extend({ lat: store.lat, lng: store.lng });
        });
        googleMapRef.current.fitBounds(bounds);
      }
    }
  }, [stores, settings.primaryColor]);

  // Format ZIP code input
  const formatZipCode = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 5) {
      return cleaned;
    }
    return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 9)}`;
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatZipCode(e.target.value);
    setZipCode(formatted);
  };

  // Mock geocoding function - in real app would use Google Geocoding API
  const geocodeZipCode = async (zip: string): Promise<{ lat: number; lng: number } | null> => {
    // Mock implementation - would use actual geocoding service
    const zipToCoords: { [key: string]: { lat: number; lng: number } } = {
      '14604': { lat: 43.1566, lng: -77.6088 }, // Rochester
      '14450': { lat: 43.0998, lng: -77.4419 }, // Fairport
      '14534': { lat: 43.0909, lng: -77.5144 }, // Pittsford
    };
    
    const cleanZip = zip.replace('-', '').slice(0, 5);
    return zipToCoords[cleanZip] || null;
  };

  // Calculate distance between two points (Haversine formula)
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!zipCode.trim()) return;

    setIsLoading(true);
    
    try {
      // Geocode the ZIP code
      const coords = await geocodeZipCode(zipCode);
      if (!coords) {
        alert('Invalid ZIP code. Please try again.');
        setIsLoading(false);
        return;
      }

      // Update map center
      setMapCenter(coords);
      if (googleMapRef.current) {
        googleMapRef.current.setCenter(coords);
      }

      // Filter stores within radius and calculate distances
      const storesWithDistance = mockStores.map(store => ({
        ...store,
        distance: calculateDistance(coords.lat, coords.lng, store.lat, store.lng)
      })).filter(store => store.distance! <= searchRadius)
        .sort((a, b) => a.distance! - b.distance!);

      setStores(storesWithDistance);
      setResultCount(storesWithDistance.length);
      
    } catch (error) {
      console.error('Search error:', error);
      alert('Search failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="store-finder-page min-h-screen bg-gray-100">
      {/* Header */}
      <header className="hidden lg:block absolute top-0 left-0 w-full z-20 bg-transparent pt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-center relative pb-6 mb-6">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300"></div>
            
            <div className="bg-white px-4 z-10 flex flex-col items-center gap-3">
              <a href="/">
                <img
                  src={settings.logoUrl}
                  alt="Casa Larga Logo"
                  className="h-20 w-auto"
                />
              </a>
              
              <nav>
                <ul className="flex items-center justify-center gap-20">
                  <li><a href="/about" className="text-amber-900 font-sans font-normal text-xs uppercase tracking-[2px] transition-colors hover:text-amber-700">ABOUT</a></li>
                  <li><a href="#visit" className="text-amber-900 font-sans font-normal text-xs uppercase tracking-[2px] transition-colors hover:text-amber-700">VISIT US</a></li>
                  <li><a href="#shop" className="text-amber-900 font-sans font-normal text-xs uppercase tracking-[2px] transition-colors hover:text-amber-700">SHOP WINES</a></li>
                  <li><a href="#events" className="text-amber-900 font-sans font-normal text-xs uppercase tracking-[2px] transition-colors hover:text-amber-700">WINERY EVENTS</a></li>
                  <li><a href="/private-events" className="text-amber-900 font-sans font-normal text-xs uppercase tracking-[2px] transition-colors hover:text-amber-700">PRIVATE EVENTS</a></li>
                </ul>
              </nav>
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 flex items-center gap-4">
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="p-2 text-amber-900 hover:text-amber-700 transition-colors"
                aria-label="Admin Settings"
              >
                <Settings size={20} />
              </button>
              <a href="/cart" className="relative flex items-center text-amber-900 p-2">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden absolute top-0 left-0 w-full z-20 bg-white p-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <a href="/">
                <img
                  src={settings.logoUrl}
                  alt="Casa Larga Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="p-2 text-amber-900 hover:text-amber-700 transition-colors"
                aria-label="Admin Settings"
              >
                <Settings size={20} />
              </button>
              <a href="/cart" className="relative flex items-center text-amber-900 p-2">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-amber-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
              </a>
              <button
                className="text-amber-900 p-1"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <nav className="mt-4 bg-white rounded-lg border border-gray-200 shadow-lg">
              <ul className="py-2">
                <li className="border-b border-gray-100 last:border-b-0">
                  <a href="/about" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-900 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-amber-50">ABOUT</a>
                </li>
                <li className="border-b border-gray-100 last:border-b-0">
                  <a href="#visit" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-900 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-amber-50">VISIT US</a>
                </li>
                <li className="border-b border-gray-100 last:border-b-0">
                  <a href="#shop" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-900 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-amber-50">SHOP WINES</a>
                </li>
                <li className="border-b border-gray-100 last:border-b-0">
                  <a href="#events" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-900 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-amber-50">WINERY EVENTS</a>
                </li>
                <li className="border-b border-gray-100 last:border-b-0">
                  <a href="/private-events" onClick={toggleMobileMenu} className="block px-5 py-4 text-amber-900 font-sans font-medium text-sm uppercase tracking-wider transition-colors hover:bg-amber-50">PRIVATE EVENTS</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-amber-900">Store Finder Settings</h2>
                <button
                  onClick={() => setShowAdminPanel(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    id="logoUrl"
                    value={settings.logoUrl}
                    onChange={(e) => setSettings(prev => ({ ...prev, logoUrl: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="https://example.com/logo.svg"
                  />
                </div>

                <div>
                  <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <input
                    type="color"
                    id="primaryColor"
                    value={settings.primaryColor}
                    onChange={(e) => setSettings(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="w-full h-10 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700 mb-2">
                    Secondary Color
                  </label>
                  <input
                    type="color"
                    id="secondaryColor"
                    value={settings.secondaryColor}
                    onChange={(e) => setSettings(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="w-full h-10 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="defaultRadius" className="block text-sm font-medium text-gray-700 mb-2">
                    Default Search Radius (miles)
                  </label>
                  <input
                    type="number"
                    id="defaultRadius"
                    value={settings.defaultRadius}
                    onChange={(e) => setSettings(prev => ({ ...prev, defaultRadius: parseInt(e.target.value) || 25 }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    min="1"
                    max="100"
                  />
                </div>

                <div>
                  <label htmlFor="googleMapsApiKey" className="block text-sm font-medium text-gray-700 mb-2">
                    Google Maps API Key
                  </label>
                  <input
                    type="password"
                    id="googleMapsApiKey"
                    value={settings.googleMapsApiKey}
                    onChange={(e) => setSettings(prev => ({ ...prev, googleMapsApiKey: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your Google Maps API key"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowAdminPanel(false)}
                  className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative h-screen pt-32 lg:pt-0">
        {/* Full-bleed Google Map */}
        <div ref={mapRef} className="absolute inset-0 w-full h-full" />

        {/* Center Overlay Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full pointer-events-auto">
            {/* Logo */}
            <div className="text-center mb-6">
              <img
                src={settings.logoUrl}
                alt="Casa Larga Logo"
                className="h-16 w-auto mx-auto mb-4"
              />
              <h1 className="text-2xl font-serif text-amber-900 uppercase tracking-wide mb-2">
                STORE LOCATOR
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enter your Zip code to find a Casa Larga Wine retailer near you
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter ZIP code"
                  maxLength={10}
                  required
                  aria-describedby="zipcode-help"
                />
                <p id="zipcode-help" className="text-xs text-gray-500 mt-1">
                  Format: 12345 or 12345-6789
                </p>
              </div>

              <div>
                <label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Radius (miles)
                </label>
                <select
                  id="radius"
                  value={searchRadius}
                  onChange={(e) => setSearchRadius(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value={10}>10 miles</option>
                  <option value={25}>25 miles</option>
                  <option value={50}>50 miles</option>
                  <option value={100}>100 miles</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading || !zipCode.trim()}
                className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                style={{ backgroundColor: settings.primaryColor }}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    Find a Retailer
                  </>
                )}
              </button>
            </form>

            {/* Results Count - ARIA Live Region */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="mt-4 text-center text-sm text-gray-600"
            >
              {resultCount > 0 && (
                <p>
                  Found {resultCount} retailer{resultCount !== 1 ? 's' : ''} within {searchRadius} miles
                </p>
              )}
              {stores.length === 0 && zipCode && !isLoading && (
                <p className="text-amber-600">No retailers found in this area. Try expanding your search radius.</p>
              )}
            </div>
          </div>
        </div>

        {/* Results Panel - Mobile Drawer / Desktop Sidebar */}
        {stores.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 lg:top-32 lg:left-4 lg:right-auto lg:bottom-4 lg:w-96 bg-white rounded-t-2xl lg:rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-serif text-amber-900">
                Nearby Retailers ({stores.length})
              </h2>
            </div>
            
            <div className="max-h-64 lg:max-h-96 overflow-y-auto">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                    selectedStore?.id === store.id ? 'bg-amber-50 border-amber-200' : ''
                  }`}
                  onClick={() => setSelectedStore(store)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedStore(store);
                    }
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{store.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                          <span>
                            {store.address}<br />
                            {store.city}, {store.state} {store.zipCode}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          <span>{store.phone}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={14} className="mt-0.5 flex-shrink-0" />
                          <span>{store.hours}</span>
                        </div>
                        {store.website && (
                          <div className="flex items-center gap-2">
                            <ExternalLink size={14} />
                            <a
                              href={store.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-600 hover:text-amber-700 underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <span className="font-medium text-amber-600">
                        {store.distance?.toFixed(1)} mi
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Google Maps Script */}
      <script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${settings.googleMapsApiKey}&libraries=places`}
      />
    </div>
  );
};

export default StoreFinder;