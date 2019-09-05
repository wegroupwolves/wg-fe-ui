import React from 'react';
import {bool, string, node, func} from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const ToggleActionButton = ({level, disabled, children, fullwidth, onClick, icon, otherProps, className}) => {
 return (
   <StyledButton
    level={level}
    onClick={() => onClick()}
    fullwidth={fullwidth}
    disabled={disabled}
    className={className}
    {...otherProps}
    >
    {icon ? <Image src={icon} /> : null}
    {children}
   </StyledButton>
 )
}

const StyledButton = styled.button`
  font-family: ${key('fonts.primary')};
  background-color: ${props => props.level === 'active' ? key('colors.toggle') : key('colors.interactive')};
  font-weight: 900;
  font-size: 1.5rem;
  border-radius: 2.5rem;
  min-width: 12rem;
  width: ${props => props.fullwidth ? '100%' : ''};
  height: 3.5rem;
  color: white;
  border: 0;
  padding: 0 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus{
    outline: none;
  }

  :hover {
    background-color: ${props => props.level === 'active' ? '' : key('colors.hover')};
  }

  :disabled {
    background-color: ${key('colors.disabled')};
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
  otherProps: null,
};

ToggleActionButton.propTypes = {
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
  otherProps: node
}

export default ToggleActionButton
