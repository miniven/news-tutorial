import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import UserData from  '../../components/UserData/UserData';

// Actions //

import { getUserData } from '../../actions/auth';

class Profile extends Component {
  componentDidMount() {
    const { auth, getUserData } = this.props;

    getUserData(auth.id);
  }

  render() {
    const { userData } = this.props.auth;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Профиль</PageTitle>

        <p className='info'>Подтвердите ваш Email</p>
        <div className="section__block">
          <UserData isLoading={!Boolean(userData)} data={userData} />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUserData })(Profile);