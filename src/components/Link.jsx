import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ className, to, children, ...otherProps }) => {
  const parseTo = to => {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  };

  const isInternalCheck = toLocation  => {
    return window.location.host === toLocation.host;
  };

  const toLocation = parseTo(to);
  const isInternal = isInternalCheck(toLocation);

  if (isInternal) {
    return <ReactLink className={className} to={toLocation.pathname} {...otherProps}>{children}</ReactLink>;
  } else {
    return <a className={className} href={to} target="_blank" {...otherProps}>{children}</a>;
  }
};

export default Link;
