import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { node, array, bool, string, object, func } from 'prop-types';
import Error from './../Messages/Error';
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
  dataTestId,
  options,
  value,
  error,
  disabled,
  className,
  otherProps,
  placeholder,
  opensUp,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [currentOption, setCurrentOption] = useState();
  const containerRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const result = options.filter(obj => {
      return obj.value === currentValue;
    });

    setCurrentOption(result[0]);
  }, [currentValue]);


  const handleInputClickOutside = (e) => {
    if (disabled || showMenu) return;
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleInputClickOutside, true);
    return () => {
      document.removeEventListener('click', handleInputClickOutside, true);
    };
  }, []);

  const handleInputClick = () => {
    if (!disabled) {
      setShowMenu(!showMenu);
    }
  };

  const handleInputKey = (e) => {
    if (!disabled) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        setShowMenu(!showMenu);
      }
    }
  };

  const handleInputKeyOption = (e, value) => {
    if (!disabled) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        handleOptionClick(value);
      }
    }
  };

  const handleOptionClick = chosenValue => {
    const result = options.filter(obj => {
      return obj.value === chosenValue;
    });

    onValueChange(result);
    setCurrentValue(result[0].value);
    inputRef.current.focus();
    setShowMenu(false);
  };

  return (
    <DropDownWrapper ref={containerRef} disabled={disabled} className={className} {...otherProps}>
      <Label htmlFor={name}>{children}</Label>
      <StyledDropDown>
        <Input
          error={error}
          ref={inputRef}
          onKeyDown={handleInputKey}
          tabIndex="0"
          opensUp={opensUp}
          onClick={handleInputClick}
          show={showMenu}
          disabled={disabled}
          dataTestId={dataTestId}
        >
          {currentOption ? currentOption?.title : placeholder}
          <DropDownIcon>
            <IconChevronDown size={25} />
          </DropDownIcon>
          <StyledError error={error} />
        </Input>
        <Menu show={showMenu} opensUp={opensUp}>
          {options.map(option => {
            return (
              <MenuOption
                key={option.value}
                onKeyDown={e => handleInputKeyOption(e, option.value)}
                tabIndex="0"
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

const StyledError = styled(Error)`
  position: absolute;
  top: 100%;
  right: 0;
`;

const DropDownWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  z-index: 9999;
  height: 9rem;
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
  border: 1px solid ${({ error }) => error ? 'red' : '#e4e4e4'};
  background-color: ${({ disabled }) => (disabled ? '#E4E4E4' : 'white')};
  border-radius: ${({ show, opensUp }) =>
    show && opensUp ? '0 0 5px 5px' : show  ? '5px 5px 0 0' : '5px'};
  padding: 1.2rem 1.8rem;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
  color: #222;
  transition: all .2s;
  &:focus {
    outline: 0;
    border: 1px solid ${({ theme, disabled }) => !disabled ? theme.brand.primary : 'rgba(0,0,0,0)'};
  }
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
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  position: absolute;
  left: 0;
  top: ${({ opensUp }) => opensUp ? 'auto' : '100%'};
  bottom: ${({ opensUp }) => opensUp ? '100%' : 'auto'};
  width: 100%;
  max-height: ${({ show }) => (show ? '30rem' : '0')};
  overflow-y: scroll;

  background-color: white;
  border: 1px solid #e4e4e4;
  border-top: 0;
  border-radius: ${({ opensUp }) => opensUp ? '5px 5px 0 0' : '0 0 5px 5px'};
  transition: max-height .2s ease, visibility .2s ease;
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

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.brand.primary};
  }
`;

DropDown.propTypes = {
  // used to identify component for testing
  dataTestId: string,
  /** Name of the input */
  name: string.isRequired,
  /** Function that passes back the complete chosen option object. */
  onValueChange: func.isRequired,
  /** string with errormessage */
  error: string,
  /** label above the input */
  children: node.isRequired,
  /** name of input and label */
  name: string.isRequired,
  /** Array of options (Options can contain: title, text, value). */
  options: array.isRequired,
  /** Value of the initial chosen option. */
  value: object,
  /** Wether the input should be disabled or not. */
  disabled: bool,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Opens the dropdown up instead of down */
  opensUp: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
  placeholder: string,
};

export default DropDown;
