import React from 'react';
import {bool, string} from 'prop-types';

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
   <button disabled={disabled} style={{backgroundColor: colorKey, color: 'white', border: 0, padding: '0.5rem 2rem', borderRadius: '0.6rem', fontSize: '1.2rem', fontWeight: '900'}} >{label}</button>
 );
}

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
