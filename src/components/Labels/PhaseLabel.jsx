import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const PhaseLabel = ({ status, text }) => {
  return (
    <PhaseLabelWrapper>
      <PhaseLabelIndicator className={status}></PhaseLabelIndicator>
      <PhaseLabelText>{text}</PhaseLabelText>
    </PhaseLabelWrapper>
  );
};

const PhaseLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PhaseLabelIndicator = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 999px;
  margin-right: 8px;
  border: 0;

  &.default {
    background-color: ${({ theme }) => theme.ui.outline};
  }

  &.success {
    background-color: ${({ theme }) => theme.status.succes};
  }

  &.offer-send {
    background-color: ${({ theme }) => theme.status.blue};
  }

  &.contract-send {
    background-color: ${({ theme }) => theme.status.yellow};
  }

  &.error {
    background-color: ${({ theme }) => theme.status.error};
  }
`;

const PhaseLabelText = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 12px;
  line-height: 130%;
  color: ${({ theme }) => theme.typo.title};
`;

PhaseLabel.defaultProps = {
  status: 'default',
};

PhaseLabel.propTypes = {
  /** The type of the indicator */
  status: string,
  /** The text to be displayed */
  text: string,
};

export default PhaseLabel;
