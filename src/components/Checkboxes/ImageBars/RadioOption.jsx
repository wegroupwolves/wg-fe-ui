import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import { Container, StyledInput, Text } from './ImageBarTemplate';

const StyledCheck = styled.span`
  height: 16px;
  min-width: 16px;
  border-radius: 10px;
  margin: auto 1.6vw;
  border: ${({ checked }) => (checked ? '5px solid' : '1.2px solid')};
  border-color: ${({ checked, theme }) =>
    checked ? theme.brand.secondary : theme.ui.outline};
  box-sizing: border-box;
`;

const RadioOption = forwardRef(
  (
    {
      checked,
      disabled,
      name,
      handleChange,
      icon,
      children,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const onChange = e => {
      e.persist();
      handleChange({ name: e.target.name, value: e.target.value });
    };
    return (
      <Container checked={checked} disabled={disabled} className={className}>
        <StyledInput
          type="radio"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          name={name}
          ref={ref}
          {...otherProps}
        />
        {icon}
        <Text>{children}</Text>
        <StyledCheck checked={checked} />
      </Container>
    );
  },
);

RadioOption.displayName = 'RadioOption';

RadioOption.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
  className: string,
};

RadioOption.defaultProps = {
  checked: false,
};

export default RadioOption;
