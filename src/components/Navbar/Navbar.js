import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

// TODO: Должна быть активной только одна ссылка. Пока не получилось

const Navbar = props => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item'>
        <NavLink className='nav__link' to='/'>На главную</NavLink>
      </li>
      <li className='nav__item'>
        <NavLink className='nav__link' to='/news'>Новости</NavLink>
      </li>
      <li className='nav__item'>
        <NavLink className='nav__link' to='/profile'>Профиль</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;