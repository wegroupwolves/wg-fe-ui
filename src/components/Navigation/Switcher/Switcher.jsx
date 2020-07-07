import React from 'react';
import { node, string, object } from 'prop-types';
import styled from 'styled-components';

import SwitcherButton from './SwitcherButton';

const Switcher = ({ children, className, ...otherProps }) => {
  return (
    <StyledSwitcher className={className} {...otherProps}>
      {children}
    </StyledSwitcher>
  );
};

const StyledSwitcher = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  background: white;
  border: 1px solid #f0f1f3;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  > * {
    border-right: 1px solid #f0f1f3;

    /* Disabled to ensure the last element can not have a border. */
    /* stylelint-disable-line selector-max-universal */
    &:last-child {
      border-right: 0;
    }
  }
`;

Switcher.propTypes = {
  /** Elements to be displayed inside the switcher. */
  children: node.isRequired,
  /** Extra classnames to be added to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

Switcher.SwitcherButton = SwitcherButton;
Switcher.SwitcherButton.displayName = 'Switcher.SwitcherButton';

export default Switcher;
