import React from 'react';
import { bool, string, node, func, object, array } from 'prop-types';
import styled from 'styled-components';

const ToggleButtonGroup = ({
  level,
  disabled,
  active,
  items,
  fullwidth,
  onClick,
  icon,
  className,
  ...otherProps
}) => {
  const handleClick = item => {
    if (!disabled) {
      onClick(item);
    }
  };

  return items.map((item, index) => {
    return (
      <StyledButton
        key={'toggleButtonGroup' + index}
        level={item === active ? 'active' : 'non-active'}
        onClick={() => handleClick(item)}
        fullwidth={fullwidth}
        disabled={disabled}
        className={className}
        {...otherProps}
      >
        {icon ? <Image src={icon} /> : null}
        {item}
      </StyledButton>
    );
  });
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  background-color: ${({ disabled, level, theme }) =>
    disabled
      ? theme.ui.disabled
      : level === 'active'
      ? theme.brand.primary
      : '#f0f1f3'};

  color: ${({ level }) => (level === 'active' ? 'white' : '#8990a3')};
  transition: opacity 0.2s ease-in;
  font-size: 14px;
  min-width: 12rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '')};
  height: 3rem;
  border: 0;
  padding: 0 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    background-position: left;
  }

  &:first-child {
    border-radius: 2.5rem 0 0 2.5rem;
  }

  margin-right: 1px;

  &:last-child {
    border-radius: 0 2.5rem 2.5rem 0;
    margin-right: 0px;
  }
`;

const Image = styled.img`
  margin-right: 0.8rem;
  height: 1.8rem;
`;

ToggleButtonGroup.defaultProps = {
  disabled: false,
  level: 'primary',
  fullwidth: false,
  icon: null,
  otherProps: {},
};

ToggleButtonGroup.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  disabled: bool,
  /** The level of the button */
  level: string,
  /** The labels for the toggle button */
  item: array.isRequired,
  /** If true button width is 100% */
  fullwidth: bool,
  /** Triggered when button is clicked */
  onClick: func.isRequired,
  /** Adds icon to button */
  icon: node,
  /** Adds extra props to the element */
  otherProps: object,
};

export default ToggleButtonGroup;
