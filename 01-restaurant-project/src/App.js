import React, { Fragment, useState } from 'react'
import HeaderNav from "./components/Layout/Header";
import AppSummary from './components/Layout/Summary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartTrigger, setCartTrigger] = useState(false);

  const cartTriggerHandler = (bool) => {
      if(bool === false){
        setCartTrigger(true)
      }
      else{
        setCartTrigger(false)
      }
  }

  return (
    <Fragment> 
            <HeaderNav cartHandler = {cartTriggerHandler}/>
            <AppSummary/>
            <AvailableMeals/>
            {cartTrigger && <Cart cartHandler = {cartTriggerHandler}/>}
    </Fragment>
  );    
}

export default App;