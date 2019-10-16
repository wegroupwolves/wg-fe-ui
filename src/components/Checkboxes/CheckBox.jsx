import React, { useState, useEffect } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { key } from 'styled-theme';

import Checkmark from '../../assets/checkmark.js';

const Checkbox = ({
  className,
  checked,
  disabled,
  onChange,
  children,
  name,
  theme,
  ...otherProps
}) => {
  const [isChecked, setIsChecked] = useState(checked ? true : false);
  const handleChange = e => {
    console.log('Change ', e);
    if (!disabled) {
      setIsChecked(e.currentTarget.checked);
      onChange(e);
    }
  };

  useEffect(() => {
    if (isChecked != checked) {
      setIsChecked(checked);
    }
  }, [checked]);
  return (
    <StyledLabel
      htmlFor={name}
      disabled={disabled}
      className={className}
      {...otherProps}
    >
      <input
        name={name}
        id={name}
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        onChange={e => handleChange(e)}
      />
      <StyledBox disabled={disabled} checked={isChecked}>
        {isChecked && disabled ? (
          <StyledCheckmark color={theme.colors.disabled} />
        ) : isChecked && !disabled ? (
          <StyledCheckmark color={'white'} />
        ) : null}
      </StyledBox>
      {children}
    </StyledLabel>
  );
};

const StyledBox = styled.div`
  background-color: ${props =>
    props.checked && !props.disabled ? key('colors.action') : '#F0F1F3'};
  width: 1.9rem;
  height: 1.9rem;
  border: ${props =>
    props.checked && !props.disabled
      ? null
      : props.disabled
      ? '0.1rem solid #CCCCCC'
      : '0.1rem solid #A29C95'};
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin-right: 1rem;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => (props.checked ? null : '#F7F8F9')};
  }
`;

const StyledLabel = styled.label`
  font-family: ${key('fonts.primary')};
  font-size: 1.4rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  color: ${props =>
    props.disabled ? key('colors.disabled') : key('colors.title')};

  & input {
    display: none;
  }
`;

const StyledCheckmark = styled(Checkmark)`
  width: 80%;
`;

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  otherProps: {},
};

Checkbox.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true box is disabled */
  disabled: bool,
  /** If true box is initialy checked */
  checked: bool,
  /** The label next to the box */
  children: node.isRequired,
  /** Triggered when button is clicked */
  onChange: func.isRequired,
  /** Adds extra props to the element */
  otherProps: object,
  name: string.isRequired,
  theme: object,
};

const exportComponent = withTheme(Checkbox);
exportComponent.displayName = 'Checkbox';
export default exportComponent;
