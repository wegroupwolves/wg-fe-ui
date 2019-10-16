import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme';
import PropTypes from 'prop-types';
import { Container, StyledInput, Text } from './ImageBarTemplate';

const StyledCheck = styled.span`
  height: 16px;
  min-width: 16px;
  border-radius: 10px;
  margin: auto 1.6vw;
  border: ${({ checked }) => (checked ? '5px solid' : '1.2px solid')};
  border-color: ${({ checked }) =>
    checked ? key('colors.toggle') : key('colors.outline')};
`;

const RadioOption = ({
  checked,
  disabled,
  name,
  handleChange,
  icon,
  children,
  ...otherProps
}) => {
  return (
    <Container checked={checked} disabled={disabled}>
      <StyledInput
        type="radio"
        onChange={({ target: { value } }) => handleChange(value)}
        checked={checked}
        disabled={disabled}
        name={name}
        {...otherProps}
      />
      {icon}
      <Text>{children}</Text>
      <StyledCheck checked={checked} />
    </Container>
  );
};

RadioOption.displayName = 'RadioOption';

RadioOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

RadioOption.defaultProps = {
  checked: false,
};

export default RadioOption;
