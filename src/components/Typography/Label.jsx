import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';

const Label = ({ className, children, color, ...otherProps }) => {
  return (
    <P color={color} className={className} {...otherProps}>
      {children}
    </P>
  );
};

const P = styled.p`
  font-family: ${({ theme }) => theme.fonts};
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 130%;
  color: ${({ theme, color }) => (color ? color : theme.ui.interactive)};
`;

Label.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
};

export default Label;
