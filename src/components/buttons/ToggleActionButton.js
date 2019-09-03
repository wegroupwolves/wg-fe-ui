import React from 'react';
import {bool, string, node, func} from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const ToggleActionButton = ({level, disabled, children, fullwidth, onClick}) => {
 return (
   <StyledButton level={level} onClick={() => onClick()} fullwidth={fullwidth} disabled={disabled} >{children}</StyledButton>
 )
}

const StyledButton = styled.button`
  font-family: Lato, sans-serif;
  background-color: ${props => props.level === 'active' ? key('colors.action') : key('colors.interactive')};
  font-weight: 900;
  font-size: 1.5rem;
  border-radius: 2.5rem;
  min-width: 12rem;
  width: ${props => props.fullwidth ? '100%' : ''};
  height: 3.5rem;
  color: white;
  border: 0;
  padding: 0 1.5rem;

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

ToggleActionButton.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
};

ToggleActionButton.propTypes = {
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
}

export default ToggleActionButton
