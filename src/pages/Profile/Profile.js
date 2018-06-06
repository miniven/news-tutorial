import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import UserData from  '../../components/UserData/UserData';

// Actions //

import { getUserData } from '../../actions/user';

class Profile extends Component {
  componentDidMount() {
    const { id, getUserData } = this.props;
    getUserData(id);
  }

  render() {
    const { fetching, errorMessage, data } = this.props.user;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Профиль</PageTitle>

        <div className="section__block">
          <UserData isLoading={fetching} auth={data} errorMessage={errorMessage} />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  id: state.auth.data.id,
  user: state.user,
});

export default connect(mapStateToProps, { getUserData })(Profile);