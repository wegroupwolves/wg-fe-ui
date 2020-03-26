import React from 'react';
import { node, string, object, bool } from 'prop-types';
import styled from 'styled-components';

const SectionRow = ({ children, border, size, className }) => {
  return (
    <StyledSectionRow border={border} size={size} className={className}>
      {children}
    </StyledSectionRow>
  );
};

const Section_v2 = ({ children, className, ...otherProps }) => {
  return (
    <StyledSection {...otherProps} className={className}>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  padding: 2.4rem 3.6rem;
  margin-top: 2rem;
  position: relative;
  background: white;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0 6px 16px rgba(181, 181, 181, 0.25);
  border-radius: 5px;
  width: 100%;
  max-width: 100rem;
`;

const StyledSectionRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: ${({ border }) => (border ? '1px solid #e4e4e4' : '')};
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;

  /* stylelint-disable-next-line selector-max-universal */
  > * {
    flex: 0 0
      ${({ size }) =>
        size == 'three' ? '31.5%' : size == 'two' ? '47.5%' : '100%'};
    margin: 5px 0;
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

Section_v2.propTypes = {
  children: node,
  className: string,
  otherProps: object,
};

Section_v2.defaultProps = {
  otherProps: {},
};

SectionRow.propTypes = {
  children: node.isRequired,
  className: string,
  /** Pass "one", "two" or "three" to choose the amount of columns in the row. */
  size: string,
  /** Pass this prop to add a border at the bottom of the row. */
  border: bool,
};

Section_v2.Row = SectionRow;
Section_v2.Row.displayName = 'Section_v2.Row';

export default Section_v2;
