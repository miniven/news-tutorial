import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Header.css';

// Components //

import Navbar from '../Navbar/Navbar';

// Actions

import { logOut } from '../../actions/auth';

class Header extends Component {
  logOut = () => {
    this.props.logOut();
  }

  render() {
    return (
      <header className='header'>
        <div className='container'>
          <div className="header__inner">
            <Navbar />
            {
              Boolean(this.props.auth.isLogged) && <button className='button' onClick={this.logOut}>Выйти</button>
            }
          </div>
        </div>
      </header>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logOut })(Header));