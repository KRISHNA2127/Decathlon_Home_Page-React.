import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('560002');

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // You can implement search functionality here later
  };

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

      {/* Center Section: Search Bar */}
      <div className="search-container">
        <i className="fas fa-search search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for 'Running'"
          className="search-input"
        />
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