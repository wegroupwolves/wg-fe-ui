import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Container, StyledInput, Text } from './ImageBarTemplate';
import Checkmark from '../../../assets/checkmark.js';

const StyledCheck = styled.div`
  width: 1.9rem;
  height: 1.9rem;
  min-width: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: auto 2rem;
  border: 1.2px solid;
  border-color: ${({ theme }) => theme.ui.outline};
  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.brand.secondary};
          text-align: center;
        `
      : null};
`;

const StyledCheckmark = styled(Checkmark)`
  width: 80%;
  margin: 0 !important;
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
      theme,
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
        <StyledCheck checked={checked}>
          {checked && disabled ? (
            <StyledCheckmark color={theme.colors.disabled} />
          ) : checked && !disabled ? (
            <StyledCheckmark color="white" />
          ) : null}
        </StyledCheck>
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
  theme: PropTypes.object,
};

CheckOption.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default CheckOption;
