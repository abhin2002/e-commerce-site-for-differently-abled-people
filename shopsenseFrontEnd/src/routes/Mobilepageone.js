import React, { useState } from "react";
import "./Mobilepageone.css";
import PageScroller from "../components/PageScroller";
import Navbard from "../components/Navbard";

const Mobilepageone = () => {
  // sample product data
  return (
    <div>
    <Navbard/>
    <div className="product-cards">
        
    
      <div className="product-card">
        <div className="product-image">
          <img src="product1.jpg" alt="Product 1" />
        </div>
        <div className="product-details">
          <h2>Product 1</h2>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
          <img src="product2.jpg" alt="Product 2" />
        </div>
        <div className="product-details">
          <h2>Product 2</h2>
          <p className="product-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
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
          <img src="product3.jpg" alt="Product 3" />
        </div>
        <div className="product-details">
          <h2>Product 3</h2>
          <p className="product-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
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
