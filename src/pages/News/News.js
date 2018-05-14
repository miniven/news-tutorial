import React, { Component } from 'react';
import { connect } from 'react-redux';
import errors from '../../api/errors';

// Components //

import PageTitle from '../../components/PageTitle/PageTitle';
import NewsItem from '../../components/NewsItem/NewsItem';
import WithLoading from '../../hoc/WithLoading/WithLoading';

// Actions //

import { getNews } from '../../actions/news';

const LoadingNews = WithLoading(props => (
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
));

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