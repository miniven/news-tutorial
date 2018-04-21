import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import NewsItem from '../../components/NewsItem/NewsItem';

class News extends Component {
  render() {
    return (
      <section className='section'>
        <PageTitle className='section__title'>Новости</PageTitle>

        <div className='row center-xs'>
          <div className='col-xs-12 col-md-8'>
            {
              this.props.news.map(item => <NewsItem key={item.id} data={item} author={this.props.authors[item.id]} />)
            }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    authors: state.authors
  };
};

export default connect(mapStateToProps, null)(News);