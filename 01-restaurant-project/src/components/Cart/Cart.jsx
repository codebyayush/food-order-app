import React from 'react'
import ReactDOM  from 'react-dom'
import classes from './Cart.module.css'

const Cart = (props) => {
  return (
    ReactDOM.createPortal(
        <>
            <div className={classes['popup-cart']}>
                <div className={classes['cart-div']}>
                        <div className={classes.mealsContent}>
                            <h4>MealName</h4>
                            <div className={classes.buttons}>
                                <button>+</button>&nbsp;
                                <button>-</button>
                            </div>
                        </div>
                        <hr />
                        <div className={classes.totalAmount}>
                            <h4>Total Amount</h4>
                            <h4>$33</h4>
                        </div>
                        <div className={classes.closeOrderBtn}>
                            <button onClick={() => props.cartHandler(true)} className={classes.closeButton}>Close</button>
                            <button className={classes.orderButton}>Order</button>
                        </div>
                </div>
            </div>
        </>
        , document.getElementById('cart-portal')
    )
  )
}

export default Cart;