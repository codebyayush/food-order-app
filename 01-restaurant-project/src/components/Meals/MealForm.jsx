import React, { useContext, useState } from "react";
import classes from "./MealForm.module.css";
import CartContext from "../../Store/cart-context";

const MealForm = (props) => {
  const [count, setCount] = useState(1);
  const ctx = useContext(CartContext);

  const fontStyle = {
    fontSize: "small",
    fontWeight: "600",
  };

  const amountChangeHandler = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      <form action="#" className={classes.form}>
        <p style={fontStyle}>
          Amount &nbsp;&nbsp;
          <input
            type="number"
            className={classes["input-number"]}
            onChange={amountChangeHandler}
            value={count}
            min={1}
            max={5}
            defaultValue={1}
          />
        </p>
        <button
          type="button"
          onClick={() => ctx.addItem({...props.mealItem, amount: count})}
          className={classes.addBtn}
        >
          + Add Item
        </button>
      </form>
    </>
  );
};

export default MealForm;