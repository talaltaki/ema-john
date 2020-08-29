import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <h5>${price}</h5>
        <p>
          <small>Only {stock} available in stock - order soon</small>
        </p>
        <button onClick={() => props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
