import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';

const BorderedTitle = ({ className, children, color, ...otherProps }) => {
  return (
    <Title color={color} className={className} {...otherProps}>
      {children}
    </Title>
  );
};

const Title = styled.h1`
  padding-bottom: 12px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 12px;

  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 120%;

  color: ${({ color }) => color};
`;

BorderedTitle.propTypes = {
  className: string,
  children: node.isRequired,
  color: string,
  otherProps: object,
};

BorderedTitle.defaultProps = {
  color: '#050505',
  otherProps: {},
};

export default BorderedTitle;
