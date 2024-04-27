import React from 'react';
import './style.css';  // Importing standard CSS
import Home from '../../assets/images/home.svg';

function navbartest() {
  return (
    <div className="bg-white">
      <div className="container">

        {/* logo */}
        <div className="logo">
          <img className="logo-image" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="" />
        </div>

        {/* search */}
        <div className="search">
          <select className="search-select" name="" id="">
            <option>all categories</option>
          </select>
          <input className="search-input" type="text" placeholder="I'm searching for ..." />
          <svg className="search-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="..."></path></svg>
        </div>

        {/* phone number */}
        <div className="phone-number">
          <span className="phone-bold">8 800 332 65-66</span>
          <span className="phone-sub">Support 24/7</span>
        </div>

        {/* buttons */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="">
                {/* Icon */}
                <img src={Home} alt="" /> 
              </a>
            </li>
            {/* Other icons */}
          </ul>
        </nav>

        {/* cart count */}
        <div className="cart-count">
          <span className="cart-text">Your Cart</span>
          <span>$2,650.59</span>
        </div>
      </div>
      
      <hr />
    </div>
  );
}

export default navbartest;
