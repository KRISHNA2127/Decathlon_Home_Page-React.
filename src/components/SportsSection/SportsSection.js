import React, { useState } from "react";
import "./SportsSection.css";

export default function SportsSection() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const moveAmount = 10.01;
  const maxRightMoves = 4;

  const sportsItems = [
    { name: "CLIMBING", image: "https://i.ibb.co/x8XYXLJ/defaut-21.jpg" },
    { name: "SWIMMING", image: "https://i.ibb.co/6rL5YHp/defaut-20.jpg" },
    { name: "TENNIS", image: "https://i.ibb.co/PtD4mXK/defaut-19.jpg" },
    { name: "FOOTBALL", image: "https://i.ibb.co/V9wMKFP/defaut-18.jpg" },
    { name: "BADMINTON", image: "https://i.ibb.co/MhFZzGw/defaut-17.jpg" },
    { name: "FITNESS", image: "https://i.ibb.co/mbjh7c3/defaut-16.jpg" },
    { name: "RUNNING", image: "https://i.ibb.co/PN3hNxh/defaut-15.jpg" },
    { name: "TREKING", image: "https://i.ibb.co/wKnJ9Bn/defaut-14.jpg" },
    { name: "CYCLING", image: "https://i.ibb.co/6rhBwGV/defaut-13.jpg" },
    { name: "CLIMBING", image: "https://i.ibb.co/x8XYXLJ/defaut-21.jpg" },
  ];

  const moveLeft = () => {
    if (currentPosition < 0) {
      setCurrentPosition((prev) => Math.min(0, prev + moveAmount));
    }
  };

  const moveRight = () => {
    if (currentPosition > -moveAmount * maxRightMoves) {
      setCurrentPosition((prev) => prev - moveAmount);
    }
  };

  return (
    <>
      <div className="title">
        <p className="title-text">Your Favourite Sports</p>
      </div>
      <div className="frame-container">
        <button className="nav-button nav-left" onClick={moveLeft}>
          &lt;
        </button>
        <button className="nav-button nav-right" onClick={moveRight}>
          &gt;
        </button>

        <div
          className="slider-content"
          style={{
            transform: `translateX(${currentPosition}%)`,
          }}
        >
          {sportsItems.map((item, index) => (
            <div
              key={index}
              className="grid-item"
              style={{
                left: `calc(${index * 10.01}% + ${index * 3}px)`,
              }}
            >
              <div className="grid-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="grid-text">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
