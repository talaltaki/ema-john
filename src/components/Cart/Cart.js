import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, product) => total + product.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price;
  }

  let shipping = 0;
  if (total > 0) {
    shipping = 12.99;
  } else {
    shipping = 0;
  }

  const tax = (total / 10).toFixed(2);

  return (
    <div>
      <h3>Order Summery</h3>
      <h4>Items Ordered: {cart.length}</h4>
      <p>
        <small>Price: ${total.toFixed(2)}</small>
      </p>
      <p>
        <small>Shipping & Handling: ${shipping.toFixed(2)}</small>
      </p>
      <p>
        <small>Tax: ${tax}</small>
      </p>
      <h3>
        <span style={{ color: "goldenrod" }}>Order Total:</span> $
        {(total + shipping + Number(tax)).toFixed(2)}
      </h3>
      <button>Review your order</button>
    </div>
  );
};

export default Cart;
