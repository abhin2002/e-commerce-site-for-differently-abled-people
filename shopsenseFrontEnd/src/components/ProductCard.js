import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-icons">
          <i className="fa fa-volume-up audio-icon"></i>
          <i className="fa fa-heart like-icon"></i>
          <i className="fa fa-shopping-cart add-to-cart-icon"></i>
        </div>
      </div>
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;