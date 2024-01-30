import React, { useState } from "react";
import HeaderNav from "./components/Layout/Header";
import AppSummary from "./components/Layout/Summary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartTrigger, setCartTrigger] = useState(false);

  const cartTriggerHandler = (bool) => {
    if (bool === false) {
      setCartTrigger(true);
    } else {
      setCartTrigger(false);
    }
  };

  return (
    <CartProvider>
      <HeaderNav cartHandler={cartTriggerHandler} />
      <AppSummary />
      <AvailableMeals />
      {cartTrigger && <Cart cartHandler={cartTriggerHandler} />}
    </CartProvider>
  );
}

export default App;
