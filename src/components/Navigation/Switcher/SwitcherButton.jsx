import React from 'react';
import { node, string, bool, object, func } from 'prop-types';
import styled from 'styled-components';

const SwitcherButton = ({
  children,
  active,
  onClick,
  className,
  ...otherProps
}) => {
  return (
    <StyledSwitcherButton
      active={active}
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledSwitcherButton>
  );
};

const StyledSwitcherButton = styled.div`
  padding: 1.8rem 2.4rem;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ active }) => (active ? '500' : '400')};
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: ${({ theme, active }) => (active ? theme.brand.primary : '#d5d5d5')};
  cursor: pointer;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.brand.primary};
  }
`;

SwitcherButton.propTypes = {
  /** Content to be displayed inside the button. */
  children: node.isRequired,
  /** Pass this bool to set the button to active. */
  active: bool,
  /** Function to be ran when the button is clicked. */
  onClick: func.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default SwitcherButton;
