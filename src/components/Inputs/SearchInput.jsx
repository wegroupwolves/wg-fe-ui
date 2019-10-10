import React from 'react';
import { object, func, string, bool, node } from 'prop-types';
import LoupeIcon from './../Icons/Loupe'
import styled from 'styled-components';
import { key } from 'styled-theme';

const SearchInput = ({
  className,
  border,
  icon,
  onChange,
  placeholder,
  text,
  ...otherProps
}) => {
  const handleChange = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <StyledBox>
      {icon}
      <Input
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
};

const StyledBox = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 3px;
    left: 0;
    transform: rotate(-90deg);
    path {
      fill: ${key('colors.sub-txt')};
    }
  }
`;

const Input = styled.input`
  font-family: ${key('fonts.primary')};
  font-size: 14px;
  color: ${key('colors.sub-txt')};
  border: ${({ border }) =>
    border ? `1px solid ${key('colors.disabled')}` : 'none'};
  line-height: 20px;
  padding: 3px 3px 3px 5.7vw;
  width: 100%;
  box-sizing: border-box;
`;

Input.displayName = 'Input';

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
  text: string,
  otherProps: object,
};

export default SearchInput;
