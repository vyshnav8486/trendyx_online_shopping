import React, { useState, useEffect } from "react";
import "./OfferGrid.css";

// Extended categories array with more images and links
const dynamicCategories = [
  ["/images/laptop.jpg", "https://example.com/laptop"],
  ["/images/lipstick.jpg", "https://example.com/lipstick"],
  ["/images/shoe.jpg", "https://example.com/shoe"],
  ["/images/clothing.jpg", "https://example.com/watch"],
  ["/images/camera.jpg", "https://example.com/camera"],
  ["/images/handbag.avif", "https://example.com/bag"],
  ["/images/jewellary.webp", "https://example.com/glasses"],
  ["/images/headphone.jpg", "https://example.com/headphones"],
  ["/images/shoe.jpg", "https://example.com/tablet"],
  ["/images/sunglass.jpg", "https://example.com/perfume"],
  ["/images/tablet.jpg", "https://example.com/sunglasses"],
  ["/images/watch.jpg", "https://example.com/smartwatch"],
];

const ShopByCategory = () => {
  const [currentImages, setCurrentImages] = useState(dynamicCategories.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % dynamicCategories.length);
    }, 4000); // Change images every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Update current images to reflect the currentIndex
    setCurrentImages([
      dynamicCategories[currentIndex],
      dynamicCategories[(currentIndex + 1) % dynamicCategories.length],
      dynamicCategories[(currentIndex + 2) % dynamicCategories.length],
      dynamicCategories[(currentIndex + 3) % dynamicCategories.length],
    ]);
  }, [currentIndex]);

  return (
    <div className="shop-by-category-container">
      <h1 className="heading1">Shop by Category</h1>
      <div className="grid-container">
        {currentImages.map(([image, link], index) => (
          <div className="grid-item" key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`Category ${index + 1}`} className="grid-image" />
            </a>
          </div>
        ))}
      </div>
      <div className="shop-favourite-section">
        <p className="shop-favourite-text">Shop your favourite brands</p>
        <button className="shop_now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ShopByCategory;
