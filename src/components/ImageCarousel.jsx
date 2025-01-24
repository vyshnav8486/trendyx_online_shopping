import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    "/images/image 1.jpg",
    "/images/image 2.jpg",
    "/images/image 3.jpg",
    "/images/image 4.jpg",
    "/images/image 6.jpg",
    "/images/image 7.jpg",
    "/images/image 9.jpg",
    "/images/image 10.jpg",
    "/images/image 11.jpg",

  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false); // State to manage pausing

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentImage((prev) => (prev + 1) % images.length); // Change to the next image
      }
    }, 2000); // 5 seconds total: 2 seconds of pause + 3 seconds for transition

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, [paused, images.length]);

  useEffect(() => {
    const pauseTimeout = setTimeout(() => {
      setPaused(true); // Pause for 2 seconds after image change
      setTimeout(() => {
        setPaused(false); // Resume after 2 seconds
      }, 1000); // Resume after 2 seconds
    }, 0);

    return () => clearTimeout(pauseTimeout); // Clear the timeout when component unmounts
  }, [currentImage]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentImage * 50}vw)`, // Move images based on the current image index
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
