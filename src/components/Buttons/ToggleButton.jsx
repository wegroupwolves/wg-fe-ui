import React from 'react';
import { bool, string, node, func, object } from 'prop-types';
import styled from 'styled-components';

const ToggleButton = ({
  level,
  disabled,
  children,
  fullwidth,
  onClick,
  icon,
  className,
  ...otherProps
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <StyledButton
      level={level}
      onClick={() => handleClick()}
      fullwidth={fullwidth}
      disabled={disabled}
      className={className}
      {...otherProps}
    >
      {icon ? <Image src={icon} /> : null}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts};
  background-color: ${({ disabled, level, theme }) =>
    disabled
      ? theme.ui.disabled
      : level === 'active'
      ? theme.brand.secondary
      : theme.ui.interactive};
  font-weight: 700;
  font-size: 1.6rem;
  border-radius: 2.5rem;
  min-width: 12rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '')};
  height: 3.5rem;
  color: white;
  border: 0;
  padding: 0 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :active {
    transform: scale(0.95);
  }

  :hover {
    background-color: ${({ theme, level }) =>
      level === 'active' ? '' : theme.hover.primary};
  }
`;

const Image = styled.img`
  margin-right: 0.8rem;
  height: 1.8rem;
`;

ToggleButton.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
  icon: null,
  otherProps: {},
};

ToggleButton.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  disabled: bool,
  /** The level of the button */
  level: string,
  /** The label of the button */
  children: node.isRequired,
  /** If true button width is 100% */
  fullwidth: bool,
  /** Triggered when button is clicked */
  onClick: func.isRequired,
  /** Adds icon to button */
  icon: node,
  /** Adds extra props to the element */
  otherProps: object,
};

export default ToggleButton;
