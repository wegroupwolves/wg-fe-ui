import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const Label = ({ children }) => {
  return (
    <StyledLabel>
      <p>{children}</p>
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  padding: 0.5rem 1rem;
  min-width: 7.5rem;
  background-color: #f0f1f3;
  border-radius: 999px;

  p {
    font-family: ${({ theme }) => theme.font};
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;
    color: #8990a3;
  }
`;

Label.propTypes = {
  /** Content of the label */
  children: node.isRequired,
};

export default Label;
