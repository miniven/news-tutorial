import React from 'react';

// Styles //

import './UserData.css'; 

// Components //

import WithLoading from '../../hoc/WithLoading/WithLoading';
import ErrorBox from '../ErrorBox/ErrorBox';

const UserData = (props) => {
  const { auth: data, errorMessage } = props;

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
            data.social.map(item => (
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
}

export default WithLoading(UserData);