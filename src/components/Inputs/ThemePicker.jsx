import React, { useState, useEffect } from 'react';
import { string, object, bool, func } from 'prop-types';
import styled from 'styled-components';

import { IconChevronDown } from '../Icons';

const ThemePicker = ({
  themes,
  activeTheme,
  onChange,
  disabled,
  opensUp,
  className,
  otherProps,
}) => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newTheme = {};

    Object.keys(themes).map(key => {
      if (key === activeTheme) {
        newTheme.name = key;
        newTheme.color = themes[key];
        setCurrentTheme(newTheme);
      }
    });
  }, [activeTheme]);

  useEffect(() => {
    onChange(currentTheme);
  }, [currentTheme]);

  const handleOpenClose = () => {
    if (disabled && !isOpen) return; 
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (colorName, colorCode) => {
    if (disabled) return;
    const newTheme = {};
    newTheme.name = colorName;
    newTheme.color = colorCode;
    setCurrentTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <StyledThemePicker className={className} {...otherProps}>
      <ThemePickerInput
        opensUp={opensUp}
        onClick={() => handleOpenClose()}
        isOpen={isOpen}
        disabled={disabled}
      >
        <ColorBlock color={currentTheme?.color} />
        <ColorName disabled={disabled}>{currentTheme?.name}</ColorName>
        <DropdownIcon>
          <IconChevronDown size={30} />
        </DropdownIcon>
      </ThemePickerInput>

      {disabled ? null : (
        <ThemePickerDropdown opensUp={opensUp} isOpen={isOpen}>
          {Object.keys(themes).map(key => {
            return (
              <DropdownItem
                key={key}
                onClick={() => {
                  handleColorSelect(key, themes[key]);
                }}
              >
                <ColorDrop color={themes[key]} />
                <ColorName>{key}</ColorName>
              </DropdownItem>
            );
          })}
        </ThemePickerDropdown>
      )}
    </StyledThemePicker>
  );
};

const StyledThemePicker = styled.div`
  width: 100%;
  max-width: 100rem;
  position: relative;
`;

const ThemePickerInput = styled.div`
  width: 100%;
  height: 4.5rem;
  background: ${({ disabled }) => (disabled ? '#F0F1F3' : 'white')};
  border: 1px solid ${({ disabled }) => (disabled ? '#F0F1F3' : '#e4e4e4')};
  border-radius: ${({ isOpen, opensUp }) =>
    isOpen && opensUp ? '0 0 5px 5px' : isOpen  ? '5px 5px 0 0' : '5px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: border-radius .2s ease;
`;

const ColorBlock = styled.div`
  width: 3.3rem;
  height: 3.3rem;
  background-color: ${({ color }) => (color ? color : '#222')};
  margin-right: 1.6rem;
  border-radius: 0.5rem;
  flex: 0 0 3.3rem;
`;

const DropdownIcon = styled.div`
  opacity: 0.5;

  svg path {
    fill: #c1c1c1;
  }
`;

const ThemePickerDropdown = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: ${({ opensUp }) => opensUp ? 'auto' : '4.4rem'};
  bottom: ${({ opensUp }) => opensUp ? '100%' : 'auto'};
  left: 0;
  right: 0;
  height: 15rem;
  max-height: ${({ isOpen }) => (isOpen ? '15rem' : '0')};
  overflow-y: scroll;
  border: 1px solid #e4e4e4;
  z-index: 9999;
  background-color: white;
  flex-flow: column;
  border-radius: ${({ opensUp }) => opensUp ? '5px 5px 0 0' : '0 0 5px 5px'};
  transition: all .2s ease;
`;

const DropdownItem = styled.div`
  height: 4.5rem;
  width: 100%;
  flex: 0 0 4.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f0f1f3;
  }
`;

const ColorDrop = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ color }) => color};
  border-radius: 99999px;
  margin-right: 2.4rem;
`;

const ColorName = styled.div`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
  color: ${({ disabled }) => (disabled ? '#8990A3' : '#222')};
  flex: 1 0 auto;
  text-transform: capitalize;
`;

ThemePicker.propTypes = {
  /** An object containing all possible themes and their hexcodes. */
  themes: object.isRequired,
  /** The key of the initial active theme. */
  activeTheme: string.isRequired,
  /** onChange handler when a theme is picked */
  onChange: func.isRequired,
  /** Disabled the operation and selection of colors. */
  disabled: bool,
  /** Opens the dropdown up instead of down */
  opensUp: bool,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default ThemePicker;
