import React from 'react';
import './AdvertisementBox.css';


const AdvertisementBox = () => {
  return (
    <div className="advertisement-box">
      <div className="advertisement-slider">
        <div className="advertisement-slide">
          <h3>Latest Deals and Discounts!</h3>
          <p>Get up to 50% off on all categories. Limited time offer!</p>
        </div>
        <div className="advertisement-slide">
          <h3>Summer Sale!</h3>
          <p>Shop now and get 30% off on all summer collections.</p>
        </div>
        <div className="advertisement-slide">
          <h3>Flash Sale!</h3>
          <p>Get extra 10% off on all products. Use code FLASH10 at checkout.</p>
        </div>
      </div>
      <div className="advertisement-dots">
        <span className="advertisement-dot"></span>
        <span className="advertisement-dot"></span>
        <span className="advertisement-dot"></span>
      </div>
    </div>
  );
};

export default AdvertisementBox;