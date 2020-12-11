import React from 'react';
import { string, object, node } from 'prop-types';

const Head = ({ className, children, ...rest }) => {
  return (
    <thead className={className} {...rest}>
      <tr>{children}</tr>
    </thead>
  );
};

Head.defaultProps = {
  rest: {},
};

Head.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  children: node,
};

export default Head;
