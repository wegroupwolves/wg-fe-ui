import React from 'react';
import { string, object, node } from 'prop-types';
import styled from 'styled-components';

const PhaseLabel = ({ status, text, children, ...otherProps }) => {
  const red = [
    'REJECTED',
    'REJECTED_RSR',
    'REJECTED_NS',
    'CANCELLED',
    'REFUSED',
    'SUSPENDED',
    'TERMINATED',
    'error',
    'red',
  ];
  const blue = ['PENDING', 'offer-send', 'blue'];
  const orange = ['warning', 'orange'];
  const yellow = ['SEND', 'contract-send', 'IN_PROGRESS', 'yellow'];
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
  width: 1.1rem;
  height: 1.1rem;
  min-width: 1.1rem;
  min-height: 1.1rem;
  border-radius: 50%;
  margin-right: 0.8rem;
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
  font-size: 1.2rem;
  line-height: 120%;
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
