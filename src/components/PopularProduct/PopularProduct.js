import React from "react";
import { useCart } from "../../context/CartContext";
import "./PopularProduct.css";

export default function PopularProducts() {
  const { addToCart } = useCart();

  const popularProducts = [
    {
      id: 1,
      name: "KRIPRUN",
      description: "Moisture-wicking fabric",
      price: 1499,
      image: "https://i.ibb.co/dJc7MLV/p2598825.jpg",
    },
    {
      id: 2,
      name: "DOMYOS",
      description: "Responsive cushioning",
      price: 2999,
      image: "https://i.ibb.co/Rznjv7R/p2688152.jpg",
    },
    {
      id: 3,
      name: "QUECHUA",
      description: "optimal thickness",
      price: 999,
      image: "https://i.ibb.co/fng8sWx/p1896777.jpg",
    },
    {
      id: 4,
      name: "FORCLAZ",
      description: "enhance your cycling experience",
      price: 1799,
      image: "https://i.ibb.co/d5LDrHp/p2607215.jpg",
    },
    {
      id: 5,
      name: "QUECHUA",
      description: "ventilated shoe compartment",
      price: 2499,
      image: "https://i.ibb.co/ynyGdXK/p2596951.jpg",
    },
  ];

  return (
    <>
      <div className="Most-Popular">
        <p className="Most-Popular-text">Most Popular</p>
      </div>
      <div className="flex-box-frame">
        <div className="flex-box-content">
          {popularProducts.map((product) => (
            <div key={product.id} className="grid-items">
              <div className="grid1">
                <img
                  src={product.image}
                  className="most-popular-image"
                  alt={product.name}
                />
                <div className="flex-box-3">
                  <button className="heart-button">
                    <img
                      src="https://i.ibb.co/vQK3x1D/favorite-16dp-000000-FILL0-wght400-GRAD0-opsz20.png"
                      alt="Favorite"
                    />
                  </button>
                </div>
              </div>
              <div className="grid2">
                <p className="product-desc">{product.name}</p>
                <p className="product-features">{product.description}</p>
                <div className="price-container">
                  ₹{product.price.toFixed(2)}
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
