import React from 'react';
import { node, bool, string, object } from 'prop-types';
import styled from 'styled-components';

const Body = ({
  children,
  bold,
  italic,
  light,
  smaller,
  tiny,
  className,
  ...otherProps
}) => {
  return (
    <StyledBody
      bold={bold}
      italic={italic}
      light={light}
      smaller={smaller}
      tiny={tiny}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledBody>
  );
};

const StyledBody = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? '500' : 'normal')};
  color: ${({ theme, light }) => (light ? '#8990a3' : theme.font.text)};
  font-size: ${({ smaller, tiny }) =>
    smaller ? '1.4rem' : tiny ? '1.2rem' : '1.6rem'};
  line-height: ${({ smaller, tiny }) =>
    smaller ? '1.6rem' : tiny ? '1.5rem' : '2rem'};

  > a {
    color: ${({ theme }) => theme.brand.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

Body.propTypes = {
  children: node.isRequired,
  /** Pass this prop if the text inside should be bold. */
  bold: bool,
  /** Pass this prop if the text inside should be italic. */
  italic: bool,
  /** Pass this prop to make the text lighter. */
  light: bool,
  /** Pass this prop to reduce the font size to approx. 14px */
  smaller: bool,
  /** Pass this prop to reduce the font size to approx. 12px  */
  tiny: bool,
  className: string,
  otherProps: object,
};

export default Body;
