import React, { Component } from 'react';

const LoaderHOC = (isLoading) => (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return (
        Boolean(isLoading) ? <p>Погоди-ка...<p> : <WrappedComponent {this.props} />
      );
    }
  };
};

export default LoaderHOC;