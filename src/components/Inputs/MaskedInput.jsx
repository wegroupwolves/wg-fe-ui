import React, { forwardRef } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

import TextInput from './TextInput';

const removeMask = (value, mask) => {
  return value
    .split('')
    .filter((maskedVal, i) => maskedVal !== mask[i])
    .join('');
};

const formatMask = (value, mask, maskChar) => {
  let i = 0;
  let lastReplacedIndex = -1;
  const re = new RegExp(maskChar, 'g');
  const filledMask = mask.replace(re, (_, j) => {
    if (i >= value.length) return ' ';
    lastReplacedIndex = j;
    return value[i++];
  });
  return filledMask.substring(0, lastReplacedIndex + 1);
};

const MaskedInput = forwardRef(
  (
    {
      className,
      children,
      mask,
      maskChar,
      name,
      type,
      disabled,
      onChange,
      setFieldTouched,
      error,
      touched,
      value,
      ...otherProps
    },
    ref,
  ) => {

    const handleChange = val => {
      const rawValue = removeMask(val, mask);
      onChange(rawValue);
    };

    return (
      <TextInput
        ref={ref}
        className={className}
        name={name}
        error={error}
        touched={touched}
        type={type}
        disabled={disabled}
        placeholder={mask}
        isMasked={true}
        value={formatMask(value, mask, maskChar)}
        onChange={handleChange}
        setFieldTouched={setFieldTouched}
        {...otherProps}
      >
        {children}
      </TextInput>
    );
  },
);

MaskedInput.defaultProps = {
  disabled: false,
  mask: '   -   -  ',
  maskChar: ' ',
  placeholder: '',
  error: '',
  touched: false,
  type: 'text',
  value: '',
  setFieldTouched: () => {},
  otherProps: {},
};

MaskedInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node.isRequired,
  mask: string,
  maskChar: string,
  /** name of input and label */
  name: string.isRequired,
  /** type of input: email, text, ... */
  type: string,
  /** if true input is disabled */
  disabled: bool,
  /** example value in the input */
  placeholder: string,
  /** string with errormessage */
  error: string,
  /** boolean to check if inputfield is touched */
  touched: bool,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** returns onChange event */
  onChange: func,
  /** Adds extra props to the element */
  otherProps: object,
  /** sets initial value */
  value: string,
};

MaskedInput.displayName = 'MaskedInput';

export default MaskedInput;
