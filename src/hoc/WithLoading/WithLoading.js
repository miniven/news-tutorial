import React from 'react';

import Loader from '../../components/Loader/Loader';

const WithLoading = WrappedComponent => props => Boolean(props.isLoading) ? <Loader /> : <WrappedComponent {...props} />;

export default WithLoading;