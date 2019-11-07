import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { key } from 'styled-theme';

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
  font-size: 1.2rem;
  color: ${key('colors.bad')};
`;

Error.displayName = 'SearchSelectInput';

Error.defaultProps = {
  error: '',
};

Error.propTypes = {
  /** string with errormessage */
  error: string,
};

export default Error;
