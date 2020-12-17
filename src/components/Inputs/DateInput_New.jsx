/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
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

  const [date, setDate] = useState(getDateObjFromValue());
  const [returnType, setReturnType] = useState('iso');

  const monthRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    const dateObj = getDateObjFromValue();
    setDate(dateObj);
  }, [value]);

  const pad = n => {
    if (!parseInt(n)) return '';
    return parseInt(n) < 10 ? `0${parseInt(n)}` : n;
  };

  const isISODate = date => {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(date)) return false;
    var d = new Date(date);
    return d.toISOString() === date;
  };

  const formatISODate = date => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const formattedDate =
      (day <= 9 ? '0' + day : day) +
      '/' +
      (month <= 9 ? '0' + month : month) +
      '/' +
      newDate.getFullYear();
    return formattedDate;
  };

  /**
   * Initializes a date object for multiple input types with error handling
   * @param {*} value The date value in string, object or ISO format
   */
  const init = value => {
    console.log(value);
    if (typeof value === 'object') {
      setReturnType('object');
      return {
        day: pad(value.day),
        month: pad(value.month),
        year: value.year,
      };
    } else if (isISODate(value)) {
      setReturnType('iso');
      const values = formatISODate(value).split('/');
      return { day: pad(values[0]), month: pad(values[1]), year: values[2] };
    } else if (typeof value === 'string') {
      if (value.contains('-') && value.contains('/')) {
        throw new Error('No valid seperators, use / or -');
      }
      if (value.contains('-') && value.contains('/')) {
        throw new Error('Date contains / and -, use only 1 for a date');
      }

      setReturnType(value.contains('/') ? 'slash' : 'dash');
      const values = value.split(value.contains('/') ? '/' : '-');
      return {
        day: pad(values[0] || ''),
        month: pad(values[1] || ''),
        year: values[2] || '',
      };
    } else {
      throw new Error('Wrong date input given, please try to use ISO.');
    }
  };

  const getReturnDate = (_date, _returnType) => {
    if (!date) throw new Error('No date object provided');

    switch (_returnType) {
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
  const handleChange = () => {
    const returnValue = getReturnDate(date, returnType);
    onChange({ name, returnValue });
  };

  /** Callback with complete value */
  const handleBlur = () => {
    const returnValue = getReturnDate(date, returnType);
    onBlur({ name, returnValue });
  };

  /** Callback with single value */
  const handleFieldChange = ({ target: { name, value } }) => {
    console.log('Handled change');
    if (name === 'day' && value?.length === 2) {
      monthRef.current.focus();
    } else if (name === 'month' && value?.length === 2) {
      yearRef.current.focus();
    }

    setDate(date => ({ ...date, [name]: value }));
    onFieldChange({ name, value });
    handleChange();
  };

  const handleFieldBlur = ({ target: { name, value } }) => {
    if (name !== 'year')
      setDate(date => ({ ...date, [name]: pad(value || '') }));
    onFieldBlur({ name, value });
    handleBlur();
  };

  return (
    <Container className={className} name={name} {...rest}>
      <StyledLabel disabled={disabled} />
      {children}
      <Input>
        <DateInput
          name="day"
          placeholder="DD"
          maxLength={2}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          value={date.day}
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
          type="number"
          year
        />
      </Input>
    </Container>
  );
};

const Input = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.7rem;
  width: 100%;
  background-color: white;
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
  value: oneOfType([
    string,
    shape({
      day: oneOfType([string, number]),
      month: oneOfType([string, number]),
      year: oneOfType([string, number]),
    }),
  ]),
  validate: func,
  /** Adds extra props to the element */
  rest: object,
};

export default DateinputNew;
