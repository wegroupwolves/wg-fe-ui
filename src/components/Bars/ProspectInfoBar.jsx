import React from 'react';
import styled from 'styled-components';
import { element, node, func } from 'prop-types';

// import { RoundedButton, IconActionChevronRight } from '../../../src';
import RoundedButton from '../Buttons/RoundedButton';
import IconActionChevronRight from '../Icons/IconActionChevronRight';

const ProspectInfoBar = ({ icon, children, onClick, ...rest }) => {
  return (
    <Bar {...rest}>
      {icon ? <BarIcon>{icon}</BarIcon> : null}

      <BarContent>{children}</BarContent>

      <BarButton>
        {onClick ? (
          <RoundedButton
            icon={<IconActionChevronRight size={20} />}
            onClick={onClick}
          />
        ) : null}
      </BarButton>
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
`;

const BarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e4e4e4;
  padding: 2rem;

  svg path {
    fill: ${({ theme }) => theme.ui.disabled};
  }
`;

const BarContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 1.5rem;
  column-gap: 3rem;
  align-items: center;
  padding: 1.5rem 3rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BarButton = styled.div`
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ProspectInfoBar.propTypes = {
  /** Pass an icon as element to be displayed at the front of the bar. */
  icon: element,
  /** Children to be displayed in the center of the bar. */
  children: node.isRequired,
  /** Passing no function will result in the right arrow not being shown. */
  onClick: func,
};

export default ProspectInfoBar;
