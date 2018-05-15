import React, { Component } from 'react';
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

// Actions //

import { userLoggedIn } from '../../actions/auth';

class App extends Component {
  componentWillMount() {
    const authData = JSON.parse(localStorage.getItem('auth'));

    if (authData) {
      this.props.userLoggedIn(authData);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/news' component={News} />
              <PrivateRoute path='/login' component={Login} allowed={!Boolean(this.props.auth.isLogged)} redirect='/profile' />
              <PrivateRoute path='/profile' component={Profile} allowed={Boolean(this.props.auth.isLogged)} redirect='/login' />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userLoggedIn })(App);