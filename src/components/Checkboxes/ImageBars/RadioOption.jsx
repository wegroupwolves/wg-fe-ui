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
  handleChange,
  icon,
  children,
  ...otherProps
}) => {
  return (
    <Container checked={checked} disabled={disabled} {...otherProps}>
      <StyledInput
        type="radio"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
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
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

RadioOption.defaultProps = {
  checked: false,
};

export default RadioOption;
