import React from 'react';
import { string, bool, object, func } from 'prop-types';
import styled from 'styled-components';

const CancelButton = ({ onClick, label, disabled, ...otherProps }) => {
  return (
    <StyledCancelButton onClick={onClick} disabled={disabled} {...otherProps}>
      {label}
    </StyledCancelButton>
  );
};

const StyledCancelButton = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 135%;
  color: ${({ theme }) => theme.ui.disabled};
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  transition: 0.15s ease-in-out;

  &:hover {
    color: ${({ theme, disabled }) =>
      disabled ? theme.ui.disabled : theme.brand.primary};
  }
`;

CancelButton.propTypes = {
  /** Text to be displayed. */
  label: string,
  disabled: bool,
  otherProps: object,
  /** Function to be ran when this button is clicked. */
  onClick: func.isRequired,
};

CancelButton.defaultProps = {
  otherProps: {},
  onClick: () => {},
};

export default CancelButton;
