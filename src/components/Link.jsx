import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ className, to, children, forwardRef, ...otherProps }) => {
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
    return <ReactLink innerRef={forwardRef} className={className} to={toLocation.pathname} {...otherProps}>{children}</ReactLink>;
  } else {
    return <a ref={forwardRef} className={className} href={to} target="_blank" {...otherProps}>{children}</a>;
  }
};

export default Link;
