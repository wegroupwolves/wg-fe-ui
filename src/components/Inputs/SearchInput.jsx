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

const SearchInput = forwardRef(
  (
    { className, border, icon, onChange, placeholder, text, ...otherProps },
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
      </StyledBox>
    );
  },
);

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;

  svg {
    position: absolute;
    top: 3px;
    left: 0;
    transform: rotate(-90deg);
    path {
      fill: ${({ theme }) => theme.ui.interactive};
    }
  }
`;

const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.ui.interactive};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.ui.disabled}` : 'none'};
  line-height: 2rem;
  padding: 3px 0.2vw 3px 5.7vw;
  width: 100%;
  box-sizing: border-box;
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
  otherProps: {},
};

SearchInput.propTypes = {
  className: string,
  border: bool,
  icon: node,
  onChange: func,
  placeholder: string,
  text: oneOfType([string, number]),
  otherProps: object,
};

export default SearchInput;
