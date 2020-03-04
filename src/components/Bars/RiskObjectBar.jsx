import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

import * as Icons from '../Icons';
import { QuickActionSubMenu } from '../Navigation/index';

const IconsList = { Test: 'test' };
Object.keys(Icons).map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey];
});

const StyledRiskObjectBarData = ({ label, data, size, children }) => (
  <RiskObjectBarData className={size}>
    <span className="label">{label}</span>
    <span className="data">{data}</span>
    {children}
  </RiskObjectBarData>
);

StyledRiskObjectBarData.propTypes = {
  label: string,
  data: string,
  children: node,
  size: string,
};

const RiskObjectBar = ({ icon, children }) => {
  let ChosenIcon;
  let IconToRender;

  if (icon !== '') {
    ChosenIcon = IconsList[icon];

    IconToRender = (
      <RiskObjectBarIcon>
        <ChosenIcon color="#CCCCCC"></ChosenIcon>
      </RiskObjectBarIcon>
    );
  }

  return (
    <RiskObjectBarContainer>
      <section>
        {IconToRender}

        {children}
      </section>

      <section>
        <QuickActionSubMenu>
          <QuickActionSubMenu.SubMenuItem label="View customer" />
          <QuickActionSubMenu.SubMenuItem label="Edit customer" />
          <QuickActionSubMenu.SubMenuItem
            type="danger"
            label="Delete customer"
          />
        </QuickActionSubMenu>
      </section>
    </RiskObjectBarContainer>
  );
};

const RiskObjectBarContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  border: 1px solid ${({ theme }) => theme.ui.outline};
  border-radius: 5px;

  > section:first-of-type {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > div:not(:last-of-type) {
      margin-right: 50px;
    }
  }

  > section:last-of-type {
    flex: 0 1 8%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const RiskObjectBarData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 auto;

  .label {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #a29c95;
  }

  .data {
    color: #505050;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  &.double {
    flex: 2 0 auto;
  }
`;

RiskObjectBar.propTypes = {
  /** The name of the icon to be shown. No icon will be shown if left empty. */
  icon: string,
  children: node,
};

RiskObjectBar.RiskObjectBarData = StyledRiskObjectBarData;
RiskObjectBar.RiskObjectBarData.displayName = 'RiskObjectBar.RiskObjectBarData';

const RiskObjectBarIcon = styled.div``;

export default RiskObjectBar;
