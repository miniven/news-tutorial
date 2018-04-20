import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item'>
        <Link className='nav__link' to='/'>На главную</Link>
      </li>
      <li className='nav__item'>
        <Link className='nav__link' to='/news'>Новости</Link>
      </li>
      <li className='nav__item'>
        <Link className='nav__link' to='/profile'>Профиль</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;