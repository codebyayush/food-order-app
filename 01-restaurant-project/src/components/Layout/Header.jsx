import React, { useEffect } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../meals.jpg";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const HeaderNav = (props) => {
  const ctx = useContext(CartContext);

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          <a className={classes.brand}>ReactMeals</a>
          <button
            onClick={() => props.cartHandler(false)}
            className={classes["cart-box"]}
          >
            <p>Your Cart</p>&nbsp;&nbsp;&nbsp;
            <button className={classes["cart-button"]}>
              {ctx.amount}
            </button>
          </button>
        </div>
      </nav>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table of meals" />
      </div>
    </>
  );
};

export default HeaderNav;
