import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles //

import './Header.css';

// Components //

import Navbar from '~/components/Navbar/Navbar';

// Actions

import { logOut } from '~/actions/auth';

const Header = ({ auth, logOut }) => (
  <header className='header'>
    <div className='container'>
      <div className="header__inner">
        <div className="header__box header__box--scrollable">
          <Navbar />
        </div>
        <div className="header__box">
          {
            Boolean(auth.isLogged) ? (
              <button className='header__button button' onClick={logOut}>Выйти</button>
            ) : (
              <NavLink className='header__button button' exact to='/login'>Войти</NavLink>
            )
          }
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isLogged: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logOut })(Header));