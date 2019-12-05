import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';

const TextBold = ({ className, children, color, ...otherProps }) => {
  return (
    <P color={color} className={className} {...otherProps}>
      {children}
    </P>
  );
};

const P = styled.p`
  font-family: ${({ theme }) => theme.fonts};
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 130%;
  color: ${({ color, theme }) => (color ? color : theme.typo.title)};
`;

TextBold.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
};

export default TextBold;
