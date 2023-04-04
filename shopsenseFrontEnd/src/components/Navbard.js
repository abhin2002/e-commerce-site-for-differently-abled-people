
import './Navbard.css';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const Navbard = () => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState(['product1', 'product2', 'product3', 'product4', 'product5']);

  const toggleMenu = (event) => {
    const menu = event.currentTarget.nextElementSibling;
    menu.classList.toggle('navbar-dropdown-menu-visible');
  }

  const handleSearchTextChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    if (searchText.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  }

  const renderSuggestions = () => {
    return (
      <div className="navbar-search-suggestions">
        {searchHistory.map((suggestion, index) => (
          <div key={index} className="navbar-search-suggestion" onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>
    );
  }
  

  return (
    <nav className="navbar" style={{ backgroundColor: "black" }}>
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          ShopSense
        </Link>
      </div>
      <ul className="navbar-links">
        <div>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Groceries</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/groceries/fruits" className="navbar-dropdown-item">Fruits</Link>
            <Link to="/groceries/vegetables" className="navbar-dropdown-item">Vegetables</Link>
            <Link to="/groceries/dairy" className="navbar-dropdown-item">Dairy & Eggs</Link>
            <Link to="/groceries/bakery" className="navbar-dropdown-item">Bakery</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Fashion</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/fashion/men" className="navbar-dropdown-item">Men's Wear</Link>
            <Link to="/fashion/women" className="navbar-dropdown-item">Women's Wear</Link>
            <Link to="/fashion/kids" className="navbar-dropdown-item">Kids Wear</Link>
            <Link to="/fashion/accessories" className="navbar-dropdown-item">Accessories</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Beauty</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/beauty/skincare" className="navbar-dropdown-item">Skincare</Link>
            <Link to="/beauty/makeup" className="navbar-dropdown-item">Makeup</Link>
            <Link to="/beauty/hair" className="navbar-dropdown-item">Hair</Link>
            <Link to="/beauty/fragrance" className="navbar-dropdown-item">Fragrance</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Electronics</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/electronics/mobiles" className="navbar-dropdown-item">Mobiles</Link>
            <Link to="/electronics/laptops" className="navbar-dropdown-item">Laptops</Link>
            <Link to="/electronics/tv" className="navbar-dropdown-item">TV & Appliances</Link>
            <Link to="/electronics/accessories" className="navbar-dropdown-item">Accessories</Link>
          </div>
        </div>
        <div className="navbar-dropdown">
          <Link className="navbar-link" onClick={toggleMenu}>Sports</Link>
          <div className="navbar-dropdown-menu">
            <Link to="/sports/cricket" className="navbar-dropdown-item">Cricket</Link>
            <Link to="/sports/football" className="navbar-dropdown-item">Football</Link>
            <Link to="/sports/tennis" className="navbar-dropdown-item">Sports Wear</Link>
        </div>
        </div>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="navbar-search-input" />
        <Link className="navbar-search-icon">
          <i className="fa fa-search"></i>
        </Link>
        <Link className="navbar-mic-icon">
          <i className="fa fa-microphone"></i>
        </Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="navbar-cart-link">
          <i className="fa fa-shopping-cart"></i>
          <Link className="navbar-cart-count">0</Link>
        </Link>
      </div>
      <div className="navbar-dropdown">
        <Link className="navbar-link">Account</Link>
        <div className="navbar-dropdown-menu">
          <Link to="/profile" className="navbar-dropdown-item">Profile</Link>
          <Link to="/wishlist" className="navbar-dropdown-item">Wishlist</Link>
          <Link to="/cart" className="navbar-dropdown-item">Cart</Link>
          <Link to="/orders" className="navbar-dropdown-item">Recent Orders</Link>
          <Link to="/settings" className="navbar-dropdown-item">Customize Settings</Link>
          <Link to="/logout" className="navbar-dropdown-item">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbard;
