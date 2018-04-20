import React from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import NewsItem from '../../components/NewsItem/NewsItem';

const News = props => (
  <section className='section'>
    <PageTitle className='section__title'>Новости</PageTitle>

    <div className='row center-xs'>
      <div className='col-xs-12 col-md-8'>
        {
          props.news.map(item => <NewsItem key={item.id} data={item} />)
        }
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

export default connect(mapStateToProps, null)(News);