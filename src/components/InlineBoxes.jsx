import React from "react";
import "./InlineBoxes.css";

const InlineBoxes = () => {
  return (
    <div className="inline-boxes-container">
      {/* Box 1 with 2x2 grid */}
      <div className="inline-box box-1">
        <h3>Minimum 50% off | Sports, outdoor & more</h3>
        <div className="grid-container_1">
  <a href="https://example.com/item1" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/gym.jpg" alt="Item 1" />
  </a>
  <a href="https://example.com/item2" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/cycle.jpg" alt="Item 2" />
  </a>
  <a href="https://example.com/item3" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/yoga.jpg" alt="Item 3" />
  </a>
  <a href="https://example.com/item4" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/ball.jpg" alt="Item 4" />
  </a>
</div>
        <a href="#" className="see-all-details1">See All Details</a>
      </div>

      {/* Box 2 */}
<div className="inline-box box-2">
  <h3>Up to 40% | Deals on mobiles and accessories</h3>
  <div className="centered-image">
    <a href="https://example.com/mobile-deal" target="_blank" rel="noopener noreferrer">
      <img src="/images/mobile.webp" alt="Deals on Mobiles" />
    </a>
  </div>
  <a href="#" className="see-all-details2">See All Details</a>
</div>
      <div className="inline-box box-3">
      <h3>Starting ₹99 | Deals on costumes, toys & more</h3>
        <div className="grid-container_1">
  <a href="https://example.com/item1" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/windowcraft.jpg" alt="Item 1" />
  </a>
  <a href="https://example.com/item2" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/superminis.jpg" alt="Item 2" />
  </a>
  <a href="https://example.com/item3" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/educational toys.jpg" alt="Item 3" />
  </a>
  <a href="https://example.com/item4" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/toys.jpg" alt="Item 4" />
  </a>
</div>
        <a href="#" className="see-all-details1">See All Details</a>
      </div>
      <div className="inline-box box-4">
      <h3>Starting ₹129 | Amazon brands & more</h3>
        <div className="grid-container_1">
  <a href="https://example.com/item1" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/containers.jpg" alt="Item 1" />
  </a>
  <a href="https://example.com/item2" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/plate.jpg" alt="Item 2" />
  </a>
  <a href="https://example.com/item3" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/oil.jpg" alt="Item 3" />
  </a>
  <a href="https://example.com/item4" className="grid-items_1" target="_blank" rel="noopener noreferrer">
    <img src="/images/bed.jpg" alt="Item 4" />
  </a>
</div>
        <a href="#" className="see-all-details1">See All Details</a>
      </div>
    </div>
  );
};

export default InlineBoxes;
