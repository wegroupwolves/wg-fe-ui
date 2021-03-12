import React, { forwardRef, useState, useEffect } from 'react';
import {
  bool,
  node,
  number,
  func,
  string,
  object,
  oneOfType,
} from 'prop-types';
import styled from 'styled-components';
import { detect } from 'detect-browser';
import Error, { getBorderColor } from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

import * as Icons from '../Icons';
const IconsList = {};
Object.keys(Icons).map(
  IconKey => (IconsList[Icons[IconKey].name] = Icons[IconKey]),
);

const NumbersInputWithSymbol = forwardRef(
  (
    {
      className,
      children,
      icon,
      name,
      type,
      disabled,
      dataTestId,
      placeholder,
      onChange,
      setFieldTouched,
      error,
      warning,
      touched,
      value,
      ...otherProps
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [focus, setFocus] = useState();
    const browser = detect();

    const handleFocus = () => {
      setFocus(true);
    };

    useEffect(() => {
      if (inputValue !== value) {
        setInputValue(value);
      }
    }, [value]);

    const handleChange = e => {
      e.persist();
      !otherProps.isMasked && setInputValue(e.target.value);
      onChange({ name: e.target.name, value: e.target.value });
    };
    const handleBlur = () => {
      setFieldTouched(name, true);
      setFocus(false);
    };

    return (
      <Container className={className}>
        <StyledLabel disabled={disabled}>
          {children}
          <StyledInput
            ref={ref}
            id={name}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            error={error}
            warning={warning}
            touched={touched}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            dataTestId={dataTestId}
            {...otherProps}
          />
          <ValidationIcons
            error={error}
            browser={browser}
            focus={focus}
            touched={touched}
          />
          <Type>{icon}</Type>
        </StyledLabel>
        <Error error={error} warning={warning} />
      </Container>
    );
  },
);

const Type = styled.span`
  border-left: 1px solid #ccc;
  color: #222;
  padding: 1.4rem;
  position: absolute;
  right: 0;
  top: 1.5rem;
`;

const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  position: relative;
  height: 9rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  color: ${({ disabled, theme }) =>
    disabled ? theme.ui.disabled : theme.labels.guaranteeText};
  line-height: 120%;
  input {
    padding-right: 4.5rem;
    padding-left: 0.7rem;
  }
  svg {
    right: 5rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const StyledInput = styled.input`
  background-color: ${props => (props.disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${({ error, touched, theme, warning }) =>
    getBorderColor(error, touched, theme, warning)};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  margin-top: 0.8rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.ui.interactive};
  }
`;

NumbersInputWithSymbol.defaultProps = {
  disabled: false,
  placeholder: '',
  icon: '%',
  error: '',
  warning: '',
  touched: false,
  type: 'text',
  setFieldTouched: () => {},
  onChange: () => {},
  otherProps: {},
  value: '',
};

NumbersInputWithSymbol.propTypes = {
  dataTestId: string,
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node,
  /** the value type. ex: euro or % */
  icon: string,
  /** name of input and label */
  name: string,
  /** type of input: email, text, ... */
  type: string,
  /** if true input is disabled */
  disabled: bool,
  /** example value in the input */
  placeholder: string,
  /** string with errormessage */
  error: string,
  /** string with warningmessage */
  warning: string,
  /** Pass an icon name to show said icon inside the input  */
  touched: bool,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** returns onChange event */
  onChange: func,
  /** Adds extra props to the element */
  otherProps: object,
  /** sets initial value */
  value: oneOfType([string, number]),
};

export default NumbersInputWithSymbol;
