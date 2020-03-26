import React, { useState } from 'react';
import { node, string, object, bool } from 'prop-types';
import styled from 'styled-components';

import { MenuContent } from './MenuContent';
import { MenuHeader } from './MenuHeader';
import { MenuFooter } from './MenuFooter';

const MobileMenu = ({ opened, fixed, children, className, ...otherProps }) => {
  const [open, setOpen] = useState(opened);

  const handleOpenClose = e => {
    setOpen(!open);
  };

  let elements = React.Children.toArray(children);

  return (
    <MenuWrapper
      open={open}
      fixed={fixed}
      className={className}
      {...otherProps}
    >
      {elements.map(element => {
        return React.cloneElement(element, {
          opened: open,
          handleOpenClose: handleOpenClose,
        });
      })}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  font-family: ${({ theme }) => theme.font};
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  bottom: 0;
  left: 0;
  right: 0;
  top: ${({ open }) => (open ? '0' : 'calc(100% - 7.5rem)')};
  transition: top 700ms cubic-bezier(1, 0, 0, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

MobileMenu.propTypes = {
  opened: bool,
  children: node.isRequired,
  className: string,
  otherProps: object,
  fixed: bool,
};

MobileMenu.defaultProps = {
  otherProps: {},
};

MobileMenu.Header = MenuHeader;
MobileMenu.Header.displayName = 'MobileMenu.Header';
MobileMenu.Content = MenuContent;
MobileMenu.Content.displayName = 'MobileMenu.Content';
MobileMenu.Footer = MenuFooter;
MobileMenu.Footer.displayName = 'MobileMenu.Footer';

export default MobileMenu;
