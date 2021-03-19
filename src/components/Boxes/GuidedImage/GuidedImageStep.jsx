import React, { useState } from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

const GuidedImageStep = ({
  children,
  offsetTop,
  offsetLeft,
  content,
  className,
  otherProps,
}) => {
  const [showStep, setShowStep] = useState(false);

  return (
    <StyledStep
      offsetTop={offsetTop}
      offsetLeft={offsetLeft}
      className={className}
      {...otherProps}
      onMouseEnter={() => {
        setShowStep(!showStep);
      }}
      onMouseLeave={() => {
        setShowStep(!showStep);
      }}
    >
      <StyledStepToolTip active={showStep}>{content}</StyledStepToolTip>

      {children}
    </StyledStep>
  );
};

const StyledStep = styled.div`
  position: absolute;
  top: ${({ offsetTop }) => offsetTop};
  left: ${({ offsetLeft }) => offsetLeft};
  font-family: ${({ theme }) => theme.font};
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 9999px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledStepToolTip = styled.div`
  position: absolute;
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 300px;
  background-color: #222;
  bottom: 2.8rem;
  color: white;
  padding: 0.8rem;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.2rem;
  line-height: 1.6rem;

  &::after,
  &::before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-color: transparent;
    border-top-color: #222;
    border-width: 6px;
    margin-left: -6px;
  }
`;

GuidedImageStep.defaultProps = {
  children: '0',
  offsetTop: '0px',
  offsetLeft: '0px',
  content: 'Enter some text to be displayed here.',
};

GuidedImageStep.propTypes = {
  /** Content of the step */
  children: node.isRequired,
  /** Defines how far the dot is from the top of the image. (Px / %) */
  offsetTop: string.isRequired,
  /** Defines how far the dot is from the left of the image. (Px / %) */
  offsetLeft: string.isRequired,
  /** Content of the tooltip */
  content: string.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default GuidedImageStep;
