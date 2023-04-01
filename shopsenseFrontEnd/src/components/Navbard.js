import React from 'react';
import './Navbard.css';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
function Navbard() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>ShopSense</h2>
      </div>
      <div className="search-bar">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for products" aria-label="Search for products" />
          <div className="input-group-append">
            <button className="search-btn" type="button"><FaSearch /></button>
          </div>
        </div>
        <button className="audio-btn" type="button"><FaMicrophone /></button>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#">Groceries</a>
        </li>
        <li className="navbar__item">
          <a href="#">Beauty</a>
        </li>
        <li className="navbar__item">
          <a href="#">Fashion</a>
        </li>
        <li className="navbar__item">
          <a href="#">Electronics</a>
        </li>
        <li className="navbar__item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__item">
          <a href="#">Sports</a>
        </li>
      </ul>
      <div className="navbar__cart">
        <a href="#">Cart</a>
      </div>
    </nav>
  );
}

export default Navbard;