import React, { forwardRef } from 'react';
import {
  object,
  func,
  string,
  bool,
  node,
  number,
  oneOfType,
} from 'prop-types';
import LoupeIcon from './../Icons/Loupe';
import styled from 'styled-components';
import ActionButton from '../Buttons/ActionButton';

const SearchInput = forwardRef(
  (
    {
      className,
      border,
      icon,
      onChange,
      placeholder,
      text,
      showButton,
      buttonText,
      buttonAction,
      ...otherProps
    },
    ref,
  ) => {
    const handleChange = ({ target: { value } }) => {
      onChange(value);
    };

    return (
      <StyledBox>
        {icon}
        <Input
          ref={ref}
          className={className}
          type="text"
          name="search"
          placeholder={placeholder}
          value={text}
          border={border}
          onChange={handleChange}
          {...otherProps}
        />
        {showButton ? (
          <ActionButton level="secondary" onClick={buttonAction}>
            {buttonText}
          </ActionButton>
        ) : (
          ''
        )}
      </StyledBox>
    );
  },
);

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    transform: rotate(-90deg);
    flex: 0 0 30px;

    path {
      fill: ${({ theme }) => theme.ui.interactive};
    }
  }
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.ui.interactive};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.ui.disabled}` : 'none'};
  line-height: 2rem;
  padding: 0.3rem 1rem;
  background-color: transparent;
  flex: 1 0 auto;
  height: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0;
  }
`;

Input.displayName = 'Input';

SearchInput.displayName = 'SearchInput';

SearchInput.defaultProps = {
  className: '',
  border: false,
  icon: <LoupeIcon />,
  onChange: Function.prototype,
  placeholder: 'Search for name, status, ...',
  text: '',
  showButton: false,
  buttonText: 'Search',
  buttonAction: () => console.log('Pass a click function for your search'),
  otherProps: {},
};

SearchInput.propTypes = {
  className: string,
  border: bool,
  icon: node,
  onChange: func,
  placeholder: string,
  text: oneOfType([string, number]),
  showButton: bool,
  buttonText: string,
  buttonAction: func,
  otherProps: object,
};

export default SearchInput;
