import React from "react";
import "./CategoryNav.css";

export default function CategoryNav() {
  const categories = [
    { name: "Men", image: "https://i.ibb.co/C7fwSDN/Men.jpg" },
    { name: "Women", image: "https://i.ibb.co/Xt2HM7r/Women.jpg" },
    { name: "Kids", image: "https://i.ibb.co/zbFCNw3/Kids.jpg" },
    { name: "Bags & Backpacks", image: "https://i.ibb.co/P4S8Nfw/Bags.jpg" },
    { name: "Sports Accessories", image: "https://i.ibb.co/x65QfZ6/Accs.jpg" },
  ];

  return (
    <nav className="category-nav">
      <div className="category-container">
        {categories.map((category, index) => (
          <a key={index} href="#" className="category-item">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
