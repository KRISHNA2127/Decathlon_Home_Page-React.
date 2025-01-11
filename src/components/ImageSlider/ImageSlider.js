import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.ibb.co/Lh8pyV9/defaut-12.jpg",
    "https://i.ibb.co/Lh8pyV9/defaut-12.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="slider-container">
      <div className="flex1">
        <figure
          className="slider-images"
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              className="image-trans"
              src={slide}
              alt={`Banner ${index + 1}`}
            />
          ))}
        </figure>
        <button className="nav-button nav-left" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="nav-button nav-right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
}
