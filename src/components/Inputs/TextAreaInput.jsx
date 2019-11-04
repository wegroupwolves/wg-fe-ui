import React, { useState, useEffect } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { detect } from 'detect-browser';

import Checkmark from '../../assets/checkmark';
import Errormark from '../../assets/errormark';

const TextAreaInput = ({
  className,
  children,
  name,
  disabled,
  placeholder,
  onChange,
  setFieldTouched,
  error,
  touched,
  value,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : '');
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
    if (inputValue != value) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <Container className={className}>
      <StyledLabel disabled={disabled} htmlFor={name}>
        {children}
      </StyledLabel>
      <InputContainer>
        <StyledTextArea
          {...otherProps}
          id={name}
          name={name}
          disabled={disabled}
          placeholder={placeholder ? placeholder : null}
          error={error ? true : false}
          touched={touched ? true : false}
          value={inputValue}
          onChange={e => {
            onChange(e);
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            setFieldTouched(name, true);
            setFocus(false);
          }}
          onFocus={() => handleFocus()}
        />
        {error ? (
          <StyledErrormark
            color="#F74040"
            focus={focus}
            right={iconRight}
            browser={browser ? browser.name : null}
          />
        ) : touched ? (
          <StyledCheckmark
            color="#00CD39"
            focus={focus}
            right={iconRight}
            browser={browser ? browser.name : null}
          />
        ) : null}
      </InputContainer>
      {error ? (
        <ErrorContainer>
          <p>{error}</p>
        </ErrorContainer>
      ) : null}
    </Container>
  );
};

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
  margin-bottom: 0.7rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  background-color: ${props => (props.disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${props =>
    props.error
      ? key('colors.bad')
      : props.touched & !props.error
      ? key('colors.good')
      : key('colors.outline')};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  padding: 1rem;
  min-height: 7rem;

  &:focus {
    outline: none;
    border-color: ${key('colors.primary-regular')};
  }

  &::placeholder {
    color: ${key('colors.button-toggle')};
  }
`;

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: ${key('colors.bad')};
  position: absolute;
`;

const StyledCheckmark = styled(Checkmark)`
  position: absolute;
  right: ${props => (props.focus ? props.right : '1rem')};
  bottom: 1.3rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

const StyledErrormark = styled(Errormark)`
  position: absolute;
  right: ${props => (props.focus ? props.right : '1rem')};
  bottom: 1.2rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

TextAreaInput.defaultProps = {
  disabled: false,
  placeholder: null,
  error: '',
  touched: {},
  setFieldTouched: () => {},
  onChange: () => {},
  otherProps: {},
};

TextAreaInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node.isRequired,
  /** name of input and label */
  name: string.isRequired,
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
  value: node,
};

export default TextAreaInput;
