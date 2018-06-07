import React from 'react';
import PropTypes from 'prop-types';
import errors from '~/api/errors';

// Components

import NewsItem from '~/components/NewsItem/NewsItem';
import WithTemplate from '~/hoc/WithTemplate/WithTemplate';

const LoadingNews = ({ errorMessage, news }) => (
  <div className='row center-xs'>
    <div className='col-xs-12 col-md-8'>
      {
        errorMessage && (
          <div className='errors-box'>
            <p className='errors-box__item'>{errors[errorMessage]}</p>
          </div>
        )
      }
      {
        news.data.map(item => <NewsItem key={item.id} data={item} />)
      }
      { !errorMessage && <p>Всего новостей: {news.data.length}</p> }
    </div>
  </div>
);

LoadingNews.propTypes = {
  errorMessage: PropTypes.string,
  news: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
  }).isRequired,
};

export default WithTemplate(LoadingNews);