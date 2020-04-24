import React from 'react';
import { string, node, object, bool, func } from 'prop-types';
import styled from 'styled-components';
// import { QuickActionSubMenu } from '../Navigation/index';

const RiskObjectBarDataGroup = ({ label, data, size, children }) => (
  <RiskObjectBarData className={size}>
    <span className="label">{label}</span>
    <span className="data">{data}</span>
    {children}
  </RiskObjectBarData>
);

RiskObjectBarDataGroup.propTypes = {
  label: string,
  data: string,
  children: node,
  size: string,
};

const RiskObjectBar = ({
  icon,
  children,
  isDragItem,
  onClick,
  ...otherProps
}) => {
  let IconToRender;

  if (icon !== '') {
    IconToRender = <RiskObjectBarIcon>{icon}</RiskObjectBarIcon>;
  }

  return (
    <RiskObjectBarContainer
      onClick={onClick}
      isDragItem={isDragItem}
      {...otherProps}
    >
      <section>
        {IconToRender}

        {children}
      </section>
    </RiskObjectBarContainer>
  );
};

const RiskObjectBarData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 auto;

  .label {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.labels.defaultText};
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

const RiskObjectBarContainer = styled.div`
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: ${({ isDragItem }) =>
    isDragItem === true ? '25px 25px 25px 45px' : '25px'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  border: 1px solid ${({ theme }) => theme.ui.outline};
  border-radius: 5px;
  max-width: 100rem;
  cursor: ${({ onClick }) => (onClick !== undefined ? 'pointer' : 'auto')};

  section {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    > div:not(:last-of-type) {
      margin-right: 50px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.brand.lightest};
    border: 1px solid ${({ theme }) => theme.brand.light};
    cursor: pointer;

    & ${RiskObjectBarData} span {
      color: ${({ theme }) => theme.brand.light};
    }
  }
`;

RiskObjectBar.propTypes = {
  /** The name of the icon to be shown. No icon will be shown if left empty. */
  icon: string,
  children: node,
  /** Add this prop if the item is used in a Draggable component. */
  isDragItem: bool,
  onClick: func,
  otherProps: object,
};

RiskObjectBar.defaultProps = {
  otherProps: {},
  icon: node,
  isDragItem: false,
};

RiskObjectBar.RiskObjectBarData = RiskObjectBarDataGroup;
RiskObjectBar.RiskObjectBarData.displayName = 'RiskObjectBar.RiskObjectBarData';

const RiskObjectBarIcon = styled.div``;

export default RiskObjectBar;
