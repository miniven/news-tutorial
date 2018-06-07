import React from 'react';
import PropTypes from 'prop-types';
import errors from '~/api/errors';

// Styles

import './ErrorBox.css';

const ErrorBox = props => (
  <div className='errors-box'>
    <p className='errors-box__item'>{errors[props.errorCode]}</p>
  </div>
);

ErrorBox.propTypes = {
  errorCode: PropTypes.string.isRequired,
};

export default ErrorBox;