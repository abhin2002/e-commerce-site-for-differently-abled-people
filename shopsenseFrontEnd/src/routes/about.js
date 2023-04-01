import React from 'react';
import "../components/Heroabout.css";
import Navbar from "../components/Navbar";
import Heroabout from "../components/Heroabout";
import Footer from "./footer";
import "./about.css";
function about(){
    return(
        <>
        <div className="about" style={{background:"blue"}}>
            <div className="hero-txt-about">
                <Navbar/> 
                <Heroabout/>   
               
      <p>At Shopsense, we're dedicated to making online shopping accessible for visually impaired people. We believe that everyone deserves the opportunity to shop for the things they need, regardless of their ability to see.</p>
             <p>We know that navigating the internet can be difficult for people with visual impairments, and that's why we've designed our website to be fully compatible with screen readers and other assistive technologies. We use clear, concise language and high-contrast color schemes to make our content easy to read for all users, including those with low vision.</p>
            <p>In addition to our accessibility features, we also offer a wide range of products that cater to the needs and interests of visually impaired people. From adaptive technology to specialized tools and accessories, we're committed to providing our customers with the products they need to live full and independent lives.</p>
            <p>At Shopsense, we're constantly striving to improve our offerings and make shopping accessible to even more people. We welcome feedback from our customers and are always open to new ideas and suggestions.</p>
      
            <div class="watermark top-left">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <div class="watermark top-right">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <div class="watermark bottom-left">
    <i class="fas fa-shopping-cart"></i>
  </div>
  <div class="watermark bottom-right">
    <i class="fas fa-shopping-cart"></i>
  </div>
    </div>           
    <div className="about-container">
      <div className="about-content">
            <h7>Our Team</h7>
          <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="John Doe" />
          <p>Member 1</p>
          </div>
         <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Jane Smith" />
    
         <p>Member 2</p>
         </div>
         </div>  
           </div>
           <p>
          Thank you for choosing ShopSense. We look forward to serving you.
        </p>
        <Footer/>
        </div>
        
        </>
    );
};
export default about;

