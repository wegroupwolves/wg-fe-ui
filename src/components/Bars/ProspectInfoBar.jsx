import React from 'react';
import styled from 'styled-components';
import { element, node } from 'prop-types';

import { RoundedButton, IconActionChevronRight } from '../../../src';

const ProspectInfoBar = ({ icon, children, onClick }) => {
  return (
    <Bar>
      {icon ? <BarIcon>{icon}</BarIcon> : null}

      <BarContent>{children}</BarContent>

      {onClick ? (
        <BarButton>
          <RoundedButton
            icon={<IconActionChevronRight size={20} />}
            onClick={onClick}
          />
        </BarButton>
      ) : null}
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  max-width: 100rem;
  background-color: white;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(32, 32, 35, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

const BarIcon = styled.div`
  flex: 0 0 8.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e4e4e4;
  padding: 2.4rem 0;

  svg path {
    fill: ${({ theme }) => theme.ui.disabled};
  }
`;

const BarContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;

  /** Disabled to ensure every child gets equal spacing */
  /* stylelint-disable-next-line selector-max-universal */
  > * {
    margin-right: 3.2rem;

    /* stylelint-disable-next-line selector-max-universal */
    &:last-child {
      margin-right: 0;
    }
  }
`;

const BarButton = styled.div`
  flex: 0 0 8.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ProspectInfoBar.propTypes = {
  icon: element,
  children: node.isRequired,
};

export default ProspectInfoBar;
