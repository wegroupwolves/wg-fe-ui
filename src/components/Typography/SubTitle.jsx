import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';

const SubTitle = ({ className, children, color, ...otherProps }) => {
  return (
    <H2 color={color} className={className} {...otherProps}>
      {children}
    </H2>
  );
};

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 130%;
  color: ${({ color, theme }) => (color ? color : theme.typo.title)};
`;

SubTitle.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
};

export default SubTitle;
