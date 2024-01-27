import React from "react";
import classes from "./Summary.module.css";

const AppSummary = () => {
  return (
    <>
      <div className={classes.card}>
      
        <h2>Delicious Food, Delivered To You</h2>
            <p>
            Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch of dinner at home.
            </p>
            <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
            </p>
        
      </div>
    </>
  );
};

export default AppSummary;