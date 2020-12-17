import React, { useState } from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

import SelectOffersAccordionBoxContent from './SelectOffersAccordionBoxContent';
import SelectOffersAccordionBoxHeader from './SelectOffersAccordionBoxHeader';

const SelectOffersAccordionBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const elements = React.Children.toArray(children);

  /**
   * To stop the AccordionBox from opening and closing on the click of a
   * child element, add a e.stopPropagation() to the onClick of the child
   * element.
   */
  const toggleOpenClose = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
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
  /* padding: 2.7rem; */
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.06);
  }
`;

SelectOffersAccordionBox.propTypes = {
  children: node,
};

SelectOffersAccordionBox.Header = SelectOffersAccordionBoxHeader;
SelectOffersAccordionBox.Header.displayName = 'SelectOffersAccordionBox.Header';
SelectOffersAccordionBox.Content = SelectOffersAccordionBoxContent;
SelectOffersAccordionBox.Content.displayName =
  'SelectOffersAccordionBox.Content';

export default SelectOffersAccordionBox;
