import React from 'react';
import { arrayOf, bool, string, node, func, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const ToggleActionButton = ({
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
  font-family: ${key('fonts.primary')};
  background-color: ${props =>
    props.disabled
      ? key('colors.disabled')
      : props.level === 'active'
      ? key('colors.toggle')
      : key('colors.interactive')};
  font-weight: 900;
  font-size: ${key('fonts.normal-size')};
  border-radius: 2.5rem;
  min-width: 12rem;
  width: ${props => (props.fullwidth ? '100%' : '')};
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
    background-color: ${props =>
      props.level === 'active' ? '' : key('colors.hover')};
  }
`;

const Image = styled.img`
  margin-right: 0.8rem;
  height: 1.8rem;
`;

ToggleActionButton.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
  icon: null,
  otherProps: [],
};

ToggleActionButton.propTypes = {
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
  otherProps: arrayOf(object).isRequired,
};

export default ToggleActionButton;
