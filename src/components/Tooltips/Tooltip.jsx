import React, { useState } from 'react';
import styled from 'styled-components';
import { string, node, func, object } from 'prop-types';

const Tooltip = ({
  className,
  toggleIcon,
  children,
  onClick,
  ...otherProps
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TooltipWrapper
      onMouseLeave={() => setIsActive(false)}
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      <TooltipToggle onMouseMove={() => setIsActive(true)}>
        {toggleIcon}
      </TooltipToggle>

      <TooltipContent active={isActive}>{children}</TooltipContent>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  display: flex;
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
  line-height: 1.5rem;
  color: #8990a3;

  &:hover {
    color: ${({ theme }) => theme.brand.primary};
    border: 1.5px solid ${({ theme }) => theme.brand.primary};
  }
`;

const TooltipContent = styled.div`
  z-index: 9;
  position: absolute;
  left: 50%;
  bottom: 100%;
  opacity: ${({ active }) => (active ? '1' : '0')};
  margin-bottom: 1em;
  padding: 1em;
  background-color: #11141c;
  width: 600px;
  border-radius: 5px;
  transform: ${({ active }) =>
    active ? 'translate(-50%, 0)' : 'translate(-50%, 1em)'};

  font-family: ${({ theme }) => theme.font};
  font-size: 14px;
  line-height: 1.8rem;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: 0.5em solid transparent;
    border-top-color: #11141c;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
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
  /** Extra props to be passed to the component. */
  otherProps: object,
};

export default Tooltip;
