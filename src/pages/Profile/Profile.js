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
    console.log('getting data');
    getUserData(auth.data.id)
  }

  render() {
    const { fetching, errorMessage, data } = this.props.auth;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Профиль</PageTitle>

        <div className="section__block">
          { console.log(fetching) }
          <UserData isLoading={fetching} auth={data} errorMessage={errorMessage} />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUserData })(Profile);