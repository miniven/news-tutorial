import React, { Component } from 'react';

import './Header.css';

// Components //

import Navbar from '../Navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='container'>
          <Navbar />
        </div>
      </header>
    );
  }
};

export default Header;