import React, { forwardRef, useState, useEffect } from 'react';
import { bool, node, func, string, object } from 'prop-types';
import styled from 'styled-components';

import Checkmark from '../../../assets/checkmark.js';

const CheckBox_v2 = forwardRef(
  (
    {
      className,
      checked,
      disabled,
      onChange,
      children,
      name,
      side,
      ...otherProps
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(checked ? true : false);

    const handleChange = e => {
      if (!disabled) {
        e.persist();
        setIsChecked(e.target.checked);
        onChange({ name: e.target.name, value: e.target.checked });
      }
    };

    useEffect(() => {
      if (isChecked !== checked) {
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
        {side === 'left' ? children : null}
        <input
          ref={ref}
          name={name}
          id={name}
          disabled={disabled}
          checked={isChecked}
          type="checkbox"
          onChange={handleChange}
        />
        <StyledBox disabled={disabled} checked={isChecked} side={side}>
          {isChecked ? <StyledCheckmark color={'white'} /> : null}
        </StyledBox>
        {side === 'right' ? children : null}
      </StyledLabel>
    );
  },
);

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.3rem;
  flex: 0 0 1.8rem;
  border: 1px solid
    ${({ theme, disabled, checked }) =>
      disabled ? ' #E4E4E4' : checked ? theme.brand.primary : '#8990A3'};
  margin-right: ${({ side }) => (side === 'right' ? '1rem' : '')};
  margin-left: ${({ side }) => (side === 'left' ? '1rem' : '')};
  background-color: ${({ theme, disabled, checked }) =>
    disabled && checked
      ? '#8990A3'
      : disabled && !checked
      ? theme.ui.toolbar
      : checked
      ? theme.brand.primary
      : 'transparent'};
  margin-bottom: 2px;
  transition: background-color 0.1s ease-in-out, border 0.1s ease-in-out;
`;

const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  line-height: 120%;
  color: ${({ disabled, theme }) => (disabled ? theme.ui.disabled : '#0e0e0e')};

  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};

  & input {
    display: none;
  }
`;

const StyledCheckmark = styled(Checkmark)`
  width: 80%;
`;

CheckBox_v2.displayName = 'CheckBox';

CheckBox_v2.defaultProps = {
  checked: false,
  disabled: false,
  otherProps: {},
  side: 'right',
};

CheckBox_v2.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true box is disabled */
  disabled: bool,
  /** If true box is initialy checked */
  checked: bool,
  /** The label next to the box */
  children: node,
  /** Triggered when button is clicked */
  onChange: func,
  /** Adds extra props to the element */
  otherProps: object,
  /** Pass this prop with "left" or "right" to show the label on the respective side. */
  side: string,
  name: string,
  theme: object,
};

export default CheckBox_v2;
