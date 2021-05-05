import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.li`
  font-weight: 500;
  padding-right: 1.6rem;
`;

const SubSection = styled.li`
  font-weight: 400;
  border-right: 1px solid;
  padding-right: 1.6rem;
  border-color: ${({ active, theme }) =>
    active ? theme.brand.primary : 'transparent'};
  color: ${({ theme, active }) =>
    active ? theme.typo.title : theme.labels.guaranteeText};
  transition: 0.2s;
`;

const Item = styled.li`
  position: relative;
  padding-right: 0;
  margin-bottom: 0;
`;

const SectionContainer = styled.ul`
  padding-right: 0;
  font-family: ${({ theme }) => theme.font};
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  max-height: ${({ active }) => (active ? '100vh' : '0')};
  transition: opacity 0.5s, max-height 0.5s;
`;

SubSection.propTypes = {
  active: PropTypes.bool,
};

const StyledSubNavigation = styled.ul`
  font-size: 1.6rem;
  line-height: 120%;
  font-family: ${({ theme }) => theme.font};
  li {
    line-height: 120%;
    text-align: right;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

const SubNavigation = forwardRef(
  ({ className, children, ...otherProps }, ref) => {
    return (
      <StyledSubNavigation ref={ref} className={className} {...otherProps}>
        {children}
      </StyledSubNavigation>
    );
  },
);

SubNavigation.displayName = 'SubNavigation';
SubNavigation.Section = Section;
SubNavigation.Section.displayName = 'SubNavigation.Section';
SubNavigation.SubSection = SubSection;
SubNavigation.SubSection.displayName = 'SubNavigation.SubSection';
SubNavigation.Item = Item;
SubNavigation.SectionContainer = SectionContainer;
SubNavigation.SectionContainer.displayName = 'SubNavigation.SectionContainer';

SubNavigation.propTypes = {
  className: PropTypes.string,
  otherProps: PropTypes.object,
  children: PropTypes.node,
};

export default SubNavigation;
