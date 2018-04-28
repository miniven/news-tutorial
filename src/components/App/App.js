import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages //

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';

// Components //

import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const App = props => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <PrivateRoute path='/login' component={Login} allowed={!Boolean(props.auth.userId)} redirect='/profile' />
          <PrivateRoute path='/profile' component={Profile} allowed={Boolean(props.auth.userId)} redirect='/login' />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);