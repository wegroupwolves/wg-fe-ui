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
  const handleClick = () => {
    if (!disabled) {
      onClick();
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
  background-color: ${({ theme, disabled, level }) =>
    disabled
      ? theme.ui.disabled
      : level === 'primary'
      ? theme.brand.primary
      : theme.ui.interactive};
  font-size: 1.6rem;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${props => (props.fullwidth ? '100%' : '')};
  color: white;
  border: 0;
  padding: ${({ padding }) => padding || '1rem 0.4rem'};
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
