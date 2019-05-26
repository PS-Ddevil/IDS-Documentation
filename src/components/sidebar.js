import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu isOpen={true} disableCloseOnEsc disableOverlayClick noOverlay>
      <a className="menu-item" href="/">
        Home
      </a>
      <span>
        Customer
      </span>
      <ul className="list-section">
        <li>
          <a className="menu-item sub-menu" href="/customer/reg">
            Registeration
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/login">
            Login
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/logout">
            Logout
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/addtocart">
            Add to Cart
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/checkout">
            Checkout
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/dash">
            Dashboard
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/invoice">
            Payment Invoice
          </a>
        </li>
      </ul>

      <span>
        Seller
      </span>
      <ul className="list-section">
        <li>
          <a className="menu-item sub-menu" href="/seller/reg">
            Registeration
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/seller/login">
            Login
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/seller/logout">
            Logout
          </a>
        </li>
      </ul>

    </Menu>
  );
};