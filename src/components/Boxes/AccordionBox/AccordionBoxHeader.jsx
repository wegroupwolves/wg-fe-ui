import React from 'react';
import styled from 'styled-components';
import { IconActionDropDown } from '../../Icons/index';
import { node, bool, func } from 'prop-types';

const AccordionBoxHeader = ({ children, open, toggle }) => {
  return (
    <Wrapper onClick={toggle}>
      {children}

      <ToggleWrapper open={open}>
        <IconActionDropDown />
      </ToggleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 6.5rem;
  cursor: pointer;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${({ open }) =>
    open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'};
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.85, 0, 0.15, 1);

  svg path {
    stroke: ${({ theme }) => theme.ui.outline};
  }
`;

AccordionBoxHeader.propTypes = {
  children: node,
  open: bool.isRequired,
  toggle: func.isRequired,
};

export default AccordionBoxHeader;
