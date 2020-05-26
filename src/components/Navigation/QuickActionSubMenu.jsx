import React, { useState, useEffect, useRef } from 'react';
import { node, string, func, object } from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icons/IconOthersFilled';

const StyledSubmenuItem = ({ label, type, onClick }) => (
  <SubMenuItem onClick={onClick} className={type}>
    {label}
  </SubMenuItem>
);

StyledSubmenuItem.propTypes = {
  /** The text to be displayed in the menu item. */
  label: string,
  /** The type of menu item, used for styling. */
  type: string,
  /** A onClick function to be executed when the item is clicked. */
  onClick: func.isRequired,
};

StyledSubmenuItem.defaultProps = {
  onClick: () => {},
  type: '',
};

const QuickActionSubMenu = ({ children, ...otherProps }) => {
  const node = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.addEventListener('click', handleClick);
    } else {
      document.body.removeEventListener('click', handleClick);
    }
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [menuOpen]);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      console.log('clicked handle');
      return;
    }
    setMenuOpen(false);
  };

  const handleInsideClick = e => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  return (
    <QuickActionSubMenuWrapper {...otherProps} ref={node}>
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        <Icon></Icon>
      </MenuToggle>

      <SubMenu open={menuOpen} onClick={handleInsideClick}>
        {children}
      </SubMenu>
    </QuickActionSubMenuWrapper>
  );
};

const QuickActionSubMenuWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font};
`;

const MenuToggle = styled.a`
  cursor: pointer;

  svg > circle {
    fill: ${({ theme }) => theme.typo.title};
  }

  &:hover {
    svg > circle {
      fill: ${({ theme }) => theme.brand.primary};
    }
  }
`;

const SubMenu = styled.div`
  width: 125px;
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: white;
  flex-direction: column;
  top: 30px;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  transform: translateX(calc(-50% + 18px));
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const SubMenuItem = styled.a`
  padding: 5px 10px;
  display: block;
  width: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.8rem;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.ui.toolbar};
  }

  &.danger {
    color: ${({ theme }) => theme.status.error};
  }

  &.warning {
    color: ${({ theme }) => theme.status.warning};
  }

  &.success {
    color: ${({ theme }) => theme.status.succes};
  }
`;

QuickActionSubMenu.propTypes = {
  /** Menu items passed as children. */
  children: node.isRequired,
  otherProps: object,
};

QuickActionSubMenu.defaultProps = {
  otherProps: {},
};

QuickActionSubMenu.SubMenuItem = StyledSubmenuItem;
QuickActionSubMenu.SubMenuItem.displayName = 'QuickActionSubMenu.SubMenuItem';

export default QuickActionSubMenu;
