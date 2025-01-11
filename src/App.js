import React from "react";
import Header from "./components/Header/Header";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import SportsSection from "./components/SportsSection/SportsSection";
import PopularProducts from "./components/PopularProduct/PopularProduct";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNav />
      <ImageSlider />
      <SportsSection />
      <PopularProducts />
    </div>
  );
}
