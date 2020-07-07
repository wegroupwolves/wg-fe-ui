import React from 'react';
import { element, func, string, number, object, bool, node } from 'prop-types';
import styled from 'styled-components';

import { H4 } from '../Typography';
import { Badge } from '../Labels';
import { IconStatusCheck } from '../Icons';

const RiskObjectSelector = ({
  children,
  onClick,
  label,
  amount,
  active,
  size,
  className,
  ...otherProps
}) => {
  return (
    <StyledRiskObjectSelector
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      <Button active={active} size={size}>
        {children}
      </Button>

      {amount && amount > 0 ? <StyledBadge>{amount}</StyledBadge> : null}

      {active ? (
        <StyledBadge>
          <IconStatusCheck size={25} color="white" />
        </StyledBadge>
      ) : null}

      {label ? <Label larger>{label}</Label> : null}
    </StyledRiskObjectSelector>
  );
};

const StyledRiskObjectSelector = styled.div`
  position: relative;
`;

const Button = styled.div`
  background-color: white;
  border: 2px solid
    ${({ theme, active }) => (active ? theme.brand.primary : '#f0f1f3')};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: ${({ size }) => (size === 'square' ? '3.5rem' : '2.2rem 7rem')};
  cursor: pointer;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  svg path {
    fill: ${({ theme, active }) => (active ? theme.brand.primary : '#c4c4c4')};
    transition: fill 0.15s ease-in-out;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.brand.primary};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.06);

    svg path {
      fill: ${({ theme }) => theme.brand.primary};
    }
  }
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const Label = styled(H4)`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
`;

RiskObjectSelector.propTypes = {
  /** Pass an element to be displayed within the button. */
  children: node.isRequired,
  /** Pass a function to be executed when the button is clicked. */
  onClick: func,
  /** Label to be shown underneath the button. */
  label: string,
  /** Amount to display within the badge. */
  amount: number,
  /** Set to true to change styling to match an active state. */
  active: bool,
  /** Changes the sizing of the button ("square" / "wide"). */
  size: string,
  /** Extra classes to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default RiskObjectSelector;
