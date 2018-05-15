import React from 'react';
import errors from '../../api/errors';

// Styles

import './ErrorBox.css';

const ErrorBox = props => (
  <div className='errors-box'>
    <p className='errors-box__item'>{errors[props.errorCode]}</p>
  </div>
);

export default ErrorBox;