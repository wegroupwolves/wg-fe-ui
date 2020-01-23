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
  func,
  node,
  oneOfType,
  shape,
} from 'prop-types';

import styled from 'styled-components';
import { detect } from 'detect-browser';
import Error from './../Messages/Error';
import ValidationIcons from './../Inputs/ValidationIcons';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
      if (e.keyCode === 27) return handler();
      ref.current && !ref.current.contains(e.target) && handler();
    };
    document.addEventListener('keyup', listener);
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('keyup', listener);
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

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
      validFunc,
      children,
      ...otherProps
    },
    ref,
  ) => {
    // Pad the value -> pad(4) returns '04', pad(11) returns '11'
    const pad = n => {
      if (!parseInt(n)) return '';
      return parseInt(n) < 10 ? `0${parseInt(n)}` : n;
    };

    const init = () => {
      if (typeof value === 'object')
        return {
          day: pad(value.day),
          month: pad(value.month),
          year: value.year,
        };
      const values = value.split('/');
      return { day: pad(values[0]), month: pad(values[1]), year: values[2] };
    };
    const [date, dispatch] = useReducer((state, { type, payload }) => {
      switch (type) {
        case 'day':
          return { ...state, day: payload };
        case 'month':
          return { ...state, month: payload };
        case 'year':
          return { ...state, year: payload };
        default:
          return { ...state };
      }
    }, init(value));

    const browser = detect();
    const [focus, setFocus] = useState();
    const [iconRight, setIconRight] = useState('1rem');
    const dayRef = useRef();
    const monthRef = useRef();
    const yearRef = useRef();

    const ARROW_LEFT = 37;
    const ARROW_UP = 38;
    const ARROW_RIGHT = 39;
    const ARROW_DOWN = 40;

    useClickOutside(ref, () => setFocus(false));

    const isDate = () => {
      const d = `${date.day}/${date.month}/${date.year}`;
      return /\d{2}\/\d{2}\/\d{4}/.test(d);
    };

    useEffect(() => {
      if (!isDate()) return;
      if (validFunc && !validFunc(`${date.day}/${date.month}/${date.year}`)) return;
      onChange({ name, value: `${date.day}/${date.month}/${date.year}` });
      !touched && setFocus(false);
    }, [date.day, date.month, date.year]);

    const prevRef = {
      day: null,
      month: dayRef,
      year: monthRef,
    };

    const nextRef = {
      day: monthRef,
      month: yearRef,
      year: null,
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
        if (date[type] === '') return dispatch({ type, payload: '01' });
        if (parseInt(date[type]) < min || parseInt(date[type]) > max)
          return false;
        if (e.keyCode === ARROW_UP && parseInt(date[type]) < max)
          dispatch({ type, payload: pad(parseInt(date[type]) + 1) });
        else if (e.keyCode === ARROW_DOWN && parseInt(date[type]) > min)
          dispatch({ type, payload: pad(parseInt(date[type]) - 1) });
        setRange(e);
      } else if ([ARROW_LEFT, 8].includes(e.keyCode)) {
        focusField(prevRef[type]);
        type === 'day' && setRange(e);
        e.keyCode === 8 && dispatch({ type, payload: '' });
      } else if (ARROW_RIGHT === e.keyCode) {
        setRange(e);
        focusField(nextRef[type]);
      }
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
      const inRange = parseInt(value) < max && parseInt(value) >= min;
      let tempInput = inRange ? pad(value) : pad(date[id][0]);
      dispatch({ type: id, payload: tempInput });
    };

    const handleBlurInput = ({ target: { id, value } }) => {
      if (id === 'year') dispatch({ type: 'year', payload: value });
      switch (id) {
        case 'day':
          blurHandlerType({ id, value }, 32, 0);
          break;
        case 'month':
          blurHandlerType({ id, value }, 13, 0);
      }
    };

    const handleChangedInputForType = ({ id, value }, max, min) => {
      const type = id;
      let tempValue;
      if (isNaN(value)) tempValue = pad(isNaN(date[type]) ? 1 : date[type]);
      else if (parseInt(value) < min || parseInt(value) > max) {
        tempValue = date[type] ? date[type] : 1;
      }
      if (type === 'year') {
        tempValue = value.length > 4 ? date[type] : value;
      } else {
        tempValue = value.length > 2 ? date[type] : value;
      }
      dispatch({ type, payload: tempValue });
      value.length === 2 && focusField(nextRef[type]);
    };

    const handleChangedInput = e => {
      if (!/^\d{1,4}$/.test(e.target.value)) return;
      e.persist();
      handleChangedInputForType(e.target, 32, 0);
    };

    // const handleCalendarChange = dateStr => {
    //   const date = new Date(dateStr);
    //   const payload = {
    //     day: pad(date.getDate()),
    //     month: pad(date.getMonth() + 1),
    //     year: date.getFullYear(),
    //   };
    //   setFocus(false);
    //   dispatch({ type: 'full', payload });
    // };

    const onFocus = ({ target }) => {
      target.setSelectionRange(0, target.getAttribute('data-maxlengthvalue'));
    };

    // const calendarDate = date.day
    //   ? new Date(
    //       date.year,
    //       parseInt(date.month) - 1 > -1 ? parseInt(date.month) - 1 : date.month,
    //       date.day,
    //     )
    //   : new Date();

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
            <StyledSingleInputDate
              id="day"
              value={date.day}
              data-maxlengthvalue={2}
              maxLength={2}
              maxValue={31}
              onBlur={handleBlurInput}
              onChange={handleChangedInput}
              placeholder="dd"
              type="text"
              autoComplete="off"
              ref={dayRef}
              onFocus={onFocus}
              min={1}
              onKeyDown={e => keyDownHandler(e, 31, 1)}
            />
            {'/'}
            <StyledSingleInputDate
              id="month"
              value={date.month}
              data-maxlengthvalue={2}
              maxLength={2}
              maxValue={12}
              onBlur={handleBlurInput}
              onChange={handleChangedInput}
              placeholder="mm"
              type="text"
              ref={monthRef}
              autoComplete="off"
              onFocus={onFocus}
              min={1}
              onKeyDown={e => keyDownHandler(e, 12, 1)}
            />
            {'/'}
            <StyledSingleInputDate
              id="year"
              value={date.year}
              maxLength={4}
              data-maxlengthvalue={9999}
              ref={yearRef}
              onBlur={handleBlurInput}
              onChange={handleChangedInput}
              placeholder="yyyy"
              type="text"
              autoComplete="off"
              onFocus={onFocus}
              minLength={1}
              min={1}
              onKeyDown={e => keyDownHandler(e, 9999, 0)}
            />
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

// const StyledCalendar = styled(Calendar)`
//   min-width: 27rem;
//   position: absolute;
//   z-index: 2;
// `;

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
  line-height: 1rem;
  color: ${props => (props.disabled ? '#AEAEAE' : '#5B5550')};
`;

const StyledSingleInputDate = styled.input`
  flex-grow: 0;
  flex-shrink: 0;
  width: ${({ id }) => (id === 'year' ? '5rem' : '2.9rem')};
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
  font-family: ${({ theme }) => theme.fonts};
  position: relative;
  height: 9rem;
`;

Container.displayName = 'Container';
DateInput.displayName = 'DateInput';

DateInput.defaultProps = {
  disabled: false,
  touched: false,
  isCalendarEnabled: false,
  otherProps: {},
  value: '',
  onBlur: () => { },
  onChange: () => { },
  onFocus: () => { },
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
  /** show calendar on focus */
  isCalendarEnabled: bool,
  /** object with inputname and boolean to check if touched */
  touched: bool,
  /** Callback function that is fired when blurring the input field. */
  onBlur: func,
  /** Callback function that is fired when focusing the input field. */
  onChange: func,
  /** Callback function that is fired when the component's value changes. */
  onFocus: func,
  /** Current value of the input element as { day: 'DD', month: 'MM', year: 'YYYY' } */
  value: oneOfType([
    string,
    shape({
      day: oneOfType([string, number]),
      month: oneOfType([string, number]),
      year: oneOfType([string, number]),
    }),
  ]),
  validFunc: func,
  /** Adds extra props to the element */
  otherProps: object,
};
export default DateInput;
