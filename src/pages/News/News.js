import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '~/components/PageTitle/PageTitle';
import LoadingNews from '~/components/LoadingNews/LoadingNews';

// Actions //

import { getNews } from '~/actions/news';

class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { fetching, error } = this.props.news;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Новости</PageTitle>

        <LoadingNews isLoading={fetching} {...this.props} errorMessage={error} />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { getNews })(News);