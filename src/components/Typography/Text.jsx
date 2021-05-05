import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';

const Text = ({ className, children, color, ...otherProps }) => {
  return (
    <P color={color} className={className} {...otherProps}>
      {children}
    </P>
  );
};

const P = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 120%;
  color: ${({ color, theme }) => (color ? color : theme.typo.title)};
`;

Text.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
};

export default Text;
