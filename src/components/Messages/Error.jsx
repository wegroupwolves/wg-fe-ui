import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Error = ({ error, warning }) => {
  return error || warning ? (
    <ErrorContainer error={error}>
      <p>{error || warning}</p>
    </ErrorContainer>
  ) : null;
};

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: ${({ theme, error }) =>
    error ? theme.status.error : theme.status.warning};
`;

Error.displayName = 'Error';

Error.defaultProps = {
  error: '',
};

Error.propTypes = {
  /** string with errormessage */
  error: string,
  /** string with warningmessage */
  warning: string,
};

export const getBorderColor = (error, touched, theme, warning) => {
  if (error) return theme.status.error;
  else {
    if (warning) return theme.status.warning;
    else if (touched) return theme.status.succes;
  }
  return theme.ui.outline;
};

export default Error;
