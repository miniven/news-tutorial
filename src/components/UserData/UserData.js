import React from 'react';
import errors from '../../api/errors';

// Styles //

import './UserData.css'; 

// Components //

import WithLoading from '../../hoc/WithLoading/WithLoading';



const UserData = (props) => {
  const { auth, errorMessage } = props;
  const { userData: data } = auth;

  if (errorMessage !== '') {
    return <p>{errors[errorMessage]}</p>;
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
                <a href={`https://${item.link}`} target='_blank'>{item.label}</a>
              </li>
            ))
          }
        </ul>
      </li>
    </ul>
  );
}

export default WithLoading(UserData);