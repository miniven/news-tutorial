import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
};

News.propTypes = {
  getNews: PropTypes.func.isRequired,
  news: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { getNews })(News);