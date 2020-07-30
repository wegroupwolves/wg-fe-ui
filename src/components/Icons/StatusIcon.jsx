import React from 'react';
import { string, object } from 'prop-types';
import styled from 'styled-components';

import {
  IconStatusCheck,
  IconStatusExclamation,
  IconActionClose,
} from '../Icons';

const StatusIcon = ({ type, className, otherProps }) => {
  return (
    <StyledStatusIcon type={type} className={className} {...otherProps}>
      {type === 'default' ? (
        '?'
      ) : type === 'success' ? (
        <IconStatusCheck size={11} />
      ) : type === 'warning' ? (
        <IconStatusExclamation />
      ) : type === 'error' ? (
        <IconActionClose />
      ) : (
        '?'
      )}
    </StyledStatusIcon>
  );
};

const StyledStatusIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  font-family: ${({ theme }) => theme.font};
  font-weight: bold;

  border: 2px solid
    ${({ theme, type }) =>
      type === 'default'
        ? '#222'
        : type === 'success'
        ? theme.status.succes
        : type === 'warning'
        ? theme.status.warning
        : type === 'error'
        ? theme.status.error
        : null};

  color: ${({ theme, type }) =>
    type === 'default'
      ? '#222'
      : type === 'success'
      ? theme.status.succes
      : type === 'warning'
      ? theme.status.warning
      : type === 'error'
      ? theme.status.error
      : null};

  > svg path {
    fill: ${({ theme, type }) =>
      type === 'default'
        ? '#222'
        : type === 'success'
        ? theme.status.succes
        : type === 'warning'
        ? theme.status.warning
        : type === 'error'
        ? theme.status.error
        : null};
  }
`;

StatusIcon.defaultProps = {
  type: 'default',
};

StatusIcon.propTypes = {
  /** What type of icon should be displayed? ('default', 'success', 'warning', 'error') */
  type: string,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default StatusIcon;
