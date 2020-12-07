import React, { useState, useEffect } from 'react';
import { bool, node, func, string, object, number } from 'prop-types';
import styled from 'styled-components';
import { detect } from 'detect-browser';
import Error, { getBorderColor } from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const TextArea = ({
  className,
  children,
  name,
  disabled,
  placeholder,
  onChange,
  onBlur,
  setFieldTouched,
  error,
  warning,
  touched,
  value,
  maxLength,
  counter,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [focus, setFocus] = useState();
  const [iconRight, setIconRight] = useState('1rem');
  const browser = detect();
  const handleChange = e => {
    e.persist();
    setInputValue(e.target.value);
    onChange({ name: e.target.name, value: e.target.value });
  };

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

  const handleBlur = e => {
    setFieldTouched(name, true);
    setFocus(false);
    onBlur({ name: e.target.name, value: e.target.value });
  };

  return (
    <Container className={className}>
      <StyledLabel disabled={disabled} htmlFor={name}>
        {children}
      </StyledLabel>
      <InputContainer>
        <Count maxLength={maxLength} count={value.length} counter={counter}>
          <StyledTextArea
            {...otherProps}
            id={name}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            error={error}
            warning={warning}
            touched={touched}
            value={inputValue}
            maxLength={maxLength}
            count={value.length}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </Count>
        <ValidationIcons
          error={error}
          browser={browser}
          focus={focus}
          iconRight={iconRight}
          touched={touched}
        />
      </InputContainer>
      <Error error={error} warning={warning} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  position: relative;
`;

const Count = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: ${({ count, maxLength, counter }) =>
      counter ? `'${count} / ${maxLength || '∞'}'` : ''};
    position: absolute;
    bottom: 20px;
    right: 15px;
    height: 13px;
    max-width: 74px;
    display: block;
    white-space: nowrap;
    font-size: 1.5rem;
    line-height: 1.3rem;
    letter-spacing: 0.924996px;
    color: #dfdfdf;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  color: ${({ disabled }) => (disabled ? '#AEAEAE' : '#5B5550')};
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  background-color: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${({ error, touched, theme, warning }) =>
    getBorderColor(error, touched, theme, warning)};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  padding: 1rem;
  min-height: 7rem;
`;

TextArea.defaultProps = {
  disabled: false,
  placeholder: '',
  error: '',
  warning: '',
  value: '',
  touched: false,
  setFieldTouched: () => {},
  onChange: () => {},
  onBlur: () => {},
  otherProps: {},
};

TextArea.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node,
  /** name of input and label */
  name: string,
  /** if true input is disabled */
  disabled: bool,
  /** example value in the input */
  placeholder: string,
  /** string with errormessage */
  error: string,
  /** string with warningmessage */
  warning: string,
  /** boolean to check if inputfield is touched */
  touched: bool,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** returns onChange event */
  onChange: func,
  /** returns onBlur event */
  onBlur: func,
  /** max input length */
  maxLength: number,
  /** boolean to set counter visibility */
  counter: bool,
  /** Adds extra props to the element */
  otherProps: object,
  /** sets initial value */
  value: string,
};

export default TextArea;
