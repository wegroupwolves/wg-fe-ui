import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';

const AccordionBoxContent = ({ children, open, ...rest }) => {
  return (
    <Wrapper open={open} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding-top: 4.5rem;
`;

AccordionBoxContent.propTypes = {
  children: node,
  open: bool,
};

export default AccordionBoxContent;
