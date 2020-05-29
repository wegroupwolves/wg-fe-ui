import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const PhaseLabel = ({ status, text, children, ...otherProps }) => {
  const red = ['REJECTED', 'CANCELLED', 'REFUSED', 'error', 'red'];
  const blue = ['PENDING', 'offer-send', 'blue'];
  const orange = ['warning', 'orange'];
  const yellow = ['SEND', 'contract-send', 'yellow'];
  const green = ['ACCEPTED', 'SIGNED', 'ACCEPTED', 'success', 'green'];

  let statusClassName = 'default';

  if (red.includes(status)) statusClassName = 'red';
  if (blue.includes(status)) statusClassName = 'blue';
  if (yellow.includes(status)) statusClassName = 'yellow';
  if (green.includes(status)) statusClassName = 'green';
  if (orange.includes(status)) statusClassName = 'orange';

  return (
    <PhaseLabelWrapper {...otherProps}>
      <PhaseLabelIndicator className={statusClassName}></PhaseLabelIndicator>
      {!children && text ? <PhaseLabelText>{text}</PhaseLabelText> : ''}
      {children && !text ? children : ''}
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
  display: inline-block;

  &.default {
    background-color: ${({ theme }) => theme.ui.outline};
  }

  &.green {
    background-color: ${({ theme }) => theme.status.succes};
  }

  &.orange {
    background-color: ${({ theme }) => theme.status.warning};
  }

  &.blue {
    background-color: ${({ theme }) => theme.status.blue};
  }

  &.yellow {
    background-color: ${({ theme }) => theme.status.yellow};
  }

  &.red {
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
  otherProps: {},
};

PhaseLabel.propTypes = {
  /** The type of the indicator */
  status: string,
  /** The text to be displayed */
  text: string,
  children: node,
  otherProps: object,
};

export default PhaseLabel;
