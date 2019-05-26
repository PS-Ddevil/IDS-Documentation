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
          <a className="menu-item sub-menu" href="/customer/logout">
            Add to Cart
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/logout">
            Checkout
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/logout">
            Dashboard
          </a>
        </li>
        <li> 
          <a className="menu-item sub-menu" href="/customer/logout">
            Payment Invoice
          </a>
        </li>
      </ul>

      <a className="menu-item" href="/angular">
        Seller
      </a>

    </Menu>
  );
};