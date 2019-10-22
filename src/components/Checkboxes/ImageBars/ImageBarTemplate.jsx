import styled, { css } from 'styled-components';
import { key } from 'styled-theme';

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
  border-color: ${key('colors.outline')};
  border-radius: 2px;
  font-family: ${key('fonts.primary')};
  font-size: 1.6rem;
  ${Text} {
    color: ${({ disabled }) => (disabled ? key('colors.outline') : null)};
  }
  svg {
    fill: ${({ disabled }) => (disabled ? key('colors.outline') : null)};
  }
  svg {
    margin: auto 1.6vw;
    fill: ${key('colors.interactive')};
  }
  ${({ checked }) =>
    checked
      ? css`
          background-color: ${key('colors.selected')};
          border-color: ${key('colors.toggle')};
          ${Text} {
            color: ${key('colors.toggle')};
          }
          svg {
            fill: ${key('colors.toggle')};
          }
        `
      : null};
`;

export { Container, StyledInput, Text };
