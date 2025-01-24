import React, { useState, useEffect } from "react";
import "./BigSales.css";

const BigSales = () => {
  const calculateTimeLeft = () => {
    const salesEndDate = new Date("2025-01-31T23:59:59"); // Set your sales end date here
    const now = new Date();
    const difference = salesEndDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="big-sales-container">
        <div className="big-sales-image">
        <img src="/images/electronics.jpg" alt="Electronic Items" />
      </div>
      <div className="big-sales-content">
        <h1 className="big-sales-title">Hurry Up!</h1>
        <p className="big-sales-subtitle">Sales ends in:</p>
        <div className="countdown-timer">
          <div className="time-box">
            <span className="time-value">{timeLeft.days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours}</span>
            <span className="time-label">Hrs</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes}</span>
            <span className="time-label">Mins</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds}</span>
            <span className="time-label">Sec</span>
          </div>
        </div>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default BigSales;
