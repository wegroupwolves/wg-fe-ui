import React from 'react';
import styled, { css } from 'styled-components';
import { key } from 'styled-theme';

const StyledCheck = styled.span`
  width: ${({ type }) => (type === 'radio' ? '16px' : '19px')};
  height: ${({ type }) => (type === 'radio' ? '16px' : '19px')};
  margin-right: 1.6vw;
  border: 1.2px solid #cccccc;
  box-sizing: border-box;

  ${({ checked, type }) =>
    checked
      ? type === 'radio'
        ? `
              border: 5px solid #ff9b21;
              border-radius: 10px;
  `
        : `
        border-radius: 3px;
        background: #FF9B21;
        text-align: center;
        &:before {
            content: "✔";
            color: #FFFFFF;
          }
  `
      : null};
`;

const Text = styled.span`
  margin: auto;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: #505050;
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
  border: 1px solid #cccccc;
  border-radius: 2px;
  font-family: Lato;

  ${({ checked }) =>
    checked
      ? css`
          background: #ffefdc;
          border: 1px solid #ff9b21;
          ${Text} {
            color: #ff9b21;
          }
          svg {
            fill: #ff9b21;
          }
        `
      : null};
  ${Text} {
    ${({ disabled }) => (disabled ? 'color: #CCCCCC' : null)};
  }
  svg {
    margin-left: 1.6vw;
    fill: #c1c1c1;
  }
`;

const ImageSelectBar = ({
  checked,
  disabled,
  handleChange,
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

export default ImageSelectBar;
