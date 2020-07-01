import React from 'react';
import { element, func, string, number, object } from 'prop-types';
import styled from 'styled-components';

import { H4 } from '../Typography';
import { Badge } from '../Labels';

const RiskObjectSelector = ({
  icon,
  onClick,
  label,
  amount,
  className,
  ...otherProps
}) => {
  return (
    <StyledRiskObjectSelector
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      <Button>{icon}</Button>
      {amount && amount > 0 ? <StyledBadge>{amount}</StyledBadge> : null}
      {label ? <Label larger>{label}</Label> : null}
    </StyledRiskObjectSelector>
  );
};

const StyledRiskObjectSelector = styled.div`
  position: relative;
`;

const Button = styled.div`
  background-color: white;
  border: 2px solid #f0f1f3;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 2.2rem 7rem;
  cursor: pointer;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  svg path {
    fill: #c4c4c4;
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
  icon: element.isRequired,
  onClick: func,
  label: string,
  amount: number,
  className: string,
  otherProps: object,
};

export default RiskObjectSelector;
