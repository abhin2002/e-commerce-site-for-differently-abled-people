import React, { useState } from "react";
import "./Mobilepageone.css";
import { Link, useNavigate } from "react-router-dom";
import PageScroller from "../components/PageScroller";
import MobileImage1 from '../images/googlepixel4a-2.jpg';
import MobileImage2 from '../images/googlepixel4a-1.jpg';
import MobileImage3 from '../images/googlepixel4a-3.jpg';
import Navbard from "../components/Navbard";
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.product-image');
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  
  var element = document.getElementById("slideshow");
  if (typeof element !== "undefined" && element !== null) {
    element.style.display = "block";
  }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    currentSlide(i+1);
  });
}
const Mobilepageone = () => {
  // sample product data
  return (
    <div>
         <Navbard/>
      <div className="product-cards-container">
        <div className="product-card">
          <div className="product-images-container">
          <img src={MobileImage1} alt="Product 1" className="product-image"id="image1"/>
            <img src={MobileImage2} alt="Product 2" className="product-image" id="image2"/>
            <img src={MobileImage3} alt="Product 3" className="product-image"id="image3"/>
          </div>
          <div class="dots-container">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
          <div className="product-details">
            <h3>Google Pixel 4a</h3>
            <p1 className="product-description">Budget-friendly smartphone with a 5.81-inch OLED display, Snapdragon 730G processor, 6GB of RAM, 128GB of storage, and a 12.2-megapixel rear camera. It also features a headphone jack, a fingerprint sensor, and runs on Android 10.</p1>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <Link to="/Googlepixel4a"><button className="buy-now-btn">Buy Now{" >"}</button></Link>
              <span className="product-icon-volume"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-images-container">
            <img src="../images/redmi11pro-1.jpg" alt="Product 2" className="product-image" id="image1"/>
            <img src="../images/redmi11pro-2.jpg" alt="Product 2" className="product-image" id="image2"/>
            <img src="../images/redmi11pro-3.jpg" alt="Product 2" className="product-image"id="image3"/>
            </div>
            <div class="dots-container">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
          <div className="product-details">
            <h3>Redmi 11 </h3>
            <p className="product-description">A Smartphone from Xiaomi with a 6.55-inch IPS LCD display, MediaTek Helio G25 processor, 4GB or 6GB of RAM, 64GB or 128GB of storage, and a 50-megapixel rear camera. It also features a 5,000mAh battery, a side-mounted fingerprint sensor, and runs on MIUI 12 based on Android 11.</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now{" >"}</button>
              <span className="product-icon-volume"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="product-images-container">
            <img src="../images/redmi11pro-1.jpg" alt="Product 2" className="product-image" id="image1"/>
            <img src="../images/redmi11pro-2.jpg" alt="Product 2" className="product-image" id="image2"/>
            <img src="../images/redmi11pro-3.jpg" alt="Product 2" className="product-image"id="image3"/>
          </div>
          <div class="dots-container">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
          <div className="product-details">
            <h3>Samsung F26</h3>
            <p className="product-description">Product description</p>
            <div className="product-icons">
              <span className="product-icon-heart"><i className="fas fa-heart"></i></span>
              <span className="product-icon-cart"><i className="fas fa-shopping-cart"></i></span>
              <button className="buy-now-btn">Buy Now{" >"}</button>
              <span className="product-icon-volume"><i className="fas fa-volume-up"></i></span>
            </div>
          </div>
        </div>
        </div>
      <PageScroller/>
    </div>
  );
};

export default Mobilepageone;
