import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { bool, string, object, func, node } from 'prop-types';

import styled from 'styled-components';
import { key } from 'styled-theme';
import { detect } from 'detect-browser';

import Checkmark from '../../assets/checkmark';
import Errormark from '../../assets/errormark';

const DateInput = forwardRef(
  (
    {
      className,
      name,
      disabled,
      error,
      touched,
      value,
      onBlur,
      onChange,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [day, setDay] = useState(value.day || ''); // Initialize the data with the data supplied to formik
    const [month, setMonth] = useState(value.month || '');
    const [year, setYear] = useState(value.year || '');

    const browser = detect();
    const [focus, setFocus] = useState();
    const [iconRight, setIconRight] = useState('1rem');
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();

    const ARROW_LEFT = 37;
    const ARROW_TOP = 38;
    const ARROW_RIGHT = 39;
    const ARROW_BOTTOM = 40;

    // Change focus to the field with the classname in the nextField argument
    const focusNextField = nextField => {
      switch (nextField) {
        case 'day':
          dayRef.current.focus();
          dayRef.current.setSelectionRange(
            0,
            dayRef.current.getAttribute('data-maxlengthvalue'),
          );

          break;
        case 'month':
          monthRef.current.focus();
          monthRef.current.setSelectionRange(
            0,
            monthRef.current.getAttribute('data-maxlengthvalue'),
          );
          break;
        case 'year':
          yearRef.current.focus();
          yearRef.current.setSelectionRange(
            0,
            yearRef.current.getAttribute('data-maxlengthvalue'),
          );
          break;
      }
    };

    useEffect(() => {
      // If any of the hooks are updated, update the formik value for validation
      if (day !== '' || year !== '' || month !== '') {
        onChange(name, {
          day,
          month,
          year,
        });
      }
      if (!touched) {
        // if 1 field has been filled, set the formik touched to true
        if (day !== '' || year !== '' || month !== '') {
          setFocus(true);
        }
      }
    }, [year, day, month]);

    const setRange = e => {
      e.preventDefault();
      e.target.setSelectionRange(
        0,
        e.target.getAttribute('data-maxlengthvalue'),
      );
    };

    const keyDownHandler = (e, setValue, max, min, type) => {
      if (type !== 'day') {
        // If the inputType isn't day, go to previous field on left arrow key
        if (e.keyCode === ARROW_LEFT && e.target.selectionStart === 0) {
          e.preventDefault();
        }

        // If you use backspace on empty input, go to previous input
        if (e.keyCode === 8 && !e.target.value) {
          e.preventDefault();
          focusNextField('day');
        }
      } else {
        // On left arrow key select everything and do nothing else
        if (e.keyCode === ARROW_LEFT) {
          setRange(e);
        }
      }
      if (
        type !== 'year' &&
        e.keyCode === ARROW_RIGHT &&
        e.target.selectionEnd ===
          parseInt(e.target.getAttribute('data-maxlengthvalue'))
      ) {
        // If type isn't year, go to next field on right arrow key
        e.preventDefault();
      } else {
        // Else if it is year, don't do anything except for select everything
        if (
          e.keyCode === ARROW_RIGHT &&
          e.target.selectionEnd ===
            parseInt(e.target.getAttribute('data-maxlengthvalue'))
        ) {
          setRange(e);
        }
      }
      if (e.keyCode === ARROW_TOP && parseInt(e.target.value) < max) {
        // Increment the value of the focused input by 1
        setValue(pad(parseInt(e.target.value) + 1));
        setRange(e);
      }
      if (e.keyCode === ARROW_BOTTOM && parseInt(event.target.value) > min) {
        // Decrement the value of the focused input by 1
        setValue(pad(parseInt(event.target.value) - 1));
        setRange(e);
      }
    };

    // Pad the value -> pad(4) returns '04', pad(11) returns '11'
    const pad = n => (n < 10 ? `0${n}` : n);

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
      setDay(value.day || ''); // Initialize the data with the data supplied to formik
      setMonth(value.month || '');
      setYear(value.year || '');
    }, [value]);

    // Single functions to handle all blurs
    const blurHandlerType = (elem, max, min, setValue, oldValue) => {
      let tempInput;
      // If the blurred element only has one decimal, pad it
      if (elem.value.length === 1) {
        tempInput = pad(elem.value);
      } else {
        tempInput = elem.value;
      }
      if (
        (parseInt(tempInput) < max && parseInt(tempInput) >= min) ||
        tempInput === ''
      ) {
        // If the input only has '0', empty it
        if (parseInt(tempInput) === 0) {
          tempInput = '';
        }
        setValue(tempInput);
      } else {
        // If the input is bigger than the max or smaller than the min, ignore the second digit and pad the first
        setValue(pad(parseInt(oldValue)));
      }
    };

    const handleBlurInput = e => {
      switch (e.target.id) {
        case 'day':
          blurHandlerType(e.target, 32, 0, setDay, day);
          break;
        case 'month':
          blurHandlerType(e.target, 13, 0, setMonth, month);
          break;
        case 'year':
          setYear(e.target.value);
          break;
        default:
          break;
      }
    };

    const handleChangedInputForType = (
      e,
      nextField,
      max,
      min,
      setValue,
      oldValue,
      type,
    ) => {
      if (type !== 'year') {
        let tempValue;
        if (
          e.target.value.length === 1 &&
          parseInt(e.target.value) > Math.floor(max / 10)
        ) {
          // if the first digit is high so that every other second digit would make the number too big
          // pad the first digit and focus to the next field
          tempValue = pad(e.target.value);
          focusNextField(nextField);
        } else {
          // Else, just add it, if the input is filled, go to next input
          tempValue = e.target.value;
          if (e.target.value.length === 2) {
            focusNextField(nextField);
          }
        }
        if (e.target.value.length > 2) {
          // If the input has more than 2 digits, take the old value
          tempValue = oldValue;
        }
        if (!isNaN(tempValue)) {
          if (
            (parseInt(tempValue) < max && parseInt(tempValue) >= min) ||
            tempValue === ''
          ) {
            // If the digit is a number and is valid, set it
            setValue(tempValue);
          } else {
            // if not correct, reset to old value
            setValue(pad(parseInt(oldValue)));
          }
        }
      } else {
        let tempValue = e.target.value;

        if (e.target.value.length > 4) {
          tempValue = oldValue;
        }
        if (!isNaN(tempValue)) {
          setValue(tempValue);
        }
        setValue(tempValue);
      }
    };

    const handleChangedInput = e => {
      switch (e.target.id) {
        case 'day':
          handleChangedInputForType(e, 'month', 32, 0, setDay, day, 'day');
          break;
        case 'month':
          handleChangedInputForType(e, 'year', 13, 0, setMonth, month, 'month');
          break;
        case 'year':
          handleChangedInputForType(e, null, 9999, 0, setYear, year, 'year');
          break;
      }
    };

    const onFocus = ({ target }) => {
      target.setSelectionRange(0, target.getAttribute('data-maxlengthvalue'));
    };
    return (
      <Container className={className} {...otherProps}>
        <StyledLabel disabled={disabled}>{children}</StyledLabel>
        <Input
          error={error}
          touched={touched}
          ref={ref}
          htmlFor={name}
          onFocus={handleFocus}
          onBlur={onBlur}
        >
          <StyledSingleInputDate
            inputtype="day"
            id="day"
            value={day}
            data-maxlengthvalue={2}
            maxValue={31}
            onBlur={handleBlurInput}
            onChange={handleChangedInput}
            placeholder="dd"
            type="text"
            autoComplete="off"
            ref={dayRef}
            data-test-id="day"
            onFocus={onFocus}
            min={1}
            onKeyDown={e =>
              keyDownHandler(e, setDay, 31, 1, 'day', null, 'month')
            }
          />
          {'/'}
          <StyledSingleInputDate
            inputtype="month"
            id="month"
            value={month}
            data-maxlengthvalue={2}
            maxValue={12}
            onBlur={handleBlurInput}
            onChange={handleChangedInput}
            placeholder="mm"
            type="text"
            ref={monthRef}
            autoComplete="off"
            data-test-id="month"
            onFocus={onFocus}
            min={1}
            onKeyDown={e =>
              keyDownHandler(e, setMonth, 12, 1, 'month', 'day', 'year')
            }
          />
          {'/'}
          <StyledSingleInputDate
            id="year"
            inputtype="year"
            value={year}
            maxLength={4}
            data-maxlengthvalue={9999}
            ref={yearRef}
            onBlur={handleBlurInput}
            onChange={handleChangedInput}
            placeholder="yyyy"
            type="text"
            autoComplete="off"
            data-test-id="year"
            onFocus={onFocus}
            min={1}
            onKeyDown={e =>
              keyDownHandler(e, setYear, 9999, 0, 'year', 'month', null)
            }
          />
          {error && touched ? (
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
        </Input>
        {error && touched ? (
          <ErrorContainer>
            <p>{error}</p>
          </ErrorContainer>
        ) : null}
      </Container>
    );
  },
);

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
`;

const Input = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  justify-content: flex-start;
  background-color: white;
  padding-left: 1.2rem;
  height: 4rem;
  border: 0.1rem solid;
  border-color: ${({ error, touched }) =>
    error && touched
      ? key('colors.bad')
      : touched && !error
      ? key('colors.good')
      : key('colors.outline')};
  border-radius: 0.3rem;
`;

const StyledSingleInputDate = styled.input`
  flex-grow: 0;
  flex-shrink: 0;
  width: ${props => (props.inputtype === 'year' ? '5rem' : '2.9rem')};
  border: none;
  letter-spacing: 0.1rem;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  display: block;
  padding: 0.2rem;
  text-align: center;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    letter-spacing: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  font-family: ${key('fonts.primary')};
  position: relative;
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
  right: ${({ focus, right }) => (focus ? right : '1rem')};
  bottom: 1.3rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

const StyledErrormark = styled(Errormark)`
  position: absolute;
  right: ${({ focus, right }) => (focus ? right : '1rem')};
  bottom: 1.2rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

DateInput.displayName = 'DateInput';

DateInput.defaultProps = {
  disabled: false,
  touched: false,
  otherProps: {},
  value: {},
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};
DateInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** name of input and label */
  name: string.isRequired,
  /** label above the input */
  children: node.isRequired,
  /** type of input: email, text, ... */
  disabled: bool,
  /** example value in the input */
  error: string,
  /** object with inputname and boolean to check if touched */
  touched: bool,
  /** Callback function that is fired when blurring the input field. */
  onBlur: func,
  /** Callback function that is fired when focusing the input field. */
  onChange: func,
  /** Callback function that is fired when the component's value changes. */
  onFocus: func,
  /** Current value of the input element. Format { day: 'DD', month: 'MM', year: 'YYYY' } */
  value: object,
  /** Adds extra props to the element */
  otherProps: object,
};
export default DateInput;
