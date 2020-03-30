import React from 'react';
import { node, string, object, bool, func } from 'prop-types';
import styled from 'styled-components';
import DropDownArrow from '../../Icons/IconActionDropDown';

export const MenuHeader = ({
  opened,
  handleOpenClose,
  children,
  className,
  ...otherProps
}) => {
  return (
    <StyledMenuHeader open={opened} className={className} {...otherProps}>
      {children}
      <ToggleButton onClick={handleOpenClose} open={opened}>
        <DropDownArrow size={22} />
      </ToggleButton>
    </StyledMenuHeader>
  );
};

const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 1px solid ${({ open }) => (!open ? '#e4e4e4' : 'white')};
  border-bottom: 1px solid ${({ open }) => (open ? '#e4e4e4' : 'white')};
  transition: border-top 700ms cubic-bezier(1, 0, 0, 1),
    border-bottom 700ms cubic-bezier(1, 0, 0, 1);
  padding: 1.5rem;
  height: 7.5rem;
`;

const ToggleButton = styled.a`
  transform: ${({ open }) => (!open ? 'rotate(180deg)' : '')};
  transition: transform 700ms cubic-bezier(1, 0, 0, 1);
  cursor: pointer;
  flex: 0 0 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg path {
    stroke: ${({ theme }) => theme.brand.primary};
  }
`;

MenuHeader.propTypes = {
  opened: bool,
  handleOpenClose: func,
  children: node.isRequired,
  className: string,
  otherProps: object,
};
