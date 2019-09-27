import React from 'react';
import styled from 'styled-components';
import { node, string, object } from 'prop-types';
import { key } from 'styled-theme/dist';

const Key = ({ className, otherProps, children }) => {
  return (
    <StyledKey {...otherProps} className={className}>
      {children}
    </StyledKey>
  );
};

const StyledKey = styled.th`
  color: ${key('colors.title')};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

Key.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
  /** Key text */
  children: node.isRequired,
};

export default Key;
