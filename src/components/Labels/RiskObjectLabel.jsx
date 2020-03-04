import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import * as Icons from '../Icons';

const IconsList = {};
Object.keys(Icons).map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey];
});

const RiskObjectLabel = ({ amount, icon, iconColor }) => {
  const ChosenIcon = IconsList[icon];

  return (
    <RiskObjectLabelWrapper>
      <RiskObjectLabelIcon>
        <ChosenIcon color={iconColor}></ChosenIcon>
      </RiskObjectLabelIcon>

      <RiskObjectLabelBadge>{amount}</RiskObjectLabelBadge>
    </RiskObjectLabelWrapper>
  );
};

const RiskObjectLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RiskObjectLabelIcon = styled.div`
  margin-right: 3px;

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
  font-weight: bold;
  font-size: 14px;
  line-height: 130%;
`;

RiskObjectLabel.defaultProps = {
  amount: 0,
  icon: 'IconCarFilled',
  iconColor: '#505050',
};

RiskObjectLabel.propTypes = {
  /** The amount to be displayed inside the badge */
  amount: number,
  /** The name of the icon to be displayed */
  icon: string,
  /** The color of the icon */
  iconColor: string,
};

export default RiskObjectLabel;
