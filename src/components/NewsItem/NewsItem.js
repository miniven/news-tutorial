import React from 'react';
import PropTypes from 'prop-types';

// Styles //

import './NewsItem.css';

const NewsItem = ({ data }) => (
  <article className='news-item'>
    <div className='news-item__content'>
      <h1 className='news-item__title'>{data.title}</h1>
      <p className='news-item__preview'>{data.text}</p>
    </div>
  </article>
);

NewsItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsItem;