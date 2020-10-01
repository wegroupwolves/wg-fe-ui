import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { element, string, number, func, object } from 'prop-types';

const RoomInput = ({
  icon,
  label,
  info,
  minValue,
  maxValue,
  onInputChange,
  className,
  otherProps,
  value,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [wasMinReached, setWasMinReached] = useState(value === minValue);
  const [wasMaxReached, setWasMaxReached] = useState(value === maxValue);

  /* Life cycles
  -------------------------------------------------- */
  useEffect(() => {
    /** Pass back the current value of the input */
    onInputChange(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (value != inputValue);
    setInputValue(value);
  }, [value]);

  /* Event handling
  -------------------------------------------------- */
  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  /**
   * Function that handles the clicking of the buttons aside the input.
   * @param {string} action Defines wether the button clicked was minus or plus.
   */
  const handleInputButtonClick = action => {
    setWasMaxReached(false);
    setWasMinReached(false);

    if (action === 'minus') {
      if (inputValue > minValue) {
        setInputValue(inputValue - 1);

        if (inputValue - 1 === minValue) {
          setWasMinReached(true);
        }
      } else {
        setWasMinReached(true);
      }
    } else if (action === 'plus') {
      if (maxValue) {
        if (inputValue < maxValue) {
          setInputValue(inputValue + 1);

          if (inputValue + 1 === maxValue) {
            setWasMaxReached(true);
          }
        } else {
          setWasMaxReached(true);
        }
      } else {
        setInputValue(inputValue + 1);
      }
    }
  };

  /**
   * Function that handles the changing of the input directly.
   * @param {string} val Value passed from input
   */
  const handleInputChange = val => {
    if (isNaN(val) || val === '') {
      if (val === '') {
        setInputValue(minValue);
        setWasMinReached(true);
      }
    } else {
      setWasMaxReached(false);
      setWasMinReached(false);

      if (parseInt(val) > minValue) {
        setInputValue(parseInt(val));

        if (maxValue) {
          if (parseInt(val) < maxValue) {
            setInputValue(parseInt(val));
          } else {
            setInputValue(maxValue);
            setWasMaxReached(true);
          }
        } else {
          setInputValue(parseInt(val));
        }
      } else {
        setWasMinReached(true);
      }
    }
  };

  return (
    <RoomInputWrapper className={className} {...otherProps}>
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}

      <ContentWrapper icon={icon}>
        <ContentHeader>
          <Label>{label}</Label>
          {info ? (
            <InfoButton
              onClick={() => {
                handleInfoClick();
              }}
            >
              ? <InfoTooltip active={showInfo}>{info}</InfoTooltip>
            </InfoButton>
          ) : null}
        </ContentHeader>

        <InputWrapper>
          <InputButton
            minus
            disabled={wasMinReached}
            onClick={() => {
              handleInputButtonClick('minus');
            }}
          >
            -
          </InputButton>

          <Input
            value={inputValue}
            onChange={event => {
              handleInputChange(event.currentTarget.value);
            }}
          ></Input>

          <InputButton
            plus
            disabled={wasMaxReached}
            onClick={() => {
              handleInputButtonClick('plus');
            }}
          >
            +
          </InputButton>
        </InputWrapper>
      </ContentWrapper>
    </RoomInputWrapper>
  );
};

const RoomInputWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  background-color: white;
  border: 1px solid #f0f1f3;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  flex: 0 0 33.33%;
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #f0f1f3;

  > svg path {
    fill: #e4e4e4;
  }
`;

const ContentWrapper = styled.div`
  flex: ${({ icon }) => (icon ? '0 0 66.66%' : '0 0 100%')};
  padding: 1.6rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.01em;
  color: #8990a3;
`;

const InfoButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #8990a3;
  border: 2px solid #8990a3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const InfoTooltip = styled.div`
  position: absolute;
  bottom: 2.8rem;
  width: 300px;
  background-color: #222;
  border-radius: 5px;
  padding: 0.8rem;
  color: white;
  display: ${({ active }) => (active ? 'block' : 'none')};

  &::after,
  &::before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-color: transparent;
    border-top-color: #222;
    border-width: 6px;
    margin-left: -6px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  font-family: ${({ theme }) => theme.font};
`;

const InputButton = styled.div`
  flex: 0 0 38px;
  border-radius: ${({ minus, plus }) =>
    minus ? '9999px 0 0 9999px' : plus ? '0 9999px 9999px 0' : null};
  border: 2px solid #f0f1f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 3px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-right: ${({ minus }) => (minus ? '0' : null)};
  border-left: ${({ plus }) => (plus ? '0' : null)};
  color: ${({ disabled }) => (disabled ? '#F0F1F3' : '#8990a3')};
  user-select: none;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? null : theme.brand.primary};
    border-color: ${({ disabled, theme }) =>
      disabled ? null : theme.brand.primary};
    color: ${({ disabled }) => (disabled ? null : 'white')};
  }
`;

const Input = styled.input`
  flex: 1 0 auto;
  min-width: 0;
  width: 0;
  border: 2px solid #f0f1f3;
  text-align: center;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8rem;
  letter-spacing: 0.01em;
  color: #222;
`;

RoomInput.defaultProps = {
  minValue: 0,
};

RoomInput.propTypes = {
  /** Pass an icon as an element to display it on the left side of the element. (If empty, content takes full width) */
  icon: element,
  /** Label to be displayed above the input. */
  label: string.isRequired,
  /** Info to be shown in the tooltip. (If left empty, tooltip will not be displayed) */
  info: string,
  /** The minimum value the input can have. */
  minValue: number,
  /** The maximum value the input can have. */
  maxValue: number,
  /** The value is returned within this function. */
  onInputChange: func.isRequired,
  /** Extra classNames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
  /** Value to change the component value so that it can be updated */
  value: number,
};

export default RoomInput;
