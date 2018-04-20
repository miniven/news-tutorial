import React from 'react';

import './PageTitle.css';

const PageTitle = props => (
  <h1 className={`${props.className} title`}>{props.children}</h1>
);

export default PageTitle;