import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import './Navbar.css';

// Actions

import { logOut } from '../../actions/auth';

class Navbar extends Component {
  logOut = () => {
    this.props.logOut();
  }

  render() {
    return (
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
          {
            this.props.auth.username && (
              <li className='nav__item nav__item--last'>
                <button className='button' onClick={this.logOut}>Выйти</button>
              </li>
            )
          }
        </ul>
      </nav>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logOut })(Navbar));