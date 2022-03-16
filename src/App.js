// import cardList from './card-Data'
import React from 'react'
import Card from './Card';
import "./App.css"
import { Switch, Route, Link } from "react-router-dom";
import Cartdetail from './cart-detail';

 function App() {
  return (
    <>
    <div>App</div>
    <Switch>
    <Route exact path='/' component={Card} ></Route>
    {/* <Card></Card> */}
    <Route path="/carddetail" component={Cartdetail} ></Route>

    </Switch>
  
    </>
  )
}
export default App;