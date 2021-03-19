import React from 'react';
import { string, number, object, node } from 'prop-types';
import styled from 'styled-components';

const RiskObjectLabel = ({ amount, icon, ...otherProps }) => {
  let IconToRender;

  if (icon !== '') {
    IconToRender = <RiskObjectLabelIcon>{icon}</RiskObjectLabelIcon>;
  }

  return (
    <RiskObjectLabelWrapper {...otherProps}>
      {IconToRender}
      <RiskObjectLabelBadge>{amount}</RiskObjectLabelBadge>
    </RiskObjectLabelWrapper>
  );
};

const RiskObjectLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
`;

const RiskObjectLabelIcon = styled.div`
  margin-right: 0.3rem;

  svg {
    transform: scale(0.7);
    transform-origin: center center;
  }
`;

const RiskObjectLabelBadge = styled.div`
  min-width: 20px;
  padding-left: 5px;
  padding-right: 5px;
  height: 20px;
  border-radius: 999px;
  color: ${({ theme }) => theme.brand.primary};
  font-family: ${({ theme }) => theme.font};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.brand.lightest};
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
`;

RiskObjectLabel.defaultProps = {
  amount: 0,
  icon: 'IconCarFilled',
  iconColor: '#505050',
  otherProps: {},
};

RiskObjectLabel.propTypes = {
  /** The amount to be displayed inside the badge */
  amount: number,
  /** The name of the icon to be displayed */
  icon: node,
  /** The color of the icon */
  iconColor: string,
  otherProps: object,
};

export default RiskObjectLabel;
