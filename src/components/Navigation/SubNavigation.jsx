import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { key } from 'styled-theme';

const Section = styled.li`
  font-weight: 900;
`;

const SubSection = styled.li`
  border-right: 1px solid;
  border-color: ${({ active }) =>
    active ? key('colors.action') : 'transparent'};
`;

const SectionContainer = styled.div`
  overflow: ${({ active }) => (active ? 'auto' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  max-height: ${({ active }) => (active ? '100vh' : '0')};
  transition: opacity 0.5s, max-height 0.5s;
`;

SubSection.propTypes = {
  active: PropTypes.bool,
};

const StyledSubNavigation = styled.ul`
  li {
    color: ${key('colors.highlight')};
    line-height: 2rem;
    text-align: right;
    margin-bottom: 0.9vh;
    cursor: pointer;
    padding-right: 0.78vw;
  }
`;

const SubNavigation = ({ className, children, rest }) => {
  return (
    <StyledSubNavigation className={className} {...rest}>
      {children}
    </StyledSubNavigation>
  );
};

SubNavigation.Section = Section;
SubNavigation.Section.displayName = 'SubNavigation.Section';
SubNavigation.SubSection = SubSection;
SubNavigation.SubSection.displayName = 'SubNavigation.SubSection';
SubNavigation.SectionContainer = SectionContainer;
SubNavigation.SectionContainer.displayName = 'SubNavigation.SectionContainer';

SubNavigation.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.object,
  children: PropTypes.node,
};

export default SubNavigation;
