import React, { useState } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import { detect } from 'detect-browser';

import Checkmark from '../../assets/checkmark';
import Errormark from '../../assets/errormark';

const TextInput = ({
  className,
  children,
  name,
  type,
  disabled,
  placeholder,
  setFieldValue,
  setFieldTouched,
  errors,
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

  return (
    <Container className={className}>
      <StyledLabel disabled={disabled} htmlFor={name}>
        {children}
      </StyledLabel>
      <InputContainer>
        <StyledInput
          {...otherProps}
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder ? placeholder : null}
          errors={errors[name] ? true : false}
          touched={touched[name] ? true : false}
          value={inputValue}
          onChange={e => {
            setFieldValue(name, e.target.value);
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            setFieldTouched(name, true);
            setFocus(false);
          }}
          onFocus={() => handleFocus()}
        />
        {errors[name] && touched[name] ? (
          <StyledErrormark
            color="#F74040"
            focus={focus}
            right={iconRight}
            browser={browser ? browser.name : null}
          />
        ) : touched[name] ? (
          <StyledCheckmark
            color="#00CD39"
            focus={focus}
            right={iconRight}
            browser={browser ? browser.name : null}
          />
        ) : null}
      </InputContainer>
      {errors[name] && touched[name] ? (
        <ErrorContainer>
          <p>{errors[name]}</p>
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

const StyledInput = styled.input`
  background-color: ${props => (props.disabled ? '#F0F1F3' : 'white')};
  width: 100%;
  border: 0.1rem solid;
  border-color: ${props =>
    props.errors & props.touched
      ? key('colors.bad')
      : props.touched & !props.errors
      ? key('colors.good')
      : key('colors.outline')};
  border-radius: 0.3rem;
  height: 4rem;
  font-size: 1.6rem;
  padding-left: 0.7rem;

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
  font-size: 1rem;
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

TextInput.defaultProps = {
  disabled: false,
  placeholder: null,
  errors: {},
  touched: {},
  setFieldTouched: () => {},
  setFieldValue: () => {},
  otherProps: {}
};

TextInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node.isRequired,
  /** name of input and label */
  name: string.isRequired,
  /** type of input: email, text, ... */
  type: string.isRequired,
  /** if true input is disabled */
  disabled: bool,
  /** example value in the input */
  placeholder: string,
  /** object with inputname and errormessage */
  errors: object,
  /** object with inputname and boolean to check if touched */
  touched: object,
  /** returns name and touched boolean */
  setFieldTouched: func,
  /** returns name and inputvalue */
  setFieldValue: func,
  /** Adds extra props to the element */
  otherProps: object,
  value: node,
};

export default TextInput;
