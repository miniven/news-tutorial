import React, { Component } from 'react';

// Components //

import PageTitle from '~/components/PageTitle/PageTitle';
import LoginForm from '~/components/LoginForm/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <section className='section'>
        <PageTitle className='section__title'>Login Page</PageTitle>
        <div className='row center-xs'>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <LoginForm className='section__form' />
          </div>
        </div>
      </section>
    );
  }
};