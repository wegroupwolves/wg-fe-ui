import React, { useState } from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import AccordionBoxContent from './AccordionBoxContent';
import AccordionBoxHeader from './AccordionBoxHeader';

const AccordionBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const elements = React.Children.toArray(children);

  const toggleOpenClose = () => {
    setIsOpen(!isOpen);
    e.stopPropagination();
  };

  return (
    <StyledAccordionBox>
      {elements.map(element => {
        return React.cloneElement(element, {
          open: isOpen,
          toggle: toggleOpenClose,
        });
      })}
    </StyledAccordionBox>
  );
};

const StyledAccordionBox = styled.div`
  width: 100%;
  max-width: 120rem;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  padding: 2.7rem;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
`;

AccordionBox.propTypes = {
  children: node.isRequired,
};

AccordionBox.Header = AccordionBoxHeader;
AccordionBox.Header.displayName = 'AccordionBox.Header';
AccordionBox.Content = AccordionBoxContent;
AccordionBox.Content.displayName = 'AccordionBox.Content';

export default AccordionBox;
