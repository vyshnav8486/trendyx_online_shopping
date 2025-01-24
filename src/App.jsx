import React from "react";
import NavBar from "./components/NavBar.jsx"; // Ensure the path is correct
import HeaderLinks from "./components/HeaderLinks.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import OfferGrid from "./components/OfferGrid.jsx";
import BigSales from "./components/BigSales.jsx";
import InlineBoxes from "./components/InlineBoxes";
import SevenBoxes from "./components/SevenBoxes";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <NavBar />
      <HeaderLinks/>
      <ImageCarousel/> 
      <OfferGrid/>
      <BigSales/>
      <InlineBoxes/>
      <SevenBoxes/>
      <About/>
    </div>
  );
};

export default App;
