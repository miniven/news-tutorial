import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, allowed, redirect, ...rest}) => (
  <Route
    {...rest}
    render={
      props => Boolean(allowed)
        ? <Component {...props} />
        : <Redirect to={{pathname: redirect, state: {from: props.location}}} />
      }
  />
);

export default PrivateRoute;