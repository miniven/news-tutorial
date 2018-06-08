import React from 'react';
import PropTypes from 'prop-types';

// Styles //

import './UserData.css'; 

// Components //

import WithLoading from '~/hoc/WithLoading/WithLoading';
import ErrorBox from '~/components/ErrorBox/ErrorBox';

const UserData = ({ data, social, errorMessage }) => {
  if (errorMessage) {
    return <ErrorBox errorCode={errorMessage} />;
  }

  return (
    <ul className='list'>
      <li className='list__item'>
        <p className='list__caption'>Город:</p>
        {data.city}
      </li>
      <li className='list__item'>
        <p className='list__caption'>Знание языков:</p>
        <ul className='list__sublist list'>
          { data.languages.map(lang => <li className='list__item' key={lang}>{lang}</li>) }
        </ul>
      </li>
      <li className='list__item'>
        <p className='list__caption'>Ссылки:</p>
        <ul className='list__sublist list'>
          {
            social.map(item => (
              <li className='list__item' key={item.link}>
                <a className='list__link' href={item.link} target='_blank'>
                  <i className={`list__link-icon list__link-icon--${item.label}`}></i>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
      </li>
    </ul>
  );
};

UserData.propTypes = {
  errorMessage: PropTypes.string,
  auth: PropTypes.shape({
    city: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  social: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WithLoading(UserData);