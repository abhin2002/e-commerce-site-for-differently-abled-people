import React from 'react';
import './Dashboard.css';

const ProductCard = ({ name, description, likes,audio,buyNow,imageUrl="https://via.placeholder.com/150" }) => {
  return (
    <div className="product-card-dash">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="product-actions">
      <div className="product-card-likes-dash">
      <i className="fas fa-heart"></i> {likes} 
      </div>
      <div className="product-card-audio-dash">
      <i className="fas fa-volume-up"></i>
      </div>
      <div className="product-card-buy-dash">
      <i className="fas fa-shopping-cart"></i> 
      </div>
      </div>
    </div>
  );
};

export default ProductCard;