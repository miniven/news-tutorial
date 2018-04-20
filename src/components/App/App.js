import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages //

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News';
import Profile from '../../pages/Profile/Profile';

// Components //

import Header from '../Header/Header';

const App = () => (
  <Router>
    <div>
      <Header />

      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={News} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  </Router>
);

export default App;