import React, { Fragment } from 'react'
import HeaderNav from "./components/Layout/Header";
import AppSummary from './components/Layout/Summary';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  return (
    <Fragment>
      <HeaderNav/>
      <AppSummary/>
      <AvailableMeals/>
    </Fragment>
  );    
}

export default App;