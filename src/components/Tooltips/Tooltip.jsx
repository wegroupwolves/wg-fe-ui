import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string, node, func, object, bool } from 'prop-types';

const Tooltip = ({
  className,
  toggleIcon,
  children,
  onClick,
  direction,
  text,
  isActive: passedIsActive,
  setIsActive: passedSetIsActive,
  ...otherProps
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TooltipWrapper
      onMouseLeave={() =>
        (passedSetIsActive && passedSetIsActive(false)) || setIsActive(false)
      }
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      <TooltipToggle
        onMouseMove={() =>
          (passedSetIsActive && passedSetIsActive(true)) || setIsActive(true)
        }
        isActive={(passedIsActive != null && passedIsActive) || isActive}
      >
        {toggleIcon}
      </TooltipToggle>
      {text && (
        <TooltipText
          onMouseMove={() =>
            (passedSetIsActive && passedSetIsActive(true)) || setIsActive(true)
          }
          isActive={(passedIsActive != null && passedIsActive) || isActive}
        >
          {text}
        </TooltipText>
      )}

      <TooltipContent
        active={(passedIsActive != null && passedIsActive) || isActive}
        direction={direction}
      >
        {children}
      </TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipText = styled.p`
  margin-left: 1rem;
  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  transition: color 0.2s ease;
  color: ${({ isActive, theme }) =>
    isActive ? theme.brand.primary : '#8990a3'};
`;

const TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  outline: none;
  appearance: none;
`;

const TooltipToggle = styled.a`
  display: flex;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 1.5px solid #8990a3;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.2rem;
  line-height: 120%;
  color: #8990a3;

  transition: color 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.brand.primary};
      border: 1.5px solid ${({ theme }) => theme.brand.primary};
    `}
`;

const TooltipContent = styled.div`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  z-index: 9;
  position: absolute;
  opacity: ${({ active }) => (active ? '1' : '0')};
  margin-bottom: 1em;
  padding: 1em;
  background-color: #11141c;
  width: 600px;
  border-radius: 5px;
  transform: ${({ active }) =>
    active ? 'translate(-50%, 0)' : 'translate(-50%, 1em)'};

  font-family: ${({ theme }) => theme.font};
  transition: all 0.2s ease;
  font-size: 14px;
  line-height: 120%;
  color: white;

  ${({ direction }) => {
    switch (direction) {
      case 'bottom':
        return css`
          top: 150%;
          left: 50%;
        `;
      case 'bottomleft':
        return css`
          top: 150%;
          left: -1300%;
        `;
      case 'bottomright':
        return css`
          top: 150%;
          left: 1400%;
        `;
      case 'left':
        return css`
          bottom: 100%;
          left: -1300%;
        `;
      case 'right':
        return css`
          bottom: 100%;
          left: 1400%;
        `;
      default:
        return css`
          bottom: 100%;
          left: 50%;
        `;
    }
  }}

  &::before {
    content: '';
    position: absolute;
    left: ${({ direction }) =>
      direction === 'left' ? '95%' : direction === 'right' ? '5%' : '50%'};
    width: 0;
    height: 0;
    border: 0.5em solid transparent;
    border-top-color: #11141c;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);

    ${({ direction }) => {
      switch (direction) {
        case 'bottom':
          return css`
            -webkit-transform: translate(50%, 0);
            transform: rotate(180deg) translate(50%, 0);
            bottom: 100%;
          `;
        case 'bottomleft':
          return css`
            -webkit-transform: translate(50%, 0);
            transform: rotate(180deg) translate(50%, 0);
            bottom: 100%;
            left: 95%;
          `;
        case 'bottomright':
          return css`
            -webkit-transform: translate(50%, 0);
            transform: rotate(180deg) translate(50%, 0);
            bottom: 100%;
            left: 5%;
          `;
        case 'left':
          return css`
            top: 100%;
            left: 95%;
          `;
        case 'right':
          return css`
            top: 100%;
            left: 5%;
          `;
        default:
          return css`
            top: 100%;
            left: 50%;
          `;
      }
    }}
  }
`;

Tooltip.defaultProps = {
  toggleIcon: '?',
  children: 'Please provide text to be shown inside the tooltip.',
};

Tooltip.propTypes = {
  /** Extra class to be passed to the component. */
  className: string,
  /** Icon to be shown inside the toggle. (String) */
  toggleIcon: string.isRequired,
  /** Content to be shown inside the toggle.  */
  children: node.isRequired,
  /** Optional onClick function to be passed. */
  onClick: func,
  /** What direction the tooltop should pop out to */
  direction: string,
  /** Extra props to be passed to the component. */
  otherProps: object,
  /** Text for the tooltip */
  text: string,
  /** Manually pass the isActive state for showing the tooltip */
  isActive: bool,
  /** Manually set the isActive state for showing the tooltip */
  setIsActive: func,
};

export default Tooltip;
