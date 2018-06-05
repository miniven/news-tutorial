import React from 'react';
import errors from '../../api/errors';

// Components

import NewsItem from '../NewsItem/NewsItem';
import WithTemplate from '../../hoc/WithTemplate/WithTemplate';

const LoadingNews = props => (
  <div className='row center-xs'>
    <div className='col-xs-12 col-md-8'>
      {
        props.errorMessage !== '' && (
          <div className='errors-box'>
            <p className='errors-box__item'>{errors[props.errorMessage]}</p>
          </div>
        )
      }
      {
        props.news.map(item => <NewsItem key={item.id} data={item} />)
      }
      { props.errorMessage === '' && <p>Всего новостей: {props.news.length}</p> }
    </div>
  </div>
);

export default WithTemplate(LoadingNews);