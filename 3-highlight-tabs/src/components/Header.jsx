import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

function Header() {
  return (
    <div className='tabs'>
      <Tab>
        <NavLink exact to='/' activeClassName='is-active'>
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/about' activeClassName='is-active'>
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/contact' activeClassName='is-active'>
          Contact
        </NavLink>
      </Tab>
    </div>
  );
}

export default Header;
