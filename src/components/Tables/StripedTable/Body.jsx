import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const Body = ({ className, children, ...rest }) => {
  return (
    <Tbody className={className} {...rest}>
      {children}
    </Tbody>
  );
};

const Tbody = styled.tbody`
  vertical-align: middle;
`;

Body.defaultProps = {
  rest: {},
};

Body.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  rest: object,
  children: node,
};

export default Body;
