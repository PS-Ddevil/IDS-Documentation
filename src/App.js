import React from 'react';
import Sidebar from './components/sidebar';
import Schema from './components/Schema';
import Overview from './components/Overview';
import Landing from './components/Landing';
import CustReg from './components/CustReg';
import CustLogin from './components/CustLogin';
import CustLogout from './components/CustLogout';
import SellerLogout from './components/SellerLogout';
import SellerReg from './components/SellerReg';
import SellerLogin from './components/SellerLogin';
import AddtoCart from './components/AddtoCart';
import Checkout from './components/Checkout';
import Dashboard from './components/Dash';
import Invoice from './components/Invoice';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/overview/" component={Overview} />
        <Route path="/about/" component={Schema} />
        <Route path="/customer/reg/" component={CustReg} />
        <Route path="/customer/login/" component={CustLogin} />
        <Route path="/customer/logout/" component={CustLogout} />
        <Route path="/customer/addtocart/" component={AddtoCart} />
        <Route path="/customer/Checkout/" component={Checkout} />
        <Route path="/customer/dash/" component={Dashboard} />
        <Route path="/customer/Invoice/" component={Invoice} />
        <Route path="/seller/reg/" component={SellerReg} />
        <Route path="/seller/login/" component={SellerLogin} />
        <Route path="/seller/logout/" component={SellerLogout} />
      </Router>
    </div>
  );
}

export default App;
