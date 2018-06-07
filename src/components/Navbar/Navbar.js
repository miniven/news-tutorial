import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles //

import './Navbar.css';

const Navbar = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item'>
        <NavLink className='nav__link' activeClassName='nav__link--active' exact to='/'>На главную</NavLink>
      </li>
      <li className='nav__item'>
        <NavLink className='nav__link' activeClassName='nav__link--active' exact to='/news'>Новости</NavLink>
      </li>
      <li className='nav__item'>
        <NavLink className='nav__link' activeClassName='nav__link--active' exact to='/profile'>Профиль</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;