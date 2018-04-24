import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginForm.css';

// Actions //

import { logIn } from '../../actions/auth';

class LoginForm extends Component {
  state = {
    data: {
      username: '',
      password: ''
    },
    fetching: false,
    errors: []
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

    this.props.logIn(this.state.data)
      .then((response) => {
        if (response.status === 'OK') {
          this.setState({
            fetching: false,
            errors: []
          });
          this.props.history.push('/profile');
        }
      })
      .catch((response) => {
        this.setState({
          fetching: false,
          errors: response.errors
        });
      });
  }

  render() {
    const { username, password } = this.state.data;
    const { errors, fetching } = this.state;

    return (
      <form className={`${this.props.className} form`} onSubmit={this.onSubmit}>
        {
          errors.length > 0 && (
            <div className='form__errors'>
              {errors.map((err, index) => <p className='form__errors-item' key={index}>{err}</p>)}
            </div>
          )
        }
        <input
          className='form__input'
          type='text'
          name='username'
          onChange={this.onInputChange}
          value={username}
          placeholder='Логин'
        />
        <input
          className='form__input'
          type='password'
          name='password'
          onChange={this.onInputChange}
          value={password}
          placeholder='Пароль'
        />
        <button className='form__submit button' disabled={fetching} type='submit'>Войти</button>
      </form>
    );
  }
};

export default connect(null, { logIn })(LoginForm);