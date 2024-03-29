import React, { useState, useRef, useEffect } from 'react';
import { bool, string, object, func, node, oneOfType } from 'prop-types';
import styled from 'styled-components';
import { formatISO } from 'date-fns';
import Checkmark from '../../assets/checkmark';
import Errormark from '../../assets/errormark';

const DateInputV4 = ({
  className,
  name,
  disabled,
  error,
  value: passedValue,
  initialValue,
  onChange,
  onBlur,
  onFieldChange,
  onFieldBlur,
  children,
  iso,
  allowIncomplete,
  dataTestId,
  touched,
  withIcon,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue || passedValue);
  const [returnType, setReturnType] = useState('iso');
  const [lastPressedKey, setLastPressedKey] = useState();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const BACKSPACE = 8;
  const KEY_E = 69;
  const PERIOD = 190;
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
    if (value instanceof Date) {
      setReturnType(iso ? 'iso' : 'date');
      return {
        day: pad(value.getDate()),
        month: pad(value.getMonth()),
        year: value.getFullYear(),
      };
    } else if (typeof value === 'object') {
      setReturnType(iso ? 'iso' : 'object');
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
        // Month +1 to adjust for javascript date starting from 00
        month: pad(isoDate.getMonth() + 1),
        year: isoDate.getFullYear(),
      };
    } else if (typeof value === 'string') {
      if (value.includes('-') && value.includes('/')) {
        throw new Error('No valid seperators, use / or -');
      }

      if (iso) {
        setReturnType('iso');
      } else {
        setReturnType(value.includes('/') ? 'slash' : 'dash');
      }
      const values = value.split(value.includes('/') ? '/' : '-');
      return {
        day: pad(values[0] || ''),
        month: pad(values[1] || ''),
        year: values[2] || '',
      };
    }
  };

  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  useEffect(() => {
    const dateObj = getDateObjFromValue(value);
    setDate(dateObj);
  }, [value]);

  useEffect(() => {
    if (!initialValue) setValue(passedValue);
  }, [passedValue]);

  useEffect(() => {
    if (iso) {
      setReturnType('iso');
    } else {
      init(value);
    }
  }, [iso]);

  const onKeyDown = e => {
    setLastPressedKey(e.keyCode);
    if (e.keyCode === KEY_E || e.keyCode === PERIOD) {
      e.preventDefault();
    } else if (
      ![BACKSPACE, ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT].includes(
        e.keyCode,
      )
    )
      return true;

    if (e.keyCode === BACKSPACE) {
      if (e.target.value?.length === 0) {
        e.preventDefault();
        handlePreviousField(e.target.name, true);
      }
    } else {
      e.preventDefault();
    }

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
        // -1 to correct for javascript month starting from 00
        return formatISO(new Date(_date.year, _date.month - 1, _date.day));
      default:
        throw new Error('Return type not found');
    }
  };

  const allDatePropsDefined = _date => {
    return Boolean(
      _date?.day && _date?.month && String(_date?.year)?.length > 3,
    );
  };

  const isDateEmpty = _date => {
    return !(_date?.day || _date?.month || _date?.year);
  };

  /** Callback with complete value */
  const handleChange = (_date, _returnType) => {
    const returnValue = getReturnDate(_date, _returnType);
    if (allowIncomplete || allDatePropsDefined(_date))
      onChange({
        name,
        value: returnValue,
        dateObj: _date,
        isValid: allDatePropsDefined(_date),
        isEmpty: isDateEmpty(_date),
      });
    else
      onChange({
        name,
        value: undefined,
        dateObj: _date,
        isValid: allDatePropsDefined(_date),
        isEmpty: isDateEmpty(_date),
      });
  };

  /** Callback with complete value */
  const handleBlur = (_date, _returnType) => {
    const returnValue = getReturnDate(_date, _returnType);
    if (allowIncomplete || allDatePropsDefined(_date))
      onBlur({
        name,
        value: returnValue,
        dateObj: _date,
        isValid: allDatePropsDefined(_date),
        isEmpty: isDateEmpty(_date),
      });
    else
      onBlur({
        name,
        value: undefined,
        dateObj: _date,
        isValid: allDatePropsDefined(_date),
        isEmpty: isDateEmpty(_date),
      });
  };

  const handlePreviousField = (name, noSelect) => {
    if (name === 'month') {
      dayRef.current.focus();
      !noSelect && dayRef.current.select();
      return true;
    } else if (name === 'year') {
      monthRef.current.focus();
      !noSelect && monthRef.current.select();
      return true;
    }
    return false;
  };

  const handleNextField = name => {
    if (name === 'day') {
      monthRef.current.focus();
      monthRef.current.select();
      return true;
    } else if (name === 'month') {
      yearRef.current.focus();
      yearRef.current.select();
      return true;
    }
    return false;
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
    if (name === 'year' ? value?.length > 4 : value.length > 2) return;

    let moved = false;
    if (name === 'day') {
      if (isFalseNumber(name, value)) {
        return;
      } else if (
        (value?.length === 2 || (value > 3 && lastPressedKey !== BACKSPACE)) &&
        move
      ) {
        moved = handleNextField(name);
      } else if (value?.length > 2) {
        value = value.substring(0, 2);
      }
    } else if (name === 'month') {
      if (isFalseNumber(name, value)) {
        return;
      } else if (
        (value?.length === 2 || (value > 1 && lastPressedKey !== BACKSPACE)) &&
        move
      ) {
        moved = handleNextField(name);
      } else if (value?.length > 2) {
        value = value.substring(0, 2);
      }
    } else if (name === 'year' && value?.length > 4) {
      return;
    }

    const changedDate = { ...date, [name]: moved ? pad(value || '') : value };
    setDate(changedDate);
    onFieldChange({ name, value });
    handleChange(changedDate, returnType);
  };

  const handleFieldBlur = ({ target: { name, value } }) => {
    let changedDate;
    if (name !== 'year') changedDate = { ...date, [name]: pad(value || '') };
    else changedDate = { ...date, [name]: value || '' };
    setDate(changedDate);
    onFieldBlur({ name, value });
    handleBlur(changedDate, returnType);
  };

  const handleOnPaste = (e, maxLength) => {
    const pastedText = (e.clipboardData || window.clipboardData).getData(
      'text',
    );
    // Avoids the ability to paste text with alphabetic characeters and/or longer than the given max length
    if (!new RegExp(`^\\d{1,${maxLength}}$`).test(pastedText))
      e.preventDefault();
  };

  return (
    <Container
      className={className}
      name={name}
      hasChildren={!!children}
      {...rest}
    >
      <StyledLabel disabled={disabled}>
        {children}
        <Input
          disabled={disabled}
          error={error}
          touched={touched}
          hasChildren={!!children}
          withIcon={withIcon}
          dataTestId={dataTestId}
        >
          <DateInput
            name="day"
            placeholder="DD"
            maxLength={2}
            ref={dayRef}
            onChange={val => handleFieldChange(val, true)}
            onBlur={handleFieldBlur}
            value={date.day}
            disabled={disabled}
            onKeyDown={onKeyDown}
            type="number"
            data-test-id={`${dataTestId}_day`}
            onPaste={e => handleOnPaste(e, 2)}
          />
          <Slash>/</Slash>
          <DateInput
            name="month"
            placeholder="MM"
            maxLength={2}
            ref={monthRef}
            onChange={val => handleFieldChange(val, true)}
            onBlur={handleFieldBlur}
            value={date.month}
            disabled={disabled}
            onKeyDown={onKeyDown}
            type="number"
            data-test-id={`${dataTestId}_month`}
            onPaste={e => handleOnPaste(e, 2)}
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
            data-test-id={`${dataTestId}_year`}
            onPaste={e => handleOnPaste(e, 4)}
          />
          {withIcon && error && touched ? (
            <StyledErrormark color="#F74040" />
          ) : (
            withIcon && touched && <StyledCheckmark color="#49C562" />
          )}
        </Input>
      </StyledLabel>

      {error ? (
        <ErrorContainer className="errorBox">
          <ErrorMss name={name} component="p" className="error">
            {error}
          </ErrorMss>
        </ErrorContainer>
      ) : null}
    </Container>
  );
};

const StyledErrormark = styled(Errormark)`
  position: absolute;
  right: 1rem;
  align-self: center;
  transition: 0.2s;
`;

const StyledCheckmark = styled(Checkmark)`
  position: absolute;
  right: 1rem;
  align-self: center;
  transition: 0.2s;
`;

const ErrorContainer = styled.div`
  height: 1.5rem;
  margin-top: 0.8rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.brand.primary};
`;

const ErrorMss = styled.p`
  color: red;
  font-size: 1.1rem;
  width: 100%;
  margin-top: -1rem;
  margin-left: 0.5rem;
  text-align: right;
`;

const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.7rem;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  padding-left: 1.2rem;
  margin-top: ${({ hasChildren }) => (hasChildren ? '0.8rem' : 0)};
  border: 1px solid;
  height: 4rem;
  border-color: ${({ error, touched, theme, withIcon }) =>
    error
      ? theme.status.error
      : touched && withIcon && !error
      ? theme.status.succes
      : '#e4e4e4'};
  border-radius: 3px;
`;

const Slash = styled.span`
  color: #757575;
  margin: 2px 1px 1px 1px;
  font-size: 1.8rem;
`;

const DateInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: ${({ year }) => (year ? '5rem' : '3.3rem')};
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
  color: ${({ disabled, theme }) =>
    disabled ? theme.ui.disabled : theme.labels.guaranteeText};
  line-height: 120%;
`;

const Container = styled.div`
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  height: ${({ hasChildren }) => (hasChildren ? '9rem' : 'auto')};
`;

DateInputV4.defaultProps = {
  disabled: false,
  onBlur: () => {},
  onChange: () => {},
  onFieldChange: () => {},
  onFieldBlur: () => {},
};

DateInputV4.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Name of input and label */
  name: string,
  /** Label above the input */
  children: node,
  /** Is the input field disabled */
  disabled: bool,
  /** Error for the input */
  error: string,
  /** Callback function that is fired when focusing any input field. */
  onChange: func,
  /** Callback function that is fired when changing any input field. */
  onBlur: func,
  /** Callback function that is fired when focusing a single input field. */
  onFieldChange: func,
  /** Callback function that is fired when changing a single input field. */
  onFieldBlur: func,
  /** Current value of the input element */
  value: oneOfType([object, string]),
  /** The initial value of the date, use onChange to get updated values */
  initialValue: oneOfType([object, string]),
  /** Force return as ISO */
  iso: bool,
  /** Allow incomplete dates to be returned to the onChange and onBlur */
  allowIncomplete: bool,
  /** Adds extra props to the element */
  rest: object,
  /** Test id for data */
  dataTestId: string,
  /** Has field been touched */
  touched: bool,
  /** Should field include icons */
  withIcon: bool,
};

export default DateInputV4;
