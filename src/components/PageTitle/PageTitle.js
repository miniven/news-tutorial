import React from 'react';
import PropTypes from 'prop-types';

// Styles //

import './PageTitle.css';

const PageTitle = ({ className, children }) => (
  <h1 className={`${className ? className : ''} title`}>{children}</h1>
);

PageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default PageTitle;