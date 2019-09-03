import React from 'react';
import {bool, string} from 'prop-types';
import styled from 'styled-components';

const Button = ({color, disabled, label}) => {
 let colorKey;

 switch (color) {
  case 'primary':
   colorKey = '#FF8000'
   break;
  case 'secondary':
   colorKey = '#DEDEDE'
   break;
 
  default:
   break;
 }
 return (
   <StyledButton disabled={disabled} >{label}</StyledButton>
 )
}

const StyledButton = styled.button`
  background-color: green;
  font-weight: 900;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: 0;
`;

Button.defaultProps = {
 disabled: false,
 color: 'red',
 label: 'button',
};

Button.propTypes = {
 disabled: bool,
 color: string,
 label: string,
}

export default Button
