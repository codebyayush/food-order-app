import React, { useState } from "react";
import classes from "./MealForm.module.css";

const MealForm = () => {
  const [count, setCount] = useState(0);

  const addBtnClickHandler = () => {
        
  };

  const fontStyle = {
    fontSize: "small",
    fontWeight: "600",
  };

  const amountChangeHandler = (e) => {
        setCount(e.target.value)
  }

  return (
    <>
      <form action="#" className={classes.form}>
        <p style={fontStyle}>
          Amount &nbsp;&nbsp;
          <input
            type="number"
            className={classes["input-number"]}
            value={count}
            onChange={amountChangeHandler}
            min={0}
          />
        </p>
        <button type="button" onClick={addBtnClickHandler} className={classes.addBtn}>
          + Add Item
        </button>
      </form>
    </>
  );
};

export default MealForm;
