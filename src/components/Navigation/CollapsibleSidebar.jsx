import React, { useState } from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const CollapsibleSidebar = ({ label, children }) => {
  const [SideBarOpen, setSideBarOpen] = useState(false);

  const handleToggle = () => {
    SideBarOpen ? setSideBarOpen(false) : setSideBarOpen(true);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <span className="title">{label}</span>
        <SidebarToggle onClick={handleToggle}>
          {SideBarOpen ? 'Hide' : 'Show'}
        </SidebarToggle>
      </SidebarHeader>

      <SidebarContent open={SideBarOpen}>{children}</SidebarContent>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #d2d2d2;
  padding-bottom: 13px;
  align-items: flex-end;
  margin-bottom: 13px;

  .title {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${({ theme }) => theme.typo.subTitle};
  }
`;

const SidebarContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const SidebarToggle = styled.a`
  font-size: 1rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.primary};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

CollapsibleSidebar.propTypes = {
  label: string,
  children: node,
};

export default CollapsibleSidebar;
