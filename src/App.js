import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, useElements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JTUs7Iwvl20JvfUcy0r6Vn9v4JTEISCTGaSM8XWCIlff7xpl3Un8uiPgSmc1zQIK4EHMIbF8SXHofNGJgo3trha003skG2OeR');

function App() {
  const[{}, dispatch] = useStateValue();

  

  useEffect(() =>{
auth.onAuthStateChanged(authUser => {
  console.log('THE USER IS >>>>', authUser);

  if(authUser){
dispatch({
  type: 'SET_USER',
  user: authUser
})
  }
  
  else{
dispatch({
  type: 'SET_USER',
  user: null
})
  }
})
  },[])
  return (
    //BEM
    <Router>
    <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
            </Route>
            <Route path="/checkout">
              <Header />
          <Checkout />
          </Route><Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
           
        </Route>
        <Route path="/">
    <Header />
       <Home/>
       </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
