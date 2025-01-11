import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <button className="menu-toggle">
          <span className="menu-label">ALL</span>
          <span className="menu-label">SPORTS</span>
        </button>
        <a href="/" className="logo">
          <img src="https://i.ibb.co/MBhBnxQ/logo.png" alt="Decathlon Logo" />
        </a>
      </div>

      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search for 'Running'" />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="header-right">
        <div className="delivery-location">
          <span>Delivery Location</span>
          <div className="pincode">
            <span className="code">560002</span>
            <a href="#" className="change-link">
              CHANGE
            </a>
          </div>
        </div>

        <div className="user-actions">
          {["Sign In", "My Store", "Support", "Wishlist", "Cart"].map(
            (action) => (
              <button
                key={action}
                type="button"
                className="action-item"
                role="button"
                aria-label={action}
              >
                <i className={`fas fa-${getActionIcon(action)}`}></i>
                <span>{action}</span>
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
}

function getActionIcon(action) {
  const icons = {
    "Sign In": "user",
    "My Store": "store",
    Support: "headset",
    Wishlist: "heart",
    Cart: "shopping-cart",
  };
  return icons[action];
}
