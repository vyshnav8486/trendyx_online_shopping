import React from "react";
import "./SevenBoxes.css";

const Boxes = () => {
  const links = [
    { href: "#", src: "/images/men.jpg", alt: "Image 1", name: "Wrogn, UCB... 60-80% Off" },
    { href: "#", src: "/images/shoes.jpg", alt: "Image 2", name: "Top Offers Min. 70% Off" },
    { href: "#", src: "/images/ladies fashion.jpg", alt: "Image 3", name: "Kurta Sets Min.70% Off" },
    { href: "#", src: "/images/carry travel.jpg", alt: "Image 4", name: "Aristocrat, Safari From ₹2,499" },
    { href: "#", src: "/images/night dress.jpg", alt: "Image 5", name: "FortCollins, Wildcraft Under ₹499" },
    { href: "#", src: "/images/jewells.jpg", alt: "Image 6", name: "ASICS, Skechers... Min. 55% Off" },
  ];

  return (
    <div className="container">
      <div className="heading2">Top Offers</div>
      <div className="boxes-container">
        {links.map((link, index) => (
          <div className="box-wrapper" key={index}>
            <a href={link.href} className="box">
              <img src={link.src} alt={link.alt} />
            </a>
            <div className="box-text">{link.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
