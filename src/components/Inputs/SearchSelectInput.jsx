import React, { forwardRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { func, string, bool, object, node, any } from 'prop-types';
import Error from './../Messages/Error';
import CheckBox_v2 from '../v2/Checkboxes/CheckBox_v2';

const SearchSelectInput = forwardRef(
  (
    {
      async,
      className,
      onSelected,
      dataTestId,
      loading,
      loadOptions,
      options,
      name,
      value,
      disabled,
      children,
      initial,
      noOptionMessage,
      loadingMessage,
      placeholder,
      isMulti,
      error,
      withCheckmark,
      ...otherProps
    },
    ref,
  ) => {
    const [isSelected, setSelected] = useState('');

    const handleChange = option => {
      setSelected(option || []);
      if (!option) {
        onSelected({ name, value: undefined });
        return;
      }
      onSelected({
        name,
        value: Array.isArray(option) ? option : option.value,
      });
    };

    useEffect(() => {
      if (loading || !options.length || options === []) {
        setSelected('');
      }

      if (initial) {
        setSelected(initial);
      }
      if (value) setSelected(value);
    }, [value, options, initial, loading]);

    const Option = ({ isSelected, value, ...rest }) => {
      Option.propTypes = {
        isSelected: bool,
        value: any,
      };

      return (
        <div>
          <components.Option {...rest}>
            <Flex>
              <Checkbox checked={isSelected} onChange={() => null} />{' '}
              <label>{value}</label>{' '}
            </Flex>
          </components.Option>{' '}
        </div>
      );
    };

    return (
      <Container className={className}>
        <Label disabled={disabled} {...otherProps}>
          {children}
          {!async ? (
            <Input
              ref={ref}
              dataTestId={dataTestId}
              isDisabled={disabled}
              onChange={handleChange}
              name={name}
              options={options}
              value={isSelected}
              noOptionsMessage={() => noOptionMessage}
              placeholder={loading ? loadingMessage : placeholder}
              classNamePrefix="Select"
              isMulti={isMulti}
              closeMenuOnSelect={!isMulti}
              error={error ? true : false}
              {...(withCheckmark && { components: { Option } })}
              {...(withCheckmark && { hideSelectedOptions: false })}
              {...otherProps}
            />
          ) : (
            <AsyncInput
              ref={ref}
              dataTestId={dataTestId}
              isDisabled={disabled}
              onChange={handleChange}
              placeholder={loading ? loadingMessage : placeholder}
              classNamePrefix="Select"
              isMulti={isMulti}
              name={name}
              closeMenuOnSelect={!isMulti}
              error={error ? true : false}
              cacheOptions
              value={isSelected}
              loadOptions={loadOptions}
              defaultOptions
              {...(withCheckmark && { components: { Option } })}
              {...(withCheckmark && { hideSelectedOptions: false })}
              {...otherProps}
            />
          )}
        </Label>
        <Error error={error} />
      </Container>
    );
  },
);

const styles = css`
  width: 100%;
  justify-self: center;
  position: relative;
  margin-top: 0.8rem;
  margin-bottom: ${({ error }) => (error ? 0 : '2rem')};

  span {
    border-color: ${({ theme, hasValue }) =>
      hasValue ? theme.brand.primary : '#C1C1C1'};
  }

  &:focus {
    outline: ${({ theme }) => theme.brand.primary};
  }

  & .Select {
    width: 100%;
    &__control {
      border-radius: 0.5rem;
      min-height: 4.5rem;
      border: 1px solid #c1c1c1;
      position: relative;

      :hover {
        border-color: #c1c1c1;
      }

      &--is-focused {
        border-color: ${({ theme, hasValue }) =>
          hasValue ? theme.brand.primary : '#C1C1C1'};
        box-shadow: none;

        :hover {
          border-color: ${({ theme, hasValue }) =>
            hasValue ? theme.brand.primary : '#C1C1C1'};
        }
      }
    }

    &__placeholder {
      color: #c1c1c1;
    }

    &__control--menu-is-open {
      &:hover {
        border-color: ${({ theme }) => theme.ui.interactive};
      }

      .Select__dropdown-indicator {
        & svg {
          transform: rotate(180deg);
          transition: 0.1s ease;
        }
      }
    }

    &__value-container {
      padding: 0 1.2rem;
      font-size: 1.6rem;

      @media screen and (max-width: 500px) {
        font-size: 1.4rem;
      }
    }

    &__single-value {
      color: black;
      overflow: visible;
      overflow: initial;
    }

    &__menu {
      font-size: 1.6rem;
      box-shadow: none;
      top: 3rem;
      border: 1px solid #c1c1c1;
      border-top: none;
      border-radius: 0 0 0.5rem 0.5rem;
      overflow: hidden;
      position: absolute;
      background: none;
      padding-top: 0.8rem;
    }

    &__menu-list {
      max-height: 16rem;
      background-color: white;

      &::-webkit-scrollbar {
        -webkit-appearance: none;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid white; /* should match background, can't be transparent */
        background-color: #c7c7c7;
      }

      &::-webkit-scrollbar-track-piece {
        background: #f0f1f3;
        border-radius: 5px;
        width: 8px;
        border: 2px solid white; /* should match background, can't be transparent */
      }

      &::-webkit-scrollbar:vertical {
        width: 12px;
      }
      &::-webkit-scrollbar:horizontal {
        height: 8px;
      }
    }

    &__menu-notice--no-options,
    &__menu-notice--loading {
      min-height: 4.8rem;
      display: flex;
      align-items: center;
    }

    &__option {
      background: white;
      padding: 0.4rem 1.2rem;
      min-height: 4.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-bottom: 1px solid #f0f1f3;

      &:last-of-type {
        border-bottom: none;
      }

      & .custom-option_primary-label {
        color: ${({ theme }) => theme.typo.title};
        font-size: 1.6rem;
      }

      & .custom-option_secondary-label {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.labels.guarantee};
      }

      &--is-focused {
        background-color: ${({ theme }) => theme.labels.guarantee};
      }

      &--is-selected {
        background-color: white;
        & .custom-option_primary-label {
          color: ${({ theme }) => theme.brand.primary};
        }
        & .custom-option_secondary-label {
          color: ${({ theme }) => theme.brand.secondary};
        }
      }
    }

    &__multi-value {
      background: rgba(255, 128, 0, 0.05);
      border: 1px solid ${({ theme }) => theme.brand.primary};
      box-sizing: border-box;
      border-radius: 3px;

      &__label {
        color: ${({ theme }) => theme.brand.primary};
        line-height: 1.6rem;
        padding: 0.2rem 0.2rem 0.2rem 0.4rem;
        box-sizing: border-box;
      }
      &__remove {
        cursor: pointer;

        & svg {
          fill: ${({ theme }) => theme.brand.primary};
        }

        &:hover {
          background-color: initial;
        }
      }
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Checkbox = styled(CheckBox_v2)`
  margin-right: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font};
  min-height: 9rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  transition: 0.2s;
  line-height: 1rem;
  color: ${({ disabled, theme }) => (disabled ? theme.ui.disabled : '#8990A3')};
`;

const Input = styled(Select)`
  ${styles};
`;

const AsyncInput = styled(AsyncSelect)`
  ${styles};
`;

SearchSelectInput.displayName = 'SearchSelectInput';

SearchSelectInput.defaultProps = {
  async: false,
  disabled: false,
  loading: false,
  noOptionMessage: 'No options',
  options: [],
  loadingMessage: 'Loading...',
  placeholder: 'Choose your option',
  initial: null,
  isMulti: false,
  withCheckmark: false,
  otherProps: {},
  value: null,
};

SearchSelectInput.propTypes = {
  dataTestId: string,
  async: bool,
  /** Beeing able to use it in Styled Components */
  className: string,
  /** Returns name and value of selected */
  onSelected: func,
  /** Sets name of inputfield */
  name: string,
  /** if true input is disabled */
  disabled: bool,
  /** string with errormessage */
  error: any,
  /** label above the input */
  children: node,
  /** array of objects {value: 'test', label: 'Test'} */
  options: any,
  /** set true if options are loading */
  loading: bool,
  /** name that sets selected on load */
  loadOptions: func,
  /** If a checkmark should be showed if it is selected */
  withCheckmark: bool,
  /** Initial */
  initial: any,
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
  /** Triggers when input is cleared */
  value: any,
};

export default SearchSelectInput;
