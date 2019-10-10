import React from 'react';
import { object, func, string } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const SearchInput = ({
  className,
  onChange,
  placeholder,
  text,
  ...otherProps
}) => {
  const handleChange = val => {
    onChange(val);
  };

  return (
    <Input
      className={className}
      type="text"
      name="search"
      placeholder={placeholder}
      value={text}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

const Input = styled.input`
  font-family: ${key('fonts.primary')};
  font-size: 1.4rem;
  color: #a29c95;
  border: none;
`;

SearchInput.defaultProps = {
  className: '',
  onChange: Function.prototype,
  placeholder: 'Search for name, status, ...',
  text: '',
  otherProps: {},
};

SearchInput.propTypes = {
  className: string,
  onChange: func,
  placeholder: string,
  text: string,
  otherProps: object,
};

export default SearchInput;
