import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Error = ({ error }) => {
  return error ? (
    <ErrorContainer>
      <p>{error}</p>
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
  color: ${({ theme }) => theme.status.error};
`;

Error.displayName = 'Error';

Error.defaultProps = {
  error: '',
};

Error.propTypes = {
  /** string with errormessage */
  error: string,
};

export default Error;
