import React, { useState } from 'react';
import { string, node, bool, func } from 'prop-types';
import styled from 'styled-components';

const CollapsibleSidebar = ({
  label,
  children,
  open,
  selectAll,
  onSelectAllClick,
  onDeselectAllClick,
  isAllSelected,
  hideText = 'Hide',
  showText = 'Show',
  selectAllText = 'Select all',
  deselectAllText = 'Deselect all',
  hideButton,
}) => {
  const [SideBarOpen, setSideBarOpen] = useState(open);

  const handleToggle = () => {
    setSideBarOpen(!SideBarOpen);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <span className="title">{label}</span>
        {!hideButton &&
          (selectAll ? (
            <SidebarToggle
              onClick={args =>
                isAllSelected
                  ? onDeselectAllClick(args)
                  : onSelectAllClick(args)
              }
            >
              {isAllSelected ? deselectAllText : selectAllText}
            </SidebarToggle>
          ) : (
            <SidebarToggle onClick={handleToggle}>
              {SideBarOpen ? hideText : showText}
            </SidebarToggle>
          ))}
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
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 120%;
    color: ${({ theme }) => theme.typo.subTitle};
  }
`;

const SidebarContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const SidebarToggle = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  line-height: 120%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.primary};
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

CollapsibleSidebar.propTypes = {
  /** Label to be displayed at the top. */
  label: string,

  /** Children to be displayed in the menu. */
  children: node,

  /** Initial opened or closed state */
  open: bool,

  /** If select  all should show instead of hide */
  selectAll: bool,

  /** The select all event */
  onSelectAllClick: func,

  /** The deselect all event */
  onDeselectAllClick: func,

  /** Are all fields selected */
  isAllSelected: bool,

  /** Content for hide text */
  hideText: string,

  /** Content for show text */
  showText: string,

  /** Content for select all text */
  selectAllText: string,

  /** Content for deselect all text */
  deselectAllText: string,

  /** Should button on the right be hidden */
  hideButton: bool,
};

CollapsibleSidebar.defaultProps = {
  open: false,
};

export default CollapsibleSidebar;
