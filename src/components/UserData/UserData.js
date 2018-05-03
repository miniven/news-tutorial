import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles //

import './UserData.css'; 

// Actions //

import { getUserData } from '../../actions/auth';

class UserData extends Component {
  componentDidMount() {
    const { auth, getUserData } = this.props;

    getUserData(auth.id);
  }

  render() {
    const { className, auth } = this.props;
    const { userData } = auth;

    if (!userData) return <p>Wait…</p>;

    return (
      <ul className={`${className} list`}>
        <li className='list__item'>
          <p className='list__caption'>Город:</p>
          {userData.city}
        </li>
        <li className='list__item'>
          <p className='list__caption'>Знание языков:</p>
          <ul className='list__sublist list'>
            { userData.languages.map(lang => <li className='list__item'>{lang}</li>) }
          </ul>
        </li>
        <li className='list__item'>
          <p className='list__caption'>Ссылки:</p>
          <ul className='list__sublist list'>
            {
              userData.social.map(item => (
                <li className='list__item'>
                  <a href={`https://${item.link}`} target='_blank'>{item.label}</a>
                </li>
              ))
            }
          </ul>
        </li>
      </ul>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getUserData })(UserData);