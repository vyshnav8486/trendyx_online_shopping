import React from "react";
import "./HeaderLinks.css"; // Ensure the CSS file is correctly linked

const HeaderSection = () => (
  <header className="header-section">
    <nav>
      <ul className="header-links">
        <li><a href="/all">All</a></li>
        <li><a href="/clothing">Clothing</a></li>
        <li><a href="/mobile-tablets">Mobile & Tablets</a></li>
        <li><a href="/home-accessories">Home Accessories</a></li>
        <li><a href="/jewellery">Jewellery</a></li>
        <li><a href="/cameras">Cameras</a></li>
        <li><a href="/handbags">Handbags</a></li>
        <li><a href="/beauty">Beauty</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/computer-accessories">Computer Accessories</a></li>
        <li><a href="/new-features">New Features</a></li>
      </ul>
    </nav>
  </header>
);

export default HeaderSection;
