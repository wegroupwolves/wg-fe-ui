import React from 'react';
import { string, object, node } from 'prop-types';

const Footer = ({ className, children, ...otherProps }) => {
  return (
    <tfoot className={className} {...otherProps}>
      <tr>{children}</tr>
    </tfoot>
  );
};

Footer.defaultProps = {
  otherProps: {},
};

Footer.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default Footer;
