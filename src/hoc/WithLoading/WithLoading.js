import React, { Component } from 'react';

import Loader from '../../components/Loader/Loader';

const WithLoading = (WrappedComponent) => {
  return class WithLoadingComponent extends Component {
    render() {
      return (
        Boolean(this.props.isLoading) ? <Loader /> : <WrappedComponent {...this.props} />
      );
    }
  };
};

export default WithLoading;