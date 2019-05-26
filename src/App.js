import React from 'react';
import Sidebar from './components/sidebar';
import Schema from './components/Schema';
import Overview from './components/Overview';
import Landing from './components/Landing';
import CustReg from './components/CustReg';
import CustLogin from './components/CustLogin';
import CustLogout from './components/CustLogout.js';
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
      </Router>
    </div>
  );
}

export default App;
