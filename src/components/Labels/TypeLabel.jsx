import React from 'react';
import { string, object } from 'prop-types';
import styled from 'styled-components';

const TypeLabel = ({ text, type, className, ...otherProps }) => {
  return (
    <StyledLabel
      className={className ? `${type + ' ' + className}` : type}
      {...otherProps}
    >
      {text}
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  font-weight: bold;
  padding: 3px 18px;
  border-radius: 5px;
  min-width: 93px;
  text-align: center;
  color: ${({ theme }) => theme.labels.defaultText};
  background: ${({ theme }) => theme.labels.default};

  &.prospect {
    color: ${({ theme }) => theme.labels.prospectText};
    background: ${({ theme }) => theme.labels.prospect};
  }

  &.customer {
    color: ${({ theme }) => theme.labels.customerText};
    background: ${({ theme }) => theme.labels.customer};
  }

  &.lead {
    color: ${({ theme }) => theme.labels.leadText};
    background: ${({ theme }) => theme.labels.lead};
  }
`;

TypeLabel.defaultProps = {
  text: 'Prospect',
  type: 'default',
  otherProps: {},
};

TypeLabel.propTypes = {
  /** The text the label should contain */
  text: string,
  /** The type of the label */
  type: string,
  /** Custom className that will be added on top of the type's className */
  className: string,
  otherProps: object,
};

export default TypeLabel;
