/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { bool, string, object, func, node, oneOfType } from 'prop-types';
import styled from 'styled-components';
import { formatISO } from 'date-fns';

const DateinputNew = ({
  className,
  name,
  disabled,
  error,
  touched,
  value,
  onChange,
  onBlur,
  onFieldChange,
  onFieldBlur,
  validate,
  children,
  ...rest
}) => {
  const [returnType, setReturnType] = useState('iso');
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const ARROW_LEFT = 37;
  const ARROW_UP = 38;
  const ARROW_RIGHT = 39;
  const ARROW_DOWN = 40;

  /** Converts the value to a date object */
  const getDateObjFromValue = value => {
    let dateObj = {
      day: '',
      month: '',
      year: '',
    };

    if (value) {
      const valueDateObject = init(value) || {};
      Object.keys(valueDateObject).forEach(name => {
        dateObj = { ...dateObj, [name]: valueDateObject[name] };
      });
    }

    return dateObj;
  };

  const pad = n => {
    if (!parseInt(n)) return '';
    return parseInt(n) < 10 ? `0${parseInt(n)}` : n;
  };

  const isISODate = date => {
    return /[+-]?\d{4}(-[01]\d(-[0-3]\d(T[1-2]\d:[0-5]\d:?([0-5]\d(\.\d+)?)?[+-][0-2]\d:[0-5]\dZ?)?)?)/.test(
      date,
    );
  };

  /**
   * Initializes a date object for multiple input types with error handling
   * @param {*} value The date value in string, object or ISO format
   */
  const init = value => {
    // Don't remove ISO date month + 1, month 0 => January
    if (value instanceof Date) {
      setReturnType('date');
      return {
        day: pad(value.getDate()),
        month: pad(value.getMonth() + 1),
        year: value.getFullYear(),
      };
    } else if (typeof value === 'object') {
      setReturnType('object');
      return {
        day: pad(value.day),
        month: pad(value.month),
        year: value.year,
      };
    } else if (isISODate(value)) {
      setReturnType('iso');
      const isoDate = new Date(value);
      return {
        day: pad(isoDate.getDate()),
        month: pad(isoDate.getMonth() + 1),
        year: isoDate.getFullYear(),
      };
    } else if (typeof value === 'string') {
      if (value.includes('-') && value.includes('/')) {
        throw new Error('No valid seperators, use / or -');
      }
      if (value.includes('-') && value.includes('/')) {
        throw new Error('Date contains / and -, use only 1 for a date');
      }

      setReturnType(value.includes('/') ? 'slash' : 'dash');
      const values = value.split(value.includes('/') ? '/' : '-');
      return {
        day: pad(values[0] || ''),
        month: pad(values[1] || ''),
        year: values[2] || '',
      };
    } else {
      throw new Error('Wrong date input given, please try to use ISO.');
    }
  };

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    const dateObj = getDateObjFromValue(value);
    setDate(dateObj);
  }, [value]);

  const onKeyDown = e => {
    if (e.keyCode === 69 || e.keyCode === 190) {
      e.preventDefault();
    } else if (![8, 37, 38, 39, 40].includes(e.keyCode)) return true;

    if (e.keyCode !== 8) e.preventDefault();

    switch (e.keyCode) {
      case ARROW_UP:
        if (!isFalseNumber(e.target.name, Number(e.target.value) + 1)) {
          e.target.value = pad(Number(e.target.value) + 1);
          return handleFieldChange(e, false);
        }
        break;
      case ARROW_DOWN:
        if (!isFalseNumber(e.target.name, Number(e.target.value) - 1)) {
          e.target.value = pad(Number(e.target.value) - 1);
          return handleFieldChange(e, false);
        }
        break;
      case ARROW_LEFT:
        return handlePreviousField(e.target.name);
      case ARROW_RIGHT:
        return handleNextField(e.target.name);
    }
  };

  const getReturnDate = (_date, _returnType) => {
    if (!date) throw new Error('No date object provided');

    switch (_returnType) {
      case 'date':
        return new Date(_date.year, _date.month, _date.day);
      case 'object':
        return _date;
      case 'slash':
        return `${_date.day}/${_date.month}/${_date.year}`;
      case 'dash':
        return `${_date.day}-${_date.month}-${_date.year}`;
      case 'iso':
        return formatISO(new Date(_date.year, _date.month, _date.day));
      default:
        throw new Error('Return type not found');
    }
  };

  /** Callback with complete value */
  const handleChange = (_date, _returnType) => {
    const returnValue = getReturnDate(_date, _returnType);
    onChange({ name, value: returnValue });
  };

  /** Callback with complete value */
  const handleBlur = (_date, _returnType) => {
    const returnValue = getReturnDate(_date, _returnType);
    onBlur({ name, value: returnValue });
  };

  const handlePreviousField = name => {
    if (name === 'month') {
      dayRef.current.focus();
      dayRef.current.select();
    } else if (name === 'year') {
      monthRef.current.focus();
      monthRef.current.select();
    }
  };

  const handleNextField = name => {
    if (name === 'day') {
      monthRef.current.focus();
      monthRef.current.select();
    } else if (name === 'month') {
      yearRef.current.focus();
      yearRef.current.select();
    }
  };

  const isFalseNumber = (name, value) => {
    if (name === 'day') {
      return value > 31 || value < 0;
    } else if (name === 'month') {
      return value > 12 || value < 0;
    } else {
      return false;
    }
  };

  /** Callback with single value */
  const handleFieldChange = ({ target: { name, value } }, move) => {
    if (name === 'day') {
      if (isFalseNumber(name, value)) {
        return;
      } else if (value?.length === 2 && move) {
        handleNextField(name);
      } else if (value?.length > 2) {
        value = value.substring(0, 2);
      }
    } else if (name === 'month') {
      if (isFalseNumber(name, value)) {
        return;
      } else if (value?.length === 2 && move) {
        handleNextField(name);
      } else if (value?.length > 2) {
        value = value.substring(0, 2);
      }
    } else if (name === 'year' && value?.length > 4) {
      return;
    }

    const changedDate = { ...date, [name]: value };
    setDate(changedDate);
    onFieldChange({ name, value });
    handleChange(changedDate, returnType);
  };

  const handleFieldBlur = ({ target: { name, value } }) => {
    let changedDate;
    if (name !== 'year') changedDate = { ...date, [name]: pad(value || '') };
    else changedDate = { ...date, [name]: value || '' };

    onFieldBlur({ name, value });
    handleBlur(changedDate, returnType);
  };

  return (
    <Container className={className} name={name} {...rest}>
      <StyledLabel disabled={disabled}>
        {children}
        <Input disabled={disabled}>
          <DateInput
            name="day"
            placeholder="DD"
            maxLength={2}
            ref={dayRef}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            value={date.day}
            disabled={disabled}
            onKeyDown={onKeyDown}
            type="number"
          />
          <Slash>/</Slash>
          <DateInput
            name="month"
            placeholder="MM"
            maxLength={2}
            ref={monthRef}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            value={date.month}
            disabled={disabled}
            onKeyDown={onKeyDown}
            type="number"
          />
          <Slash>/</Slash>
          <DateInput
            name="year"
            placeholder="YYYY"
            maxLength={4}
            ref={yearRef}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            value={date.year}
            disabled={disabled}
            onKeyDown={onKeyDown}
            type="number"
            year
          />
        </Input>
      </StyledLabel>
    </Container>
  );
};

const Input = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.7rem;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  padding-left: 1.2rem;
  margin-top: 1.4rem;
  border: 0.1rem solid;
  height: 4rem;
  border-color: ${({ error, touched, theme }) =>
    error
      ? theme.status.error
      : touched && !error
      ? theme.status.succes
      : theme.ui.outline};
  border-radius: 0.3rem;
`;

const Slash = styled.span`
  color: #757575;
  margin: 0 0.15rem -0.1rem 0.15rem;
  font-size: 1.8rem;
`;

const DateInput = styled.input`
  outline: none;
  border: none;
  width: ${({ year }) => (year ? '5rem' : '3rem')};
  font-size: 1.5rem;
  text-align: center;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
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

const Container = styled.div`
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  height: 9rem;
`;

DateinputNew.defaultProps = {
  disabled: false,
  touched: false,
  isCalendarEnabled: false,
  otherProps: {},
  value: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

DateinputNew.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** name of input and label */
  name: string,
  /** label above the input */
  children: node,
  /** type of input: email, text, ... */
  disabled: bool,
  /** example value in the input */
  error: string,
  /** show calendar on focus */
  isCalendarEnabled: bool,
  /** object with inputname and boolean to check if touched */
  touched: bool,
  /** Callback function that is fired when focusing any input field. */
  onChange: func,
  /** Callback function that is fired when changing any input field. */
  onBlur: func,
  /** Callback function that is fired when focusing a single input field. */
  onFieldChange: func,
  /** Callback function that is fired when changing a single input field. */
  onFieldBlur: func,
  /** Callback function that is fired when the component's value changes. */
  onFocus: func,
  /** Current value of the input element as { day: 'DD', month: 'MM', year: 'YYYY' } */
  value: oneOfType([object, string]),
  validate: func,
  /** Adds extra props to the element */
  rest: object,
};

export default DateinputNew;
