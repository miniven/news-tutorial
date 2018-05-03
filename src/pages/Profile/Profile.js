import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import UserData from  '../../components/UserData/UserData';

// Actions //

import { getUserData } from '../../actions/auth';

class Profile extends Component {
  state = {
    fetching: true,
    errorMessage: ''
  }

  componentDidMount() {
    const { auth, getUserData } = this.props;

    getUserData(auth.id)
      .then(response => {
        if (response.status === 'ok') {
          this.setState({
            fetching: false,
          });
        }

        if (response.status === 'err') {
          this.setState({
            fetching: false,
            errorMessage: response.message
          });
        }
      })
      .catch(err => this.setState({ fetching: false, errorMessage: 'network_error' }));
  }

  render() {
    const { auth } = this.props;
    const { fetching, errorMessage } = this.state;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Профиль</PageTitle>

        <p className='info'>Подтвердите ваш Email</p>
        <div className="section__block">
          <UserData isLoading={fetching} auth={auth} errorMessage={errorMessage} />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUserData })(Profile);