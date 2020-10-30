import React, {
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
} from 'react';
import styled from 'styled-components';
import { string, bool, func, node } from 'prop-types';

const Tabs = ({ defaultActive, onSelect, className, children, activeTab }) => {
  const [active, setActive] = useState();
  const navigationList = useRef(null);
  const currentActiveClientRect = navigationList?.current?.children
    ?.namedItem(active)
    ?.getBoundingClientRect();
  const currentActiveClientRectParent = navigationList?.current?.getBoundingClientRect();

  useEffect(() => {
    setDefaultTabActive();
  }, [defaultActive]);

  function setDefaultTabActive() {
    let tabName;
    if (defaultActive) {
      tabName = defaultActive;
    } else {
      const [firstChild] = Children.toArray(children);
      const { props } = firstChild;
      tabName = props?.name;
    }
    setActive(tabName);
  }

  useEffect(() => {
    if (active && !activeTab) {
      onSelect(active);
    }
  }, [active]);

  useEffect(() => {
    if (activeTab) {
      setActive(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = tabName => {
    if (activeTab) {
      onSelect(tabName);
    } else {
      setActive(tabName);
    }
  };

  return (
    <TabContainer className={className}>
      <SelectorContainer>
        <LinkList ref={navigationList}>
          {Children.toArray(children).map(child => {
            const { props } = child;
            return cloneElement(child, {
              active: props.name === active,
              onClick: () => handleTabClick(props.name),
            });
          })}
        </LinkList>
        <Selector
          left={
            currentActiveClientRect?.left -
              currentActiveClientRectParent?.left || 1
          }
          width={currentActiveClientRect?.width + 2 || 0}
        />
        <DividerLine />
      </SelectorContainer>
    </TabContainer>
  );
};

Tabs.defaultProps = {
  defaultActive: undefined,
  onSelect: () => {},
};

Tabs.propTypes = {
  /** only for Tabs.Item */
  name: string.isRequired,
  /** Dont set on Tabs.Item this is only for internal usage */
  active: bool,
  /** Dont set on Tabs.Item this is only for internal usage */
  onClick: func,
  defaultActive: string,
  children: node.isRequired,
  onSelect: func,
  className: string,
  activeTab: string,
};

const Tab = ({ name, rightAlign, children, active, onClick, width }) => {
  return (
    <Item
      onClick={onClick}
      name={name}
      rightAlign={rightAlign}
      active={active}
      width={width}
    >
      {children}
    </Item>
  );
};

Tab.defaultProps = {
  rightAlign: false,
  active: false,
  onClick: () => {},
  width: '12rem',
};

Tab.propTypes = {
  width: string,
  name: string.isRequired,
  rightAlign: bool,
  children: node.isRequired,
  active: bool,
  onClick: func,
};

const Item = styled.li`
  color: ${props => (props.active ? 'black' : '#8990a3')};
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  padding: 2rem 0;
  width: ${props => props.width};
  margin-left: ${props => (props.rightAlign ? 'auto' : 'inherit')};
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  text-transform: capitalize;
  &:hover {
    color: black;
  }
`;

const LinkList = styled.ul`
  display: flex;
`;

const Selector = styled.div`
  position: absolute;
  height: 2px;
  background-color: ${({ theme }) => theme.brand.primary};
  left: ${props => (props.left ? `${props.left}px` : 'inherit')};
  width: ${props => (props.width ? `${props.width}px` : 'inherit')};
  transition: 0.3s ease-out;
  margin-top: -2px;
`;

const SelectorContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  z-index: -9;
  margin-top: -2px;
`;

const TabContainer = styled.nav`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
`;

Tabs.Item = Tab;
Tabs.Item.displayName = 'Tabs.Item';

export default Tabs;
