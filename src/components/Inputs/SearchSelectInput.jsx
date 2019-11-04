import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { func, string, bool, array, object } from 'prop-types';
import { key } from 'styled-theme';

const SearchSelectInput = forwardRef(
  (
    {
      className,
      onSelected,
      loading,
      options,
      name,
      disabled,
      children,
      initial,
      noOptionMessage,
      loadingMessage,
      placeholder,
      isMulti,
      error,
      ...otherProps
    },
    ref,
  ) => {
    const [isSelected, setSelected] = useState();

    const handleChange = e => {
      onSelected({ name, value: e ? e.value : e });
      setSelected(e || []);
    };

    useEffect(() => {
      if (loading || !options.length || options === []) {
        setSelected('');
      }

      if (initial) {
        setSelected(initial);
      }
    }, [options]);

    return (
      <Container className={className}>
        <Label disabled={disabled}>
          {children}
          <Input
            ref={ref}
            isDisabled={disabled}
            onChange={handleChange}
            options={options}
            value={isSelected}
            noOptionsMessage={() => noOptionMessage}
            placeholder={loading ? loadingMessage : placeholder}
            classNamePrefix="Select"
            isMulti={isMulti}
            closeMenuOnSelect={!isMulti}
            error={error ? true : false}
            {...otherProps}
            error={error}
          />
        </Label>
        {error ? (
          <ErrorContainer>
            <p>{error}</p>
          </ErrorContainer>
        ) : null}
      </Container>
    );
  },
);

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
  font-size: 1.2rem;
  color: ${key('colors.bad')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${key('fonts.primary')};
`;

const Input = styled(Select)`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }

  & .Select {
    &__control {
      border-radius: 0.3rem;
      border: 0.1rem solid;
      border-color: ${props =>
        props.error
          ? key('colors.bad')
          : props.touched & !props.error
          ? key('colors.good')
          : key('colors.outline')};
      box-shadow: none;
      height: ${({ isMulti }) => (isMulti ? 'fit-content' : '4.5rem')};

      &:hover {
        border-color: ${key('colors.interactive')};
      }
    }

    &__control--menu-is-open {
      &:hover {
        border-color: ${key('colors.interactive')};
      }

      .Select__dropdown-indicator {
        & svg {
          transform: rotate(180deg);
          transition: 0.1s ease;
        }
      }
    }

    &__value-container {
      padding: 0 0.5em;
      font-size: ${key('fonts.normal-size')};
    }

    &__single-value {
      color: black;
      overflow: visible;
    }

    &__menu {
      font-size: 1.8rem;
      z-index: 999;
    }

    &__menu-list {
      max-height: 13rem;
      padding: 0;
    }

    &__menu-notice--no-options {
      text-align: left;
      font-size: 1.2rem;
    }

    &__option {
      font-size: 1.4rem;
      color: ${key('colors.sub-txt')};
      padding: 1rem;

      :hover {
        cursor: pointer;
        background-color: ${key([`colors`, `hover`])};
        color: ${key([`colors`, `toggle`])};
        /* color: ${key('colors.sub-txt')}; */
        /* color: white; */
      }

      &--is-focused {
        /* color: white; */
        color: ${key([`colors`, `toggle`])};
        background-color: ${key([`colors`, `hover`])};
      }

      &--is-selected {
        color: ${key([`colors`, `action`])};
        background-color: white;
      }
    }
    &__multi-value {
      background: rgba(255, 128, 0, 0.05);
      border: 1px solid ${key(['colors', 'action'])};
      box-sizing: border-box;
      border-radius: 3px;

      &__label {
        color: ${key(['colors', 'action'])};
        line-height: 1.8rem;
        box-sizing: border-box;
      }
      &__remove {
        cursor: pointer;
        svg {
          fill: ${key(['colors', 'action'])};
        }

        &:hover {
          background-color: initial;
        }
      }
    }
    &__indicators {
      ${({ isMulti }) => (isMulti ? 'display: none' : null)};
    }
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  transition: 0.2s;
  line-height: 1rem;
  color: ${props =>
    props.disabled ? key('colors.disabled') : key('colors.sub-title')};
`;

SearchSelectInput.displayName = 'SearchSelectInput';

SearchSelectInput.defaultProps = {
  disabled: false,
  loading: false,
  noOptionMessage: 'No options',
  loadingMessage: 'Loading...',
  placeholder: 'Choose your option',
  initial: null,
  isMulti: false,
  otherProps: {},
};

SearchSelectInput.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Returns name and value of selected */
  onSelected: func.isRequired,
  /** Sets name of inputfield */
  name: string.isRequired,
  /** if true input is disabled */
  disabled: bool,
  /** string with errormessage */
  error: string,
  /** label above the input */
  children: string.isRequired,
  /** array of objects {value: 'test', label: 'Test'} */
  options: array.isRequired,
  /** set true if options are loading */
  loading: bool,
  /** name that sets selected on load */
  initial: object,
  /** Message to show when options are empty */
  noOptionMessage: string,
  /** Message to show when loading is true */
  loadingMessage: string,
  /** Message to show on load when no initial */
  placeholder: string,
  /** Defines if it can handle multiple tags */
  isMulti: bool,
  /** Adds extra props to the element */
  otherProps: object,
};

export default SearchSelectInput;
