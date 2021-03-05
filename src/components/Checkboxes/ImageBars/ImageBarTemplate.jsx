import styled, { css } from 'styled-components';

const Text = styled.span`
  margin: 0 auto 0 0.2vw;
  font-size: 1.4rem;
  line-height: 120%;
  color: ${({ theme }) => theme.typo.highlight};
`;
const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

StyledInput.displayName = 'StyledInput';

const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25.4vw;
  height: 75px;
  min-width: 300px;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid;
  border-color: ${({ theme }) => theme.ui.outline};
  border-radius: 2px;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  ${Text} {
    color: ${({ disabled, theme }) => (disabled ? theme.ui.outline : null)};
  }
  svg {
    fill: ${({ disabled, theme }) => (disabled ? theme.ui.outline : null)};
  }
  svg {
    margin: auto 1.6vw;
    fill: ${({ theme }) => theme.ui.interactive};
  }
  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.brand.lightest};
          border-color: ${theme.brand.secondary};
          ${Text} {
            color: ${theme.brand.primary};
          }
          svg {
            fill: ${theme.brand.primary};

            path {
              fill: ${theme.brand.primary};
            }
          }
        `
      : null};
`;

export { Container, StyledInput, Text };
