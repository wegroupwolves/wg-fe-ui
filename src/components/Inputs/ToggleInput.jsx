import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { string, bool, func, object } from 'prop-types';

const ToggleInput = ({
  className,
  checked,
  disabled,
  onChange,
  falseLabel,
  trueLabel,
  ...otherProps
}) => {
  const [isActive, setIsActive] = useState(checked ? true : false);

  useEffect(() => {
    setIsActive(checked);
  }, [checked]);

  const handleChange = e => {
    e.persist();
    setIsActive(e.currentTarget.checked);
    onChange({ name: e.target.name, checked: e.target.checked });
  };

  return (
    <ToggleWrapper disabled={disabled} className={className} {...otherProps}>
      <label>{falseLabel}</label>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={e => handleChange(e)}
        checked={isActive}
      />
      <label>{trueLabel}</label>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.div`
  align-self: stretch;
  padding: 1.6rem 0;
  text-align: center;
  opacity: ${({ disabled }) => (disabled ? '0.65' : '1')};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    font-family: ${({ theme }) => theme.font};
    font-size: 1.4rem;
    font-weight: 400;
    color: black;
  }

  input[type='checkbox'] {
    position: relative;
    appearance: none;
    width: 50px;
    height: 26px;
    background-color: #e4e4e4;
    border-radius: calc(5rem / 2);
    outline: none;
    transition: background-color 0.4s cubic-bezier(0.83, 0, 0.17, 1);
    cursor: pointer;
    margin-left: 16px;
    margin-right: 16px;

    &::before {
      position: absolute;
      display: block;
      content: '';
      border-radius: 9999px;
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: white;
      transition: background 0.4s cubic-bezier(0.83, 0, 0.17, 1),
        left 0.4s cubic-bezier(0.83, 0, 0.17, 1);
      box-shadow: 0 0 10px rgba(32, 32, 35, 0.1);
    }

    &:checked {
      background-color: ${({ theme }) => theme.brand.primary};

      &::before {
        left: calc(100% - 24px);
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

ToggleInput.propTypes = {
  className: string,
  checked: bool,
  disabled: bool,
  onChange: func.isRequired,
  falseLabel: string,
  trueLabel: string,
  otherProps: object,
};

export default ToggleInput;
