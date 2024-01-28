import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../meals.jpg";

const HeaderNav = (props) => {
  const cartItem = 0;

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          <a className={classes.brand}>ReactMeals</a>
          <div className={classes["cart-box"]}>
            <p>Your Cart</p>&nbsp;&nbsp;&nbsp;
            <button
              className={classes["cart-button"]}
              onClick={() => props.cartHandler(false)}
            >
              {cartItem}
            </button>
          </div>
        </div>
      </nav>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table of meals" />
      </div>
    </>
  );
};

export default HeaderNav;
