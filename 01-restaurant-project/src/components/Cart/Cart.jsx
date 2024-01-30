import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';

const Cart = (props) => {

  const ctx = useContext(CartContext)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <div>
          <div className={classes.cartItems}>
              <div>
                <li className={classes.itemName}>{item.name}</li>
                <div className={classes.itemPrice}>
                  <li>${item.price}</li>
                  <li className={classes.itemAmount}>x{item.amount}</li>
                </div>
              </div>
              <div className={classes.cartButtons}>
                <button className={classes.minusButton} onClick={() => ctx.removeOneItem(item)}>-</button>
                <button className={classes.plusButton} onClick={() => ctx.addOneItemOnCart(item)}>+</button>
              </div>
          </div>
          <hr className={classes.hr}/>
        </div>
      ))}
    </ul>
  );

  return (
    <Modal onClose = {props.cartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={() => props.cartHandler(true)}>Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
};

export default Cart;