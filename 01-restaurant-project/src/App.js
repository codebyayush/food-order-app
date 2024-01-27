import React, { Fragment } from 'react'
import HeaderNav from "./components/Layout/Header";
import AppSummary from './components/Layout/Summary';

function App() {
  return (
    <Fragment>
      <HeaderNav/>
      <AppSummary/>
    </Fragment>
  );    
}

export default App;