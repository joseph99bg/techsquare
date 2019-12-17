import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, to }) {
    return <ReactRouterDomLink to={to}>{children}</ReactRouterDomLink>;
};

export default Link;