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

const DateinputNew = ({
  className,
  name,
  disabled,
  error,
  touched,
  value,
  onBlur,
  onChange,
  validate,
  children,
  ...otherProps
}) => {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  const monthRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    if (value) {
      const dateObj = init(value) || {};
      Object.keys(dateObj).forEach(name => {
        setDate(date => ({ ...date, [name]: dateObj[name] }));
      });
    }
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

  const init = value => {
    if (typeof value === 'object') {
      return {
        day: pad(value.day),
        month: pad(value.month),
        year: value.year,
      };
    } else if (isISODate(value)) {
      const values = formatISODate(value).split('/');
      return { day: pad(values[0]), month: pad(values[1]), year: values[2] };
    } else {
      const values = value.split('/');
      return {
        day: pad(values[0] || ''),
        month: pad(values[1] || ''),
        year: values[2] || '',
      };
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'day' && value?.length === 2) {
      monthRef.current.focus();
    } else if (name === 'month' && value?.length === 2) {
      yearRef.current.focus();
    }

    setDate(date => ({ ...date, [name]: value }));
  };

  return (
    <Container className={className} {...otherProps}>
      <StyledLabel disabled={disabled} htmlFor={name} />
      {children}
      <Input>
        <DateInput
          name="day"
          placeholder="DD"
          maxLength={2}
          onChange={handleChange}
          value={date.day}
        />
        <Slash>/</Slash>
        <DateInput
          name="month"
          placeholder="MM"
          maxLength={2}
          ref={monthRef}
          onChange={handleChange}
          value={date.month}
        />
        <Slash>/</Slash>
        <DateInput
          name="year"
          placeholder="YYYY"
          maxLength={4}
          ref={yearRef}
          onChange={handleChange}
          value={date.year}
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
  validate: func,
  /** Adds extra props to the element */
  otherProps: object,
};

export default DateinputNew;
