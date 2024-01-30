import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  totalPrice: 0,
  addOneItemOnCart: (item) => {},
  removeOneItem: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
