import React from 'react';
import { bool, func, element, string, object } from 'prop-types';
import styled from 'styled-components';

import CardPickerHeader from './CardPickerHeader';
import CardPickerContent from './CardPickerContent';
import { IconStatusCheck } from '../../Icons';

const CardPicker = ({
  active,
  disabled,
  onClick,
  children,
  className,
  otherProps,
}) => {
  return (
    <StyledCardPicker
      active={active}
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      {children}

      {active ? (
        <SelectedBox>
          <IconStatusCheck size={20} />
          <p>Selected</p>
        </SelectedBox>
      ) : null}
    </StyledCardPicker>
  );
};

const StyledCardPicker = styled.div`
  width: 100%;
  max-width: 100rem;
  border: ${({ theme, active }) =>
    active ? `2px solid ${theme.brand.primary}` : '2px solid #f0f1f3'};
  background: white;
  box-sizing: border-box;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  user-select: ${({ disabled }) => (disabled ? 'none' : null)};

  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: ${({ disabled }) =>
      !disabled
        ? `0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.04), 0 24px 32px rgba(0, 0, 0, 0.04)`
        : null};
  }
`;

const SelectedBox = styled.div`
  position: absolute;
  bottom: 1.6rem;
  right: 1.6rem;
  background-color: ${({ theme }) => theme.brand.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 9999px;
  padding: 0.2rem 0.8rem;

  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);

  > svg path {
    fill: white;
  }

  > p {
    margin-left: 1.2rem;
    font-family: ${({ theme }) => theme.font};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: white;
  }
`;

CardPicker.propTypes = {
  /** Defines wether or not the element should display active styling. */
  active: bool,
  /** Defines wether or not the element is enabled. */
  disabled: bool,
  /** Function to be executed when the element is clicked. */
  onClick: func,
  /** Content of the element. */
  children: element.isRequired,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

CardPicker.Header = CardPickerHeader;
CardPicker.Header.displayName = 'CardPicker.Header';
CardPicker.Content = CardPickerContent;
CardPicker.Content.displayName = 'CardPicker.Content';

export default CardPicker;
