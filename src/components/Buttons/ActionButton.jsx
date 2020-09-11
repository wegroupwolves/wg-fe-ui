import React from 'react';
import { object, bool, string, node, func } from 'prop-types';
import styled from 'styled-components';

const ActionButton = ({
  level,
  disabled,
  children,
  fullwidth,
  onClick,
  icon,
  className,
  padding,
  ...otherProps
}) => {
  const handleClick = e => {
    if (!disabled) {
      onClick(e);
      console.log(e);
    }
  };

  return (
    <StyledButton
      level={level}
      onClick={handleClick}
      fullwidth={fullwidth}
      disabled={disabled}
      padding={padding}
      className={className}
      {...otherProps}
    >
      {icon ? <Image src={icon} /> : null}

      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${props => (props.fullwidth ? '100%' : '')};
  height: 4rem;
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, disabled, level }) =>
    disabled && level === 'primary'
      ? theme.ui.disabled
      : (disabled && level === 'secondary') || level === 'secondary'
      ? 'transparent'
      : level === 'primary'
      ? theme.brand.primary
      : level === 'default'
      ? theme.ui.interactive
      : level === 'white'
      ? 'white'
      : theme.brand.primary};

  color: ${({ theme, disabled, level }) =>
    (disabled && level === 'primary') ||
    level === 'primary' ||
    level === 'default'
      ? 'white'
      : disabled && level === 'secondary'
      ? theme.ui.disabled
      : level === 'secondary'
      ? theme.brand.primary
      : level === 'white'
      ? '#222'
      : 'white'};

  border: ${({ theme, disabled, level }) =>
    (disabled && level === 'primary') ||
    level === 'primary' ||
    level === 'default'
      ? '0'
      : disabled && level === 'secondary'
      ? `2px solid ${theme.ui.disabled}`
      : level === 'secondary'
      ? `2px solid ${theme.brand.primary}`
      : '0'};

  padding: ${({ padding }) => padding || '1rem 0.4rem'};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme, level, disabled }) =>
      disabled
        ? theme.ui.disabled
        : level === 'primary'
        ? theme.brand.light
        : level === 'secondary'
        ? theme.brand.primary
        : level === 'default'
        ? theme.ui.disabled
        : ''};

    color: ${({ theme, level }) =>
      level === 'white' ? theme.brand.primary : 'white'};
  }
`;

const Image = styled.img`
  margin-right: 1rem;
  height: 2rem;
`;

ActionButton.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
  icon: null,
  onClick: () => {
    console.log('clicked button');
  },
  otherProps: {},
};

ActionButton.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  disabled: bool,
  /** The color theme */
  level: string,
  /** The label of the button */
  children: node.isRequired,
  /** If true button width is 100% */
  fullwidth: bool,
  /** Triggered when button is clicked */
  onClick: func.isRequired,
  padding: string,
  /** Adds icon to button */
  icon: node,
  /** Adds extra props to the element */
  otherProps: object,
};

export default ActionButton;
