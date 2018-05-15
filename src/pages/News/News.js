import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import LoadingNews from '../../components/LoadingNews/LoadingNews';

// Actions //

import { getNews } from '../../actions/news';

class News extends Component {
  state = {
    fetching: true,
    errorMessage: ''
  }

  componentDidMount() {
    this.props.getNews()
      .then(response => {
        if (response.status === 'ok') {
          this.setState({ fetching: false, errorMessage: '' });
        }
      })
      .catch(err => this.setState({ fetching: false, errorMessage: 'network_error' }));
  }

  render() {
    const { fetching, errorMessage } = this.state;

    return (
      <section className='section'>
        <PageTitle className='section__title'>Новости</PageTitle>

        <LoadingNews isLoading={fetching} {...this.props} errorMessage={errorMessage} />
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

export default connect(mapStateToProps, { getNews })(News);