import React from 'react';

import './Header.css';

// Components //

import Navbar from '../Navbar/Navbar';

const Header = () => (
  <header className='header'>
    <div className='container'>
      <Navbar />
    </div>
  </header>
);

export default Header;