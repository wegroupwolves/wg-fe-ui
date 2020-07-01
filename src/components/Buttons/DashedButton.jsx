import React from 'react';
import { string, element, func, object } from 'prop-types';
import styled from 'styled-components';

const DashedButton = ({ label, button, onClick, className, ...otherProps }) => {
  return (
    <StyledDashedButton onClick={onClick} className={className} {...otherProps}>
      {button}
      {label ? <Label>{label}</Label> : null}
    </StyledDashedButton>
  );
};

const StyledDashedButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 0.3rem dashed #f0f1f3;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: border 0.15s ease-in-out;
  padding: 5rem;

  &:hover {
    border: 0.3rem dashed ${({ theme }) => theme.brand.primary};
  }
`;

const Label = styled.div`
  margin-top: 1.6rem;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 0.01em;
  color: #222;
`;

DashedButton.propTypes = {
  /** Text to be displayed inside the button. */
  label: string,
  /** Element to be displayed inside the button above the label. */
  button: element,
  /** Function to be ran when the element is clicked */
  onClick: func.isRequired,
  /** Extra classNames to be passed to the StyledDashedButton. */
  className: string,
  /** Adds extra props to the element. */
  otherProps: object,
};

export default DashedButton;
