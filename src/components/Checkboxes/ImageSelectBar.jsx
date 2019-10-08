import React from 'react';
import styled, { css } from 'styled-components';
import { key } from 'styled-theme';
import PropTypes from 'prop-types';

const StyledCheck = styled.span`
  width: ${({ type }) => (type === 'radio' ? '16px' : '19px')};
  height: ${({ type }) => (type === 'radio' ? '16px' : '19px')};
  border-radius: ${({ type }) => (type === 'radio' ? ' 10px' : '3px')};
  margin-right: 1.6vw;
  border: ${({ type, checked }) =>
    checked && type === 'radio' ? '5px solid' : '1.2px solid'};
  border-color: ${({ type, checked }) =>
    checked && type === 'radio' ? key('colors.toggle') : key('colors.outline')};
  ${({ checked, type }) =>
    checked && type === 'checkbox'
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

const Text = styled.span`
  margin: auto;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: ${key('colors.highlight')};
`;
const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25.4vw;
  height: 6.9vh;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid;
  border-color: ${key('colors.outline')};
  border-radius: 2px;
  font-family: ${key('fonts.primary')};
  font-size: 1.6rem;

  ${({ checked }) =>
    checked
      ? css`
          background: #ffefdc;
          border: 1px solid;
          border-color: ${key('colors.toggle')};
          ${Text} {
            color: ${key('colors.toggle')};
          }
          svg > rect,
          path {
            fill: ${key('colors.toggle')};
          }
        `
      : null};
  ${Text} {
    color: ${({ disabled }) => (disabled ? key('colors.outline') : null)};
  }
  svg {
    margin-left: 1.6vw;
    fill: key('colors.interactive');
  }
`;

const ImageSelectBar = ({
  checked,
  disabled,
  handleChange,
  handleClick,
  type,
  icon,
  children,
  ...otherProps
}) => {
  return (
    <StyledContainer checked={checked} disabled={disabled} {...otherProps}>
      <StyledInput
        type={type}
        onChange={handleChange}
        onClick={handleClick}
        checked={checked}
        disabled={disabled}
      />
      {icon}
      <Text>{children}</Text>
      <StyledCheck type={type} checked={checked} />
    </StyledContainer>
  );
};

ImageSelectBar.displayName = 'ImageSelectBar';

ImageSelectBar.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

ImageSelectBar.defaultProps = {
  checked: false,
  type: 'radio',
};

export default ImageSelectBar;
