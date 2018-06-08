import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles //

import './LoginForm.css';

// Components //

import WithLoading from '~/hoc/WithLoading/WithLoading';
import ErrorBox from '~/components/ErrorBox/ErrorBox';

// Actions //

import { logIn } from '../../actions/auth';

const LoadingButton = WithLoading(() => <button className='form__submit button' type='submit'>Войти</button>);

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    redirectToPrevRoute: false
  }

  onInputChange = ({ target }) => {
    this.setState({
      data: {
        ...this.state.data,
        [target.name]: target.value
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.props.auth.fetching) {
      this.tryLogIn();
    }
  }

  tryLogIn = () => {
    const { logIn } = this.props;

    logIn(this.state.data)
      .then((data) => {
        if (data.status === 'ok') {
          this.setState({ redirectToPrevRoute: true });

          return;
        }

        this.setState({
          data: {
            ...this.state.data,
            password: '',
          },
        });
      });
  }

  render() {
    const { email, password } = this.state.data;
    const { error, fetching } = this.props.auth;

    if (this.state.redirectToPrevRoute) return <Redirect to='/profile' />

    return (
      <form className={`${this.props.className ? this.props.className : ''} form`} onSubmit={this.onSubmit}>
        { error && <ErrorBox errorCode={error} /> }
        <input
          className='form__input'
          type='email'
          name='email'
          onChange={this.onInputChange}
          value={email}
          placeholder='Email'
        />
        <input
          className='form__input'
          type='password'
          name='password'
          onChange={this.onInputChange}
          value={password}
          placeholder='Пароль'
        />
        <div className="form__footer">
          <LoadingButton isLoading={fetching} />
        </div>
      </form>
    );
  }
};

LoginForm.propTypes = {
  className: PropTypes.string,
  logIn: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logIn })(LoginForm);