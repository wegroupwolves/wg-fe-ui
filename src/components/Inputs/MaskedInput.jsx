import React, { forwardRef, useEffect, useState } from 'react';
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
import InputMask from 'react-input-mask';
import Error, { getBorderColor } from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const MaskedInput = forwardRef(
  (
    {
      className,
      children,
      mask,
      maskChar,
      name,
      type,
      value,
      disabled,
      onChange,
      setFieldTouched,
      error,
      warning,
      touched,
      ...otherProps
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [focus, setFocus] = useState();
    const [iconRight, setIconRight] = useState('1rem');
    const browser = detect();

    const handleFocus = () => {
      setFocus(true);
      if (browser) {
        switch (browser.name) {
          case 'safari':
            setIconRight('3.5rem');
            break;
          case '':
            setIconRight('3.5rem');
            break;
          default:
            setIconRight('1rem');
            break;
        }
      }
    };

    useEffect(() => {
      if (inputValue !== value) {
        setInputValue(value);
      }
    }, [value]);

    const handleChange = ({ target }) => {
      onChange({ name, value: target.value });
    };
    const handleBlur = () => {
      setFieldTouched(name, true);
      setFocus(false);
    };

    return (
      <Container className={className}>
        <StyledLabel disabled={disabled}>
          {children}
          <InputMask
            inputRef={ref}
            disabled={disabled}
            mask={mask}
            maskChar={maskChar}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            {inputProps => (
              <StyledInput
                {...inputProps}
                id={name}
                name={name}
                type={type}
                disabled={disabled}
                placeholder={mask}
                error={error}
                warning={warning}
                touched={touched}
                {...otherProps}
              />
            )}
          </InputMask>
          <ValidationIcons
            error={error}
            browser={browser}
            focus={focus}
            iconRight={iconRight}
            touched={touched}
          />
        </StyledLabel>
        <Error error={error} warning={warning} />
      </Container>
    );
  },
);

const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts};
  position: relative;
  height: 9rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
  line-height: 1rem;
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
  padding-left: 0.7rem;
  margin-top: 1.4rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.ui.interactive};
  }
`;

StyledInput.displayName = 'StyledInput';

MaskedInput.defaultProps = {
  disabled: false,
  mask: '   -   -  ',
  maskChar: ' ',
  placeholder: '',
  error: '',
  warning: '',
  touched: false,
  type: 'text',
  value: '',
  setFieldTouched: () => { },
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
  /** string with warningmessage */
  warning: string,
  /** boolean to check if inputfield is touched */
  touched: bool,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** string with errormessage */
  error: string,
  /** returns onChange event */
  onChange: func,
  /** Adds extra props to the element */
  otherProps: object,
  /** sets initial value */
  value: oneOfType([string, number]),
};

MaskedInput.displayName = 'MaskedInput';

export default MaskedInput;
