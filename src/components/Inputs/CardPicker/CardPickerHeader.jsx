import React from 'react';
import { element, string, object } from 'prop-types';
import styled from 'styled-components';

const CardPickerHeader = ({ children, className, otherProps }) => {
  return (
    <StyledCardPickerHeader className={className} {...otherProps}>
      {children}
    </StyledCardPickerHeader>
  );
};

const StyledCardPickerHeader = styled.div`
  padding: 1.6rem;
  border-bottom: 2px solid #f0f1f3;
`;

CardPickerHeader.propTypes = {
  /** Content to be displayed. */
  children: element.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default CardPickerHeader;
