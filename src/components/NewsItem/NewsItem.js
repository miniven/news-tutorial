import React from 'react';

import './NewsItem.css';

const NewsItem = ({ data }) => (
  <article className='news-item'>
    <div className='news-item__content'>
      <h1 className='news-item__title'>{data.title}</h1>
      <p className='news-item__preview'>{data.preview}</p>
    </div>
    <footer className='news-item__footer'>
      <p className='news-item__author'>{data.author}</p>
    </footer>
  </article>
);

export default NewsItem;