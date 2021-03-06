import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { IconStatusCheck } from '../Icons';

const FeatureInput = forwardRef(
  (
    {
      icon,
      name,
      checked,
      children,
      editable,
      dataTestId,
      onChange,
      disabled,
      className,
      ...otherProps
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const handleChange = e => {
      if (!disabled) {
        e.persist();
        setIsChecked(e.currentTarget.checked);
        onChange({ name: e.target.name, value: e.currentTarget.checked });
      }
    };

    return (
      <Feature
        checked={isChecked}
        className={className}
        editable={editable}
        {...otherProps}
      >
        <Left checked={isChecked}>
          {icon}

          <p>{children}</p>
        </Left>

        {editable ? (
          <Right>
            <input
              ref={ref}
              name={name}
              id={name}
              disabled={disabled}
              dataTestId={dataTestId}
              checked={isChecked}
              type="checkbox"
              onChange={e => handleChange(e)}
            />

            <StyledInput checked={isChecked} disabled={disabled}>
              {isChecked ? <IconStatusCheck size={25} /> : ''}
            </StyledInput>
          </Right>
        ) : (
          ''
        )}
      </Feature>
    );
  },
);

const Feature = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100rem;
  background-color: ${({ theme, checked }) =>
    checked ? theme.brand.lightest : '#fbfbfb'};
  padding: 0 2.6rem;
  min-height: 75px;
  border-radius: 2px;
  border: 1px solid
    ${({ theme, checked }) => (checked ? theme.brand.light : '#c2c5cf')};
  cursor: ${({ editable }) => (editable ? 'pointer' : 'default')};

  p {
    font-family: ${({ theme }) => theme.font};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 120%;
    color: ${({ theme, checked }) => (checked ? theme.brand.light : '#c2c5cf')};
    flex: 0 1 auto;
  }

  input[type='checkbox'] {
    display: none;
  }
`;

const StyledInput = styled.div`
  flex: 0 0 25px;
  width: 25px;
  height: 25px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.ui.background : 'white'};

  border: 1px solid
    ${({ theme, checked, disabled }) =>
      disabled ? theme.ui.disabled : checked ? theme.brand.light : '#c2c5cf'};

  svg {
    margin-right: 2px;
    path {
      fill: ${({ theme, checked, disabled }) =>
        disabled ? theme.ui.disabled : checked ? theme.brand.light : '#c2c5cf'};
    }
  }
`;

const Left = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > svg {
    flex: 0 0 35px;
    margin-right: 2.5rem;

    path {
      fill: ${({ theme, checked }) =>
        checked ? theme.brand.light : '#c2c5cf'};
    }
  }
`;

const Right = styled.div``;

FeatureInput.displayName = 'FeatureInput';

FeatureInput.propTypes = {};

export default FeatureInput;
