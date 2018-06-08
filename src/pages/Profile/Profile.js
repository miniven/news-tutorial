import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components //

import PageTitle from '~/components/PageTitle/PageTitle';
import UserData from  '~/components/UserData/UserData';

// Actions //

import { getUserData } from '~/actions/user';

// Selectors //

import { getSortedSocial } from '~/reducers/userReducer';

class Profile extends Component {
  componentDidMount() {
    const { id, getUserData } = this.props;
    getUserData(id);
  }

  render() {
    const { user, social } = this.props;
    const { fetching, error, data } = user;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Профиль</PageTitle>

        <div className="section__block">
          <UserData isLoading={fetching} data={data} social={social} errorMessage={error} />
        </div>
      </section>
    );
  }
};

Profile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    data: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = state => ({
  id: state.auth.data.id,
  user: state.user,
  social: getSortedSocial(state.user.data.social),
});

export default connect(mapStateToProps, { getUserData })(Profile);