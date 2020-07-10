import React from 'react';
import { element, string, object } from 'prop-types';
import styled from 'styled-components';

const CardPickerContent = ({ children, className, otherProps }) => {
  return (
    <StyledCardPickerContent className={className} {...otherProps}>
      {children}
    </StyledCardPickerContent>
  );
};

const StyledCardPickerContent = styled.div`
  padding: 2.4rem;
`;

CardPickerContent.propTypes = {
  /** The content to be displayed. */
  children: element.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default CardPickerContent;
