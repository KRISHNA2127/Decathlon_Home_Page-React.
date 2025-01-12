// src/context/ShopContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const ShopContext = createContext();

// Create the provider component
export const ShopProvider = ({ children }) => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  
  // State for user preferences
  const [userPreferences, setUserPreferences] = useState({
    deliveryPincode: '560002',
    preferredLanguage: 'en'
  });

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If new item, add to cart with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove items from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Function to update user preferences
  const updatePreferences = (newPreferences) => {
    setUserPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  };

  // Value object that will be shared across components
  const value = {
    cartItems,
    userPreferences,
    addToCart,
    removeFromCart,
    updatePreferences,
    setUserPreferences
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook for using the shop context
export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export default ShopContext;