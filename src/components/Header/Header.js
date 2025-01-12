import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import useSearch from '../../hooks/useSearch';
import './Header.css';

const Header = () => {
  // Using custom hooks for search functionality
  const { query, setQuery, results, loading } = useSearch();
  const { userPreferences, setUserPreferences } = useShop();
  const [isFixed, setIsFixed] = useState(false);

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle pincode change
  const handlePincodeChange = (newPincode) => {
    setUserPreferences(prev => ({
      ...prev,
      deliveryPincode: newPincode
    }));
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for 'Running'"
          className="search-input"
        />
        {loading && <span className="search-loading">Searching...</span>}
        {results.length > 0 && (
          <div className="search-results">
            {results.map(result => (
              <div key={result.id} className="search-result-item">
                {result.name}
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
            <span className="code">{userPreferences.deliveryPincode}</span>
            <button 
              onClick={() => handlePincodeChange(prompt('Enter new pincode:'))}
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