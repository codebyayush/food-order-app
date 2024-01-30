import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addOneItem = (item) => {
    setCartItems((prevItems) => {
      let updatedItem = [...prevItems];

      const existingItemIndex = prevItems.findIndex(
        (prevItems) => prevItems.id === item.id
      );

      const prevAmount = Number(updatedItem[existingItemIndex].amount);
      const newAmount = prevAmount + 1;

      if (newAmount > 10) {
        return updatedItem;
      } else {
        updatedItem[existingItemIndex].amount = newAmount;
        return updatedItem;
      }
    });
  };

  const removeOneItem = (item) => {
    setCartItems((prevItems) => {
      let updatedItem = [...prevItems];

      const existingItemIndex = prevItems.findIndex(
        (prevItems) => prevItems.id === item.id
      );

      const prevAmount = Number(updatedItem[existingItemIndex].amount);
      const newAmount = prevAmount - 1;

      if (newAmount < 1) {
        const updatedItems = prevItems.filter((items) => items.id !== item.id);
        return updatedItems;
      } else {
        updatedItem[existingItemIndex].amount = newAmount;
        return updatedItem;
      }
    });
  };

  const addItemHandler = (item) => {
    setCartItems((prevItems) => {
      //we'll check if the item is already present in the array
      //if it is present then we'll only update the amount of the item.
      let existingItemIndex = prevItems.findIndex(
        (prevItems) => prevItems.id === item.id
      );

      if (existingItemIndex !== -1) {
        let updatedItem = [...prevItems];

        let prevAmount = Number(updatedItem[existingItemIndex].amount);

        const updatedAmount =
          Number(updatedItem[existingItemIndex].amount) + Number(item.amount);

        if (updatedAmount <= 10) {
          const newAmount = (prevAmount += Number(item.amount));

          updatedItem[existingItemIndex].amount = newAmount;

          return updatedItem;
        } else {
          return updatedItem;
        }
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemHandler = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((items) => items.id !== id);
      return updatedItems;
    });
  };

  const cartAmount = cartItems.reduce((acc, curr) => {
    acc = acc + Number(curr.amount);
    return acc;
  }, 0);

  const totalPrice = cartItems.reduce((acc, curr) => {
    acc = acc + Number(curr.price) * Number(curr.amount);
    return acc;
  }, 0);

  const cartContext = {
    items: cartItems,
    amount: cartAmount,
    totalPrice: totalPrice,
    addOneItemOnCart: addOneItem,
    addItem: addItemHandler,
    removeOneItem: removeOneItem,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;