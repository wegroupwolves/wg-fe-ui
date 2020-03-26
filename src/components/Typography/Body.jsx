import React from 'react';
import { node, bool } from 'prop-types';
import styled from 'styled-components';

const Body = ({ children, bold, italic, light }) => {
  return (
    <StyledBody bold={bold} italic={italic} light={light}>
      {children}
    </StyledBody>
  );
};

const StyledBody = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, light }) => (light ? '#8990a3' : theme.font.text)};

  font-size: 1.6rem;
  line-height: 2rem;
`;

Body.propTypes = {
  children: node.isRequired,
  /** Pass this prop if the text inside should be bold. */
  bold: bool,
  /** Pass this prop if the text inside should be italic. */
  italic: bool,
  /** Pass this prop to make the text lighter. */
  light: bool,
};

export default Body;
