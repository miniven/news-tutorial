import React, { Component } from 'react';
import { connect } from 'react-redux';
import errors from '../../api/errors';

import './LoginForm.css';

import WithLoading from '../../hoc/WithLoading/WithLoading';

// Actions //

import { logIn } from '../../actions/auth';

const LoadingFooter = WithLoading(() => <button className='form__submit button' type='submit'>Войти</button>);

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    fetching: false,
    errorMessage: '',
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
          this.setState({ fetching: false, errorMessage: '' });

          history.push('/profile');
        }

        if (data.status === 'err') {
          this.setState({ fetching: false, errorMessage: data.message });
        }
      })
      .catch(err => this.setState({ fetching: false, errorMessage: 'network_error' }));
  }

  render() {
    const { email, password } = this.state.data;
    const { errorMessage, fetching } = this.state;

    return (
      <form className={`${this.props.className} form`} onSubmit={this.onSubmit}>
        {
          errorMessage !== '' && (
            <div className='form__errors'>
              <p className='form__errors-item'>{errors[errorMessage]}</p>
            </div>
          )
        }
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
          <LoadingFooter isLoading={fetching} />
        </div>
      </form>
    );
  }
};

export default connect(null, { logIn })(LoginForm);