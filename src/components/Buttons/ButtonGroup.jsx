import React from 'react';
import styled from 'styled-components';
import { node, bool, string, object } from 'prop-types';

const ButtonGroup = ({ children, background, className, ...otherProps }) => {
  return (
    <StyledButtonGroup
      background={background}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledButtonGroup>
  );
};

const StyledButtonGroup = styled.div`
  display: flex;
  width: 100%;
  padding: 0.8rem;
  background-color: #f0f1f3;
  border-radius: 0.5rem;
  flex-flow: column;

  > * {
    margin-bottom: 0.8rem;

    /* Disabled to ensure equal spacing between children */
    /* stylelint-disable-next-line selector-max-universal */
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

ButtonGroup.propTypes = {
  children: node.isRequired,
  background: bool,
  className: string,
  otherProps: object,
};

export default ButtonGroup;
