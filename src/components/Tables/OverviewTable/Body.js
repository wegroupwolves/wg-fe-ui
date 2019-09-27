import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const Body = ({ className, otherProps, children }) => {
  return (
    <Tbody className={className} {...otherProps}>
      {children}
    </Tbody>
  );
};

const Tbody = styled.tbody`
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
`;

Body.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

export default Body;
