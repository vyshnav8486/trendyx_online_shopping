import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [placeholderText, setPlaceholderText] = useState(
    "Search accessories, phones, electronics..."
  );
  const [isFocused, setIsFocused] = useState(false); // Track if the input is focused
  const [inputValue, setInputValue] = useState(""); // Track the value of the input

  const placeholderArray = [
    "Search Accessories",
    "Search Phones",
    "Search Electronics",
    "Search Gadgets",
    "Search Mens wear",
    "Search Ladies wear"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (!isFocused && inputValue === "") {  // Only change text if input is empty and not focused
        setPlaceholderText(placeholderArray[currentIndex]);
        currentIndex = (currentIndex + 1) % placeholderArray.length;
      }
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [isFocused, inputValue]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>TRenDYX</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder={placeholderText}
          value={inputValue} // Bind the value to the inputValue state
          onFocus={() => setIsFocused(true)}  // Set focused to true when input is clicked
          onBlur={() => setIsFocused(false)}  // Set focused back to false when input loses focus
          onChange={(e) => setInputValue(e.target.value)}  // Update input value as user types
        />
        <i className="fa fa-search"></i> {/* Add the search icon here */}
      </div>
        <div className="nav-icons">
          <a href="/cart" className="icon">
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
          <a href="/signin" className="icon">
            <span className="material-symbols-outlined">account_circle</span>
          </a>
          <a href="/store" className="icon">
            <span className="material-symbols-outlined">local_convenience_store</span>
          </a>
          <a href="/delivery" className="icon">
            <span className="material-symbols-outlined">delivery_truck_bolt</span>
          </a>
          <a href="/payment" className="icon">
            <span className="material-symbols-outlined">paid</span>
          </a>
          <a href="/sell" className="icon">
            <span className="material-symbols-outlined">sell</span>
          </a>
        </div>
    </nav>
  );
};

export default NavBar;
