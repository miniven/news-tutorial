import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Styles //

import './LoginForm.css';

// Components //

import WithLoading from '../../hoc/WithLoading/WithLoading';
import ErrorBox from '../ErrorBox/ErrorBox';

// Actions //

import { logIn } from '../../actions/auth';

const LoadingButton = WithLoading(() => <button className='form__submit button' type='submit'>Войти</button>);

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    fetching: false,
    errorMessage: '',
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

    this.setState({ fetching: true });
    this.tryLogIn();
  }

  tryLogIn = () => {
    const { logIn } = this.props;

    logIn(this.state.data)
      .then((data) => {
        if (data.status === 'ok') {
          this.setState({
            fetching: false,
            errorMessage: '',
            redirectToPrevRoute: true
          });
        }

        if (data.status === 'err') {
          this.setState({ fetching: false, errorMessage: data.message });
        }
      })
      .catch(err => this.setState({ fetching: false, errorMessage: 'network_error' }));
  }

  render() {
    const { email, password } = this.state.data;
    const { errorMessage, fetching, redirectToPrevRoute } = this.state;

    if (redirectToPrevRoute) return <Redirect to='/profile' />

    return (
      <form className={`${this.props.className} form`} onSubmit={this.onSubmit}>
        { errorMessage !== '' && <ErrorBox errorCode={errorMessage} /> }
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

export default connect(null, { logIn })(LoginForm);