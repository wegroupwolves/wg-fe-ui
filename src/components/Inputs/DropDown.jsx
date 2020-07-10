import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { element, array, bool, string, object, func } from 'prop-types';

import { IconChevronDown } from '../Icons';
import { H4, Body } from '../Typography';

/**
    TODO:
    - Hide the menu on click outside of the element.
*/

const DropDown = ({
  name,
  onValueChange,
  children,
  options,
  value,
  disabled,
  className,
  otherProps,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [currentOption, setCurrentOption] = useState();

  useEffect(() => {
    const result = options.filter(obj => {
      return obj.value === currentValue;
    });

    setCurrentOption(result[0]);
  }, [currentValue]);

  const handleInputClick = () => {
    if (!disabled) {
      setShowMenu(!showMenu);
    }
  };

  const handleOptionClick = chosenValue => {
    const result = options.filter(obj => {
      return obj.value === chosenValue;
    });

    onValueChange(result);
    setCurrentValue(result[0].value);

    setShowMenu(false);
  };

  return (
    <DropDownWrapper disabled={disabled} className={className} {...otherProps}>
      <Label for={name}>{children}</Label>

      <StyledDropDown>
        <Input
          onClick={() => handleInputClick()}
          show={showMenu}
          disabled={disabled}
        >
          {currentOption ? currentOption?.title : 'Please select an option'}

          <DropDownIcon>
            <IconChevronDown size={25} />
          </DropDownIcon>
        </Input>

        <Menu show={showMenu}>
          {options.map(option => {
            return (
              <MenuOption
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                <H4>{option.title}</H4>
                <Body tiny light>
                  {option.text}
                </Body>
              </MenuOption>
            );
          })}
        </Menu>
      </StyledDropDown>
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  z-index: 9999;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.01em;
  color: #8990a3;
  margin-bottom: 0.8rem;
  display: block;
`;

const StyledDropDown = styled.div`
  position: relative;
`;

const Input = styled.div`
  width: 100%;
  height: 4.5rem;
  border: 1px solid #e4e4e4;
  background-color: ${({ disabled }) => (disabled ? '#E4E4E4' : 'white')};
  border-radius: ${({ show }) => (show ? '5px 5px 0 0' : '5px')};
  padding: 1.2rem 1.8rem;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
  color: #222;
`;

const DropDownIcon = styled.div`
  position: absolute;
  right: 1.2rem;
  margin-top: 0.1rem;

  > svg path {
    fill: #c1c1c1;
  }
`;

const Menu = styled.div`
  z-index: 9999;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 45px;
  width: 100%;
  max-height: 30rem;
  overflow-y: scroll;

  background-color: white;
  border: 1px solid #e4e4e4;
  border-top: 0;
  border-radius: 0 0 5px 5px;
`;

const MenuOption = styled.div`
  padding: 1.6rem;
  border-bottom: 1px solid #e4e4e4;
  background-color: white;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: #f0f1f3;
  }
`;

DropDown.propTypes = {
  /** Name of the input */
  name: string.isRequired,
  /** Function that passes back the complete chosen option object. */
  onValueChange: func.isRequired,
  /** Label to be displayed above the input. */
  children: element,
  /** Array of options (Options can contain: title, text, value). */
  options: array.isRequired,
  /** Value of the initial chosen option. */
  value: object,
  /** Wether the input should be disabled or not. */
  disabled: bool,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default DropDown;
