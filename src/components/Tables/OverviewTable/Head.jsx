import React from 'react';
import { string, object, node } from 'prop-types';

const Head = ({ className, children, ...otherProps }) => {
  return (
    <thead className={className} {...otherProps}>
      <tr>{children}</tr>
    </thead>
  );
};

Head.defaultProps = {
  otherProps: {}
}

Head.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default Head;
