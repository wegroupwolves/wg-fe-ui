import React from 'react';
import { string, bool, object, func } from 'prop-types';
import styled from 'styled-components';

const TertiaryButton = ({ onClick, label, disabled, ...otherProps }) => {
  return (
    <StyledTertiaryButton onClick={onClick} disabled={disabled} {...otherProps}>
      {label}
    </StyledTertiaryButton>
  );
};

const StyledTertiaryButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 135%;
  color: ${({ theme }) => theme.ui.disabled};
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  transition: 0.15s ease-in-out;
  border: 0;
  background-color: transparent;

  &:hover {
    color: ${({ theme, disabled }) =>
      disabled ? theme.ui.disabled : theme.brand.primary};
  }
`;

TertiaryButton.propTypes = {
  /** Text to be displayed. */
  label: string,
  disabled: bool,
  otherProps: object,
  /** Function to be ran when this button is clicked. */
  onClick: func.isRequired,
};

TertiaryButton.defaultProps = {
  otherProps: {},
  onClick: () => {},
};

export default TertiaryButton;
