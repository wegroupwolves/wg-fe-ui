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

const TextInput = forwardRef(
  (
    {
      className,
      children,
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
      symbol,
      symbolSide,
      symbolText,
      ...otherProps
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value);

    const [focus, setFocus] = useState();
    const [iconRight, setIconRight] = useState('1rem');
    const browser = detect();

    let ChosenIcon;

    if (symbolText === false) {
      ChosenIcon = IconsList[symbol];
    }

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
            symbol={symbol}
            symbolSide={symbolSide}
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
            iconRight={iconRight}
            touched={touched}
          />
          {symbol ? (
            <StyledSymbol symbolSide={symbolSide}>
              {symbolText ? symbol : <ChosenIcon color="#505050" />}
            </StyledSymbol>
          ) : (
            ''
          )}
        </StyledLabel>
        <Error error={error} warning={warning} />
      </Container>
    );
  },
);

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
  margin-top: 1.4rem;
  box-sizing: border-box;
  padding-right: ${({ symbolSide, symbol }) =>
    symbol !== '' && symbolSide === 'right' ? '4.7rem' : '0.7rem'};
  padding-left: ${({ symbolSide, symbol }) =>
    symbol !== '' && symbolSide === 'left' ? '4.7rem' : '0.7rem'};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.brand.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.ui.interactive};
  }
`;

const StyledSymbol = styled.div`
  position: absolute;
  right: ${({ symbolSide }) => (symbolSide === 'right' ? '1px' : '')};
  left: ${({ symbolSide }) => (symbolSide === 'right' ? '' : '1px')};
  bottom: 1px;
  height: calc(4rem - 2px);
  width: 4rem;
  ${'' /* background-color: ${({ theme }) => theme.ui.background}; */}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.typo.highlight};

  > svg {
    transform: scale(0.7);
  }
`;

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
  disabled: false,
  placeholder: '',
  error: '',
  warning: '',
  symbol: '',
  symbolSide: 'right',
  symbolText: false,
  touched: false,
  type: 'text',
  setFieldTouched: () => {},
  onChange: () => {},
  otherProps: {},
  value: '',
};

TextInput.propTypes = {
  dataTestId: string,
  /** Beeing able to use it in Styled Components */
  className: string,
  /** label above the input */
  children: node,
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
  symbol: string,
  /** Choose a side at which the icon will be shown */
  symbolSide: string,
  /** Picks whether to show the symbol as an icon or as text */
  symbolText: bool,
  /** boolean to check if inputfield is touched */
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

StyledInput.displayName = 'StyledInput';
TextInput.displayName = 'TextInput';

export default TextInput;
