import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages //

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News';
import Profile from '../../pages/Profile/Profile';

// Components //

import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = props => (
  <Router>
    <div>
      <Header />
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={News} />
        <PrivateRoute path='/profile' component={Profile} authed={props.auth.username} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);