import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { number, bool, string, object, func } from 'prop-types';

import { IconActionDropDown } from '../../index';

const AmountInput = ({
  value,
  disabled,
  min,
  max,
  className,
  onChange,
  inputAppend,
  ...otherProps
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isMaxReached, setIsMaxReached] = useState(currentValue === max);
  const [isMinReached, setIsMinReached] = useState(currentValue === min);

  useEffect(() => {
    if (currentValue === min) {
      setIsMinReached(true);
    } else {
      setIsMinReached(false);
    }

    if (currentValue === max) {
      setIsMaxReached(true);
    } else {
      setIsMaxReached(false);
    }
  }, [currentValue]);

  useEffect(() => {
    if (value === min) {
      setIsMinReached(true);
    } else {
      setIsMinReached(false);
    }

    if (value === max) {
      setIsMaxReached(true);
    } else {
      setIsMaxReached(false);
    }
  }, [value]);

  const checkValue = ({ target: { value } }) => {
    const parsedValue = parseFloat(value) || min;
    if (parsedValue >= min && parsedValue <= max) {
      setCurrentValue(parsedValue);
    } else {
      if (parsedValue < min) {
        setCurrentValue(min);
      } else if (parsedValue > max) {
        setCurrentValue(max);
      }
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    if (disabled !== true) {
      const parsedValue = parseFloat(value) || undefined;
      setCurrentValue(parsedValue);
      onChange({ name: name, value: parsedValue });
    }
  };

  const increaseValue = () => {
    if (currentValue < max && disabled !== true) {
      setCurrentValue(currentValue + 1);
    }
  };

  const decreaseValue = () => {
    if (currentValue > min && disabled !== true) {
      setCurrentValue(currentValue - 1);
    }
  };

  return (
    <Wrapper disabled={disabled} className={className} {...otherProps}>
      <InputControls>
        <InputControl disabled={isMaxReached} onClick={increaseValue}>
          <IconActionDropDown size={14} />
        </InputControl>
        <InputControl disabled={isMinReached} onClick={decreaseValue}>
          <IconActionDropDown size={14} />
        </InputControl>
      </InputControls>

      <StyledInput
        type="text"
        value={currentValue}
        min={min}
        max={max}
        onChange={handleChange}
        onBlur={checkValue}
        disabled={disabled}
      />

      {inputAppend ? <InputExtra>{inputAppend}</InputExtra> : ''}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  position: relative;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
`;

const InputControls = styled.div`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 0;
  width: 32px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const InputControl = styled.div`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg path {
    stroke: #8990a3;
    opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  }

  &:nth-child(1) {
    transform: rotate(180deg);
  }
`;

const StyledInput = styled.input`
  width: calc(100% - 4rem);
  height: 36px;
  border: 0;
  margin-left: 4rem;
  font-size: 1.4rem;
  background-color: transparent;

  &:focus {
    outline: none;
    box-shadow: 0;
  }
`;

const InputExtra = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  bottom: 0;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.typo.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

AmountInput.propTypes = {
  /** Value of the input (only applied on mount). */
  value: number,
  /** Stops input from working in any way. */
  disabled: bool,
  /** Minimum value of the input. */
  min: number,
  /** Maximum value of input. */
  max: number,
  /** Extra className to be passed to component. */
  className: string,
  /** Editable string appended to the right of the input. */
  inputAppend: string,
  /** returns onChange event */
  onChange: func,
  /** Other props to be passed to the component. */
  otherProps: object,
};

export default AmountInput;
