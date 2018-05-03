import React from 'react';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import UserData from  '../../components/UserData/UserData';

const Profile = () => (
  <section className='section'>
    <PageTitle className='section__title'>Профиль</PageTitle>

    <p className='info'>Подтвердите ваш Email</p>
    <UserData className='section__block section__block--white' />
  </section>
);

export default Profile;