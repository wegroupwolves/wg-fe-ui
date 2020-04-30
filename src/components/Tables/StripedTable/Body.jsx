import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const Body = ({ className, children, ...otherProps }) => {
  return (
    <Tbody className={className} {...otherProps}>
      {children}
    </Tbody>
  );
};

const Tbody = styled.tbody`
  vertical-align: middle;
`;

Body.defaultProps = {
  otherProps: {},
};

Body.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default Body;
