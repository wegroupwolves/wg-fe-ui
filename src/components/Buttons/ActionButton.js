import React from 'react';
import { bool, string, node, func, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const ActionButton = ({
  level,
  disabled,
  children,
  fullwidth,
  onClick,
  icon,
  otherProps,
  className,
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
      : props.level === 'primary'
      ? key('colors.action')
      : key('colors.interactive')};
  font-weight: 900;
  font-size: ${key('fonts.normal-size')};
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${props => (props.fullwidth ? '100%' : '')};
  height: 4rem;
  color: white;
  border: 0;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  :hover {
    /* background-color: #FFBF80; */
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
  onClick: Function.prototype,
  otherProps: null,
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
  /** Adds icon to button */
  icon: node,
  /** Adds extra props to the element */
  otherProps: object,
};

export default ActionButton;
