import React from 'react';
import { string, element, func, object, node } from 'prop-types';
import styled from 'styled-components';

const DashedButton = ({
  children,
  label,
  button,
  styleName,
  onClick,
  className,
  ...otherProps
}) => {
  return (
    <StyledDashedButton
      onClick={onClick}
      className={className}
      styleName={styleName}
      {...otherProps}
    >
      {button ? button : null}
      {label ? <Label>{label}</Label> : null}
      {children && !button && !label ? children : null}
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
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: border 0.15s ease-in-out;
  padding: 5rem;

  border: ${({ styleName }) =>
    styleName === 'faded' ? null : '0.3rem dashed #f0f1f3'};

  background-image: ${({ styleName }) =>
    styleName === 'faded'
      ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23D4D4D4FF' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
      : null};

  &:hover {
    border: ${({ theme, styleName }) =>
      styleName === 'faded' ? null : `0.3rem dashed ${theme.brand.primary}`};

    background-image: ${({ styleName }) =>
      styleName === 'faded'
        ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23FF8000' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
        : null};
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

DashedButton.defaultProps = { styleName: 'normal' };

DashedButton.propTypes = {
  /** Children to be used inside the button. Will only show if no label and / or button were passed. */
  children: node,
  /** Text to be displayed inside the button. */
  label: string,
  /** Element to be displayed inside the button above the label. */
  button: element,
  /** Pass a styleName name to edit the visuals of the button. */
  styleName: string,
  /** Function to be ran when the element is clicked */
  onClick: func.isRequired,
  /** Extra classNames to be passed to the StyledDashedButton. */
  className: string,
  /** Adds extra props to the element. */
  otherProps: object,
};

export default DashedButton;
