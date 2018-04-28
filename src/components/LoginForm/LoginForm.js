import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginForm.css';

import WithLoading from '../../hoc/WithLoading/WithLoading';

// Actions //

import { logIn } from '../../actions/auth';

const LoadingFooter = WithLoading(() => (
  <div>
    <button className='form__submit button' type='submit'>Войти</button>
    <button className='form__submit button button--red' type='submit'>Ошибка</button>
  </div>
));

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
    this.tryLogIn();
  }

  tryLogIn = () => {
    const { logIn, history } = this.props;

    logIn(this.state.data)
      .then((data) => {
        if (data.status === 'ok') {
          this.setState({ fetching: false, errors: [] });

          history.push('/profile');
        }
      })
      .catch((data) => {
        this.setState({ fetching: false, errors: data.errors });
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
        <div className="form__footer">
          <LoadingFooter isLoading={fetching} />
        </div>
      </form>
    );
  }
};

export default connect(null, { logIn })(LoginForm);