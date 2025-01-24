import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        {/* Get to Know Us Section */}
        <div className="section">
          <h2>Get to Know Us</h2>
          <ul>
            <li><a href="/about">About Trendyx</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press-releases">Press Releases</a></li>
            <li><a href="/amazon-science">Trendyx Science</a></li>
          </ul>
        </div>

        {/* Connect with Us Section */}
        <div className="section">
          <h2>Connect with Us</h2>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>

        {/* Make Money with Us Section */}
        <div className="section">
          <h2>Make Money with Us</h2>
          <ul>
            <li><a href="/sell-on-amazon">Sell on Trendyx</a></li>
            <li><a href="/amazon-accelerator">Sell under Trendyx Accelerator</a></li>
            <li><a href="/protect-your-brand">Protect and Build Your Brand</a></li>
            <li><a href="/amazon-global-selling">Trendyx Global Selling</a></li>
            <li><a href="/supply-to-amazon">Supply to Trendyx</a></li>
            <li><a href="/affiliate">Become an Affiliate</a></li>
            <li><a href="/fulfillment-by-amazon">Fulfillment by Trendyx</a></li>
            <li><a href="/advertise-products">Advertise Your Products</a></li>
            <li><a href="/amazon-pay">Trendyx Pay on Merchants</a></li>
          </ul>
        </div>

        {/* Let Us Help You Section */}
        <div className="section">
          <h2>Let Us Help You</h2>
          <ul>
            <li><a href="/account">Your Account</a></li>
            <li><a href="/returns">Returns Centre</a></li>
            <li><a href="/recalls">Recalls and Product Safety Alerts</a></li>
            <li><a href="/purchase-protection">100% Purchase Protection</a></li>
            <li><a href="/app-download">Trendyx App Download</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <ul>
          <li><a href="/conditions-of-use">Conditions of Use & Sale</a></li>
          <li><a href="/privacy-notice">Privacy Notice</a></li>
          <li><a href="/interest-based-ads">Interest-Based Ads</a></li>
        </ul>
        <p>© 1996-2025, Trendyx.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default About;
