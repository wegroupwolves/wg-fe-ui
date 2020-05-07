import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  forwardRef,
} from 'react';
import {
  bool,
  number,
  string,
  object,
  oneOfType,
  func,
  node,
  shape,
} from 'prop-types';

import styled from 'styled-components';
import { detect } from 'detect-browser';
import Error from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const TimeInput = forwardRef(
  (
    {
      className,
      name,
      disabled,
      error,
      touched,
      isHour,
      isMinute,
      isSecond,
      is12HourFormat,
      value,
      onBlur,
      onChange,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [time, dispatch] = useReducer(
      (state, { type, payload }) => {
        switch (type) {
          case 'hour':
            return { ...state, hour: payload };
          case 'minute':
            return { ...state, minute: payload };
          case 'second':
            return { ...state, second: payload };
          default:
            return { ...state };
        }
      },
      { ...value },
    );

    const browser = detect();
    const [focus, setFocus] = useState();
    const [iconRight, setIconRight] = useState('1rem');
    const [timeFormat, setTimeFormat] = useState(is12HourFormat ? 'am' : '');
    const hourRef = useRef();
    const minuteRef = useRef();
    const secondRef = useRef();

    const ARROW_LEFT = 37;
    const ARROW_UP = 38;
    const ARROW_RIGHT = 39;
    const ARROW_DOWN = 40;

    const isTime = () => {
      if (!time || !Object.keys(time).length) return;
      let t = '';
      if (isHour) t = time.hour;
      if (isMinute) t = t ? `${t}:${time.minute}` : time.minute;
      if (isSecond) t = t ? `${t}:${time.second}` : time.second;
      return t.length > 5 ? /\d{2}:\d{2}:\d{2}/.test(t) : /\d{2}:\d{2}/.test(t);
    };

    useEffect(() => {
      if (!isTime()) return;
      onChange({
        name,
        value: `${time.hour}:${time.minute}:${time.second}${timeFormat}`,
      });
      !touched && setFocus(false);
    }, [
      time.hour,
      time.minute,
      time.second,
      isTime,
      name,
      touched,
      onChange,
      timeFormat,
    ]);

    const prevRef = {
      hour: null,
      minute: hourRef,
      second: minuteRef,
    };

    const nextRef = {
      hour: minuteRef,
      minute: secondRef,
      second: null,
    };

    // Pad the value -> pad(4) returns '04', pad(11) returns '11'
    const pad = (n, type) => {
      if (type === 'hour' && !parseInt(n)) return '01';
      if (parseInt(n) < 0) return '00';
      return parseInt(n) < 10 ? `0${parseInt(n)}` : n;
    };

    // Change focus to the field with the classname in the nextField argument
    const focusField = field => {
      if (!field) return;
      field.current.focus();
      field.current.setSelectionRange(
        0,
        field.current.getAttribute('data-maxlengthvalue'),
      );
    };

    const setRange = e => {
      e.preventDefault();
      e.target.setSelectionRange(
        0,
        e.target.getAttribute('data-maxlengthvalue'),
      );
    };

    const keyDownHandler = (e, max, min) => {
      if (![8, 37, 38, 39, 40].includes(e.keyCode)) return true;
      const type = e.target.id;
      e.preventDefault();
      if (e.keyCode === ARROW_UP || e.keyCode === ARROW_DOWN) {
        if (time[type] === '' && type === 'hour')
          return dispatch({ type, payload: '01' });
        else if (time[type] === '') return dispatch({ type, payload: '00' });
        if (parseInt(time[type]) < min || parseInt(time[type]) > max)
          return false;
        if (e.keyCode === ARROW_UP && parseInt(time[type]) <= max) {
          const num = parseInt(time[type]);
          if (type === 'hour' && timeFormat === 'am') {
            dispatch({
              type,
              payload: num === max ? '01' : pad(num + 1),
            });
            num === max && setTimeFormat('pm');
          } else num < max && dispatch({ type, payload: pad(num + 1, type) });
        } else if (e.keyCode === ARROW_DOWN && parseInt(time[type]) >= min) {
          const num = parseInt(time[type]);
          if (type === 'hour' && timeFormat === 'pm') {
            dispatch({
              type,
              payload: num === min ? '12' : pad(num - 1),
            });
            num === min && setTimeFormat('am');
          } else dispatch({ type, payload: pad(num - 1, type) });
        }
      } else if ([ARROW_LEFT, 8].includes(e.keyCode)) {
        focusField(prevRef[type]);
        e.keyCode === 8 && dispatch({ type, payload: '' });
      } else if (ARROW_RIGHT === e.keyCode) {
        focusField(nextRef[type]);
      }
      setRange(e);
    };

    const handleFocus = () => {
      setFocus(true);
      if (!browser) return;
      switch (browser.name) {
        case ['', 'safari'].includes(browser.name):
          setIconRight('3.5rem');
          break;
        default:
          setIconRight('1rem');
      }
    };

    // Single functions to handle all blurs
    const blurHandlerType = ({ id, value }, max, min) => {
      if (value === '') return false;
      const inRange = parseInt(value) <= max && parseInt(value) >= min;
      let tempInput = inRange ? pad(value, id) : pad(time[id][0], id);
      dispatch({ type: id, payload: tempInput });
    };

    const handleBlurInput = ({ target: { id, value } }) => {
      switch (id) {
        case 'hour':
          blurHandlerType({ id, value }, is12HourFormat ? 12 : 24, 0);
          break;
        case 'minute':
          blurHandlerType({ id, value }, 59, 0);
          break;
        case 'second':
          blurHandlerType({ id, value }, 59, 0);
      }
    };

    const handleChangedInputForType = ({ id, value, max, min }) => {
      const type = id;
      let tempValue;
      if (isNaN(value))
        tempValue = pad(isNaN(time[type]) ? 1 : time[type], type);
      else if (parseInt(value) < min || parseInt(value) > max) {
        tempValue = time[type] ? time[type] : 1;
      } else tempValue = value;
      dispatch({ type, payload: tempValue });
      value.length === 2 && focusField(nextRef[type]);
    };

    const handleChangedInput = e => {
      if (!/^\d{1,2}$/.test(e.target.value)) return;
      e.persist();
      handleChangedInputForType(e.target);
    };

    const onFocus = ({ target }) => {
      target.setSelectionRange(0, target.getAttribute('data-maxlengthvalue'));
    };

    return (
      <Container className={className} ref={ref} {...otherProps}>
        <StyledLabel disabled={disabled} htmlFor={name}>
          {children}
          <Input
            error={error}
            touched={touched}
            onFocus={handleFocus}
            onBlur={onBlur}
          >
            {isHour ? (
              <StyledSingleInputTime
                id="hour"
                value={time.hour}
                data-maxlengthvalue={2}
                maxLength={2}
                max={is12HourFormat ? 12 : 24}
                onBlur={handleBlurInput}
                onChange={handleChangedInput}
                placeholder="HH"
                type="text"
                autoComplete="off"
                ref={hourRef}
                onFocus={onFocus}
                min={1}
                onKeyDown={e => keyDownHandler(e, is12HourFormat ? 12 : 24, 1)}
              />
            ) : null}
            {':'}
            {isMinute ? (
              <StyledSingleInputTime
                id="minute"
                value={time.minute}
                data-maxlengthvalue={2}
                maxLength={2}
                max={59}
                onBlur={handleBlurInput}
                onChange={handleChangedInput}
                placeholder="MM"
                type="text"
                ref={minuteRef}
                autoComplete="off"
                onFocus={onFocus}
                min={0}
                onKeyDown={e => keyDownHandler(e, 59, 0)}
              />
            ) : null}
            {':'}
            {isSecond ? (
              <StyledSingleInputTime
                id="second"
                value={time.second}
                maxLength={4}
                max={59}
                data-maxlengthvalue={2}
                ref={secondRef}
                onBlur={handleBlurInput}
                onChange={handleChangedInput}
                placeholder="SS"
                type="text"
                autoComplete="off"
                onFocus={onFocus}
                minLength={1}
                min={0}
                onKeyDown={e => keyDownHandler(e, 59, 0)}
              />
            ) : null}
            {timeFormat}
          </Input>
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

const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  justify-content: flex-start;
  background-color: white;
  padding-left: 1.2rem;
  height: 4rem;
  margin-top: 1.4rem;
  border: 0.1rem solid;
  border-color: ${({ error, touched, theme }) =>
    error
      ? theme.status.error
      : touched && !error
      ? theme.status.succes
      : theme.ui.outline};
  border-radius: 0.3rem;
`;

Input.displayName = 'Input';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
`;

const StyledSingleInputTime = styled.input`
  flex-grow: 0;
  flex-shrink: 0;
  width: 2.9rem;
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

StyledSingleInputTime.displayName = 'SingleInputTime';

const Container = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  position: relative;
  height: 9rem;
`;

Container.displayName = 'Container';
TimeInput.displayName = 'TimeInput';

TimeInput.defaultProps = {
  disabled: false,
  touched: false,
  otherProps: {},
  value: { hour: '', minute: '', second: '' },
  isHour: true,
  isMinute: true,
  isSecond: true,
  is12HourFormat: true,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};
TimeInput.propTypes = {
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
  /** Current value of the input element as { hour: 'hh', minute: 'mm', second: 'ss' } */
  value: oneOfType([
    string,
    shape({
      hour: oneOfType([string, number]),
      minute: oneOfType([string, number]),
      second: oneOfType([string, number]),
    }),
  ]),
  /** Adds extra props to the element */
  otherProps: object,
  isHour: bool,
  isMinute: bool,
  isSecond: bool,
  is12HourFormat: bool,
};
export default TimeInput;
