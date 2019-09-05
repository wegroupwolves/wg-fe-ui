import React from 'react';
import {bool, string, node, func} from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const ActionButton = ({level, disabled, children, fullwidth, onClick, icon, otherProps, className}) => {
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
  background-color: ${props => props.level === 'primary' ? key('colors.action') : key('colors.interactive')};
  font-weight: 900;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  min-width: 12rem;
  width: ${props => props.fullwidth ? '100%' : ''};
  height: 4rem;
  color: white;
  border: 0;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus{
    outline: none;
  }

  :hover {
    /* background-color: #FFBF80; */
  }

  :disabled {
    background-color: ${key('colors.disabled')};
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
  otherProps: null,
};

ActionButton.propTypes = {
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
  otherProps: node,
}

export default ActionButton
