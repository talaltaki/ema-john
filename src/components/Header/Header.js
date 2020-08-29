import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav className="navbar">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory Here</a>
        <br />
        <div className="search-icon">
          <div className="search">
            <input type="text" placeholder="Type here to search" />
          </div>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            <span className="product-number">0</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
