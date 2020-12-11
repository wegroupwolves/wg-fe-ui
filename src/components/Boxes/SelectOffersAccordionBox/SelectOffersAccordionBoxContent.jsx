import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';

const SelectOffersAccordionBoxContent = ({ children, open }) => {
  return <Wrapper open={open}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

SelectOffersAccordionBoxContent.propTypes = {
  children: node,
  open: bool,
};

export default SelectOffersAccordionBoxContent;
