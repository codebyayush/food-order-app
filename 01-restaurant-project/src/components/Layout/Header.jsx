import React from "react";
import "./Header.css";

const HeaderNav = () => {
  const cartItem = 0;

  return (
    <nav className="navbar">
      <div className="container">
        <a className="brand">ReactMeals</a>
        <div className="cart-box">
          <p>Your Cart</p>&nbsp;&nbsp;&nbsp;
          <button className="cart-button">{cartItem}</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
