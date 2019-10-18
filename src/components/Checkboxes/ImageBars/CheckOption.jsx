import React from 'react';
import styled, { css } from 'styled-components';
import { key } from 'styled-theme';
import PropTypes from 'prop-types';
import { Container, StyledInput, Text } from './ImageBarTemplate';

const StyledCheck = styled.span`
  height: 19px;
  min-width: 19px;
  border-radius: 3px;
  margin: auto 1.6vw;
  border: 1.2px solid;
  border-color: ${key('colors.outline')};
  ${({ checked }) =>
    checked
      ? css`
          background-color: ${key('colors.toggle')};
          text-align: center;
          &:before {
            content: '✔';
            color: #ffffff;
          }
        `
      : null};
`;

const CheckOption = ({
  checked,
  disabled,
  name,
  handleClick,
  handleChange,
  icon,
  children,
  ...otherProps
}) => {
  return (
    <Container checked={checked} disabled={disabled}>
      <StyledInput
        type="checkbox"
        onClick={({ target: { value } }) => handleClick(value)}
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
};

export default CheckOption;
