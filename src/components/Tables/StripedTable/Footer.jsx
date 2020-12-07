import React from 'react';
import { string, object, node } from 'prop-types';

const Footer = ({ className, children, ...rest }) => {
  return (
    <tfoot className={className} {...rest}>
      <tr>{children}</tr>
    </tfoot>
  );
};

Footer.defaultProps = {
  rest: {},
};

Footer.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  children: node,
};

export default Footer;
