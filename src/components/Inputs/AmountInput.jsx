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
  onBlur,
  inputAppend,
  name,
  roundNumber = false,
  allowChange = false,
  ...otherProps
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const checkValue = value => {
    const parsedValue = parseFloat(value) || 0;
    if (parsedValue >= min && parsedValue <= max) {
      return parsedValue;
    } else {
      if (parsedValue === undefined) {
        return min;
      } else if (parsedValue < min) {
        return min;
      } else if (parsedValue > max) {
        return max;
      }
    }
  };

  const handleChange = (value, isBlur = false) => {
    let roundedValue = value;

    if (typeof value === 'string')
      roundedValue = Number(value.replace(',', '.'));
    if (roundNumber) roundedValue = roundedValue.toFixed(0);

    if (!disabled) {
      if (isBlur || allowChange) {
        const checkedValue = checkValue(roundedValue);
        setCurrentValue(checkedValue);
        if (allowChange) {
          onChange({ name, value: checkedValue });
        } else {
          onBlur({ name, value: checkedValue });
        }
      } else {
        setCurrentValue(value);
        onChange({ name, value });
      }
    }
  };

  const handleOnKeyDown = ({ keyCode }) => {
    if (keyCode === 38) {
      //Key: arrow up
      handlePlus();
    } else if (keyCode === 40) {
      //Key: arrow down
      handleMinus();
    }
  };

  const handlePlus = () => {
    // Check if number is integer or float
    if (Math.abs(currentValue) % 1 === 0) {
      handleChange(currentValue + 1);
    } else {
      handleChange(Math.ceil(currentValue));
    }
  };

  const handleMinus = () => {
    // Check if number is integer or float
    if (Math.abs(currentValue) % 1 === 0) {
      handleChange(currentValue - 1);
    } else {
      handleChange(Math.floor(currentValue));
    }
  };

  return (
    <Wrapper disabled={disabled} className={className} {...otherProps}>
      <InputControls>
        <InputControl
          disabled={currentValue == max}
          onClick={currentValue != max ? handlePlus : undefined}
        >
          <IconActionDropDown size={14} />
        </InputControl>
        <InputControl
          disabled={currentValue == min || currentValue === undefined}
          onClick={currentValue != min ? handleMinus : undefined}
        >
          <IconActionDropDown size={14} />
        </InputControl>
      </InputControls>

      <StyledInput
        type="text"
        value={currentValue}
        min={min}
        max={max}
        onChange={({ target: { value } }) => handleChange(value)}
        onBlur={({ target: { value } }) => handleChange(value, true)}
        disabled={disabled}
        onKeyDown={handleOnKeyDown}
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
  padding-right: 3rem;
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

AmountInput.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
};

AmountInput.propTypes = {
  /** Value of the input (only applied on mount). */
  value: number,
  /** Stops input from working in any way. */
  disabled: bool,
  /** Minimum value of the input. */
  min: number | string,
  /** Maximum value of input. */
  max: number | string,
  /** Extra className to be passed to component. */
  className: string,
  /** Editable string appended to the right of the input. */
  inputAppend: string,
  /** returns onChange event */
  onChange: func,
  /** returns onBlur event */
  onBlur: func,
  /** Other props to be passed to the component. */
  otherProps: object,
  /** Name of the component */
  name: string,
  /** If it should round the number */
  roundNumber: bool,
  /** If this component can change the value (useful for instant input feedback) */
  allowChange: bool,
};

export default AmountInput;
