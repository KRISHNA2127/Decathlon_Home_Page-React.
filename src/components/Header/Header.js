import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [deliveryPincode, setDeliveryPincode] = useState('560002');

  // Sample product data with a comprehensive list of sports equipment
  const products = [
    { id: 1, name: 'Professional Running Shoes', category: 'Running', price: '₹4,999' },
    { id: 2, name: 'Tennis Pro Racket', category: 'Tennis', price: '₹3,499' },
    { id: 3, name: 'Basketball - Size 7', category: 'Basketball', price: '₹1,299' },
    { id: 4, name: 'Swimming Goggles', category: 'Swimming', price: '₹799' },
    { id: 5, name: 'Yoga Mat Premium', category: 'Yoga', price: '₹1,499' },
    { id: 6, name: 'Cricket Bat English Willow', category: 'Cricket', price: '₹6,999' },
    { id: 7, name: 'Football - Size 5', category: 'Football', price: '₹899' },
    { id: 8, name: 'Badminton Racket Pro', category: 'Badminton', price: '₹2,499' },
    { id: 9, name: 'Cycling Helmet', category: 'Cycling', price: '₹1,999' },
    { id: 10, name: 'Training Dumbbell Set', category: 'Fitness', price: '₹3,999' },
    { id: 11, name: 'Table Tennis Paddle', category: 'Table Tennis', price: '₹899' },
    { id: 12, name: 'Hiking Backpack 30L', category: 'Hiking', price: '₹2,499' },
    { id: 13, name: 'Golf Club Set', category: 'Golf', price: '₹15,999' },
    { id: 14, name: 'Boxing Gloves', category: 'Boxing', price: '₹1,799' },
    { id: 15, name: 'Volleyball Professional', category: 'Volleyball', price: '₹999' }
  ];

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality effect
  useEffect(() => {
    // Only search if there's a query
    if (searchQuery.trim()) {
      // Filter products based on name or category
      const filteredResults = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      // Clear results if search query is empty
      setSearchResults([]);
    }
  }, [searchQuery]); // Effect runs when searchQuery changes

  // Handle pincode change
  const handlePincodeChange = () => {
    const newPincode = prompt('Enter new pincode:');
    if (newPincode) {
      setDeliveryPincode(newPincode);
    }
  };

  return (
    <header className={`main-header ${isFixed ? 'fixed-header' : ''}`}>
      {/* Left Section: Menu and Logo */}
      <div className="header-left">
        <button className="menu-toggle">
          <span className="menu-label">ALL</span>
          <span className="menu-label">SPORTS</span>
        </button>
        
        <a href="/" className="logo">
          <img src="/decathlon-logo.png" alt="Decathlon Logo" />
        </a>
      </div>

      {/* Center Section: Search Bar with Results */}
      <div className="search-container">
        <i className="fas fa-search search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for 'Running'"
          className="search-input"
        />
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map(product => (
              <div key={product.id} className="search-result-item">
                <span className="product-name">{product.name}</span>
                <span className="product-category">{product.category}</span>
                <span className="product-price">{product.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section: User Actions */}
      <div className="header-right">
        <div className="delivery-location">
          <span>Delivery Location</span>
          <div className="pincode">
            <span className="code">{deliveryPincode}</span>
            <button 
              onClick={handlePincodeChange}
              className="change-link"
            >
              CHANGE
            </button>
          </div>
        </div>

        <div className="user-actions">
          {[
            { icon: 'fa-user', label: 'Sign In' },
            { icon: 'fa-store', label: 'My Store' },
            { icon: 'fa-headset', label: 'Support' },
            { icon: 'fa-heart', label: 'Wishlist' },
            { icon: 'fa-shopping-cart', label: 'Cart' }
          ].map(action => (
            <button
              key={action.label}
              type="button"
              className="action-item"
              role="button"
              aria-label={action.label}
            >
              <i className={`fas ${action.icon}`} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;