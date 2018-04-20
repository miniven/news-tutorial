import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {
  state = {
    data: {
      username: '',
      password: ''
    }
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

    console.log(this.state.data);
  }

  render() {
    const { username, password } = this.state.data;

    return (
      <form className={`${this.props.className} form`} onSubmit={this.onSubmit}>
        <input
          className='form__input'
          type='text'
          name='username'
          onChange={this.onInputChange}
          value={username}
        />
        <input
          className='form__input'
          type='password'
          name='password'
          onChange={this.onInputChange}
          value={password}
        />
        <button className='form__submit' type='submit'>Войти</button>
      </form>
    );
  }
};

export default LoginForm;