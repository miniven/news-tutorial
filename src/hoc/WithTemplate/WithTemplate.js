import React from 'react';

import Template from '~/components/Template/Template';

const WithTemplate = WrappedComponent => props => Boolean(props.isLoading) ? <Template /> : <WrappedComponent {...props} />;

export default WithTemplate;