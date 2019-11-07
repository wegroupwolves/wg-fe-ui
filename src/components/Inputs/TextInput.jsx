import React, { forwardRef, useState, useEffect } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { detect } from 'detect-browser';
import Error from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const TextInput = forwardRef(
  (
    {
      className,
      children,
      name,
      type,
      disabled,
      placeholder,
      onChange,
      setFieldTouched,
      error,
      touched,
      value,
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
            touched={touched}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...otherProps}
          />
          <ValidationIcons
            error={error}
            browser={browser}
            focus={focus}
            iconRight={iconRight}
            touched={touched}
          />
        </StyledLabel>
        <Error error={error} />
      </Container>
    );
  },
);

const Container = styled.div`
  width: 100%;
  font-family: ${key('fonts.primary')};
  position: relative;
`;


const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
`;

const StyledInput = styled.input`
  background-color: ${props => (props.disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${({ error, touched }) =>
    error
      ? key('colors.bad')
      : touched & !error
      ? key('colors.good')
      : key('colors.outline')};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  padding-left: 0.7rem;
  margin-top: 1rem;

  &:focus {
    outline: none;
    border-color: ${key('colors.primary-regular')};
  }

  &::placeholder {
    color: ${key('colors.button-toggle')};
  }
`;

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
  disabled: false,
  placeholder: '',
  error: '',
  touched: false,
  type: 'text',
  setFieldTouched: () => {},
  onChange: () => {},
  otherProps: {},
  value: '',
};

TextInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node.isRequired,
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

StyledInput.displayName = 'StyledInput';
TextInput.displayName = 'TextInput';

export default TextInput;
