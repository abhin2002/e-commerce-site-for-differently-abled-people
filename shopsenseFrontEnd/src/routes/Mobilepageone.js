import React, { useState } from "react";
import "./Mobilepageone.css";
import PageScroller from "../components/PageScroller";
import Navbard from "../components/Navbard";

const Mobilepageone = () => {
  // sample product data
  return (
    <div>
      <Navbard/>
      <div className="product-cards-container">
        <div className="product-card">
          <div className="product-image">
            <img url="../images/googlepixel4a-2" alt="Product 1" className="product-1"/>
          </div>
          <div className="product-details">
            <h9>Google Pixel 4a</h9>
            <p className="product-description">Product description</p>
            <div className="product-icons">
              <span className="product-icon"><i className="fas fa-heart"></i></span>
              <span className="product-icon"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now</button>
              <span className="product-icon"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src="" alt="Product 2" className="product-2"/>
          </div>
          <div className="product-details">
            <h9>Redmi 11 Pro</h9>
            <p className="product-description">Product description</p>
            <div className="product-icons">
              <span className="product-icon"><i className="fas fa-heart"></i></span>
              <span className="product-icon"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now</button>
              <span className="product-icon"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <img src="product3.jpg" alt="Product 3" className="product-3" />
          </div>
          <div className="product-details">
            <h9>Samsung Galaxy F23</h9>
            <p className="product-description">Product description</p>
            <div className="product-icons">
              <span className="product-icon"><i className="fas fa-heart"></i></span>
              <span className="product-icon"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now</button>
              <span className="product-icon"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
      </div>
      <PageScroller/>
    </div>
  );
};

export default Mobilepageone;
