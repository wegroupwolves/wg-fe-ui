import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Container, StyledInput, Text } from './ImageBarTemplate';

const StyledCheck = styled.span`
  height: 19px;
  min-width: 19px;
  border-radius: 3px;
  margin: auto 1.6vw;
  border: 1.2px solid;
  border-color: ${({ theme }) => theme.ui.outline};
  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.brand.secondary};
          text-align: center;
          &:before {
            content: '✔';
            color: #ffffff;
          }
        `
      : null};
`;

const CheckOption = forwardRef(
  (
    {
      checked,
      disabled,
      name,
      handleClick,
      handleChange,
      icon,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const onChange = e => {
      e.persist();
      handleChange({ name: e.target.name, value: e.target.value });
    };
    const onClick = e => {
      e.persist();
      handleClick({ name: e.target.name, value: e.target.value });
    };
    return (
      <Container checked={checked} disabled={disabled}>
        <StyledInput
          type="checkbox"
          onClick={onClick}
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

CheckOption.displayName = 'CheckOption';

CheckOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

CheckOption.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default CheckOption;
