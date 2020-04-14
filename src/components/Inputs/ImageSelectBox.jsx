import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { string, func, node, object } from 'prop-types';

function backgroundColor(status, theme) {
  switch (status) {
    case 'inactive':
      return theme.ui.background;
    case 'normal':
      return '#FFFFFF';
    case 'selected':
      return theme.brand.lightest;
    default:
      break;
  }
}

function borderColor(status, theme) {
  switch (status) {
    case 'inactive':
      return theme.ui.outline;
    case 'normal':
      return theme.ui.outline;
    case 'selected':
      return theme.brand.secondary;
    default:
      break;
  }
}

function iconColor(status, theme) {
  switch (status) {
    case 'inactive':
      return theme.ui.outline;
    case 'normal':
      return theme.ui.interactive;
    case 'selected':
      return theme.brand.secondary;
    default:
      break;
  }
}

const RadioButton = styled.label`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  padding: 43px auto auto 27px;
  cursor: pointer;
  margin-right: 1.3vw;
  background-color: ${({ mode, theme }) => backgroundColor(mode, theme)};

  border: 1px solid;
  border-color: ${({ mode, theme }) => borderColor(mode, theme)};
  box-sizing: border-box;
  border-radius: 5px;
  color: ${({ mode, theme }) => iconColor(mode, theme)};

  &::after {
    content: '${({ label }) => label}';
    display: block;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }

  svg {
    width: 96px;
    height: 54px;
    margin-bottom: 10px;

    path {
      fill: ${({ mode, theme }) => iconColor(mode, theme)};
      stroke: ${({ mode, theme }) => iconColor(mode, theme)};
    }
  }

  input {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

RadioButton.displayName = 'RadioButton';

const ImageSelectBox = forwardRef(
  ({ selected, label, value, icon, onChange, name, ...otherProps }, ref) => {
    const handleChange = e => {
      e.persist();
      onChange({ name: e.target.name, value: e.target.value });
    };
    let mode = 'normal';
    if (selected === value) mode = 'selected';
    else if (selected) mode = 'inactive';
    return (
      <RadioButton mode={mode} label={label} {...otherProps}>
        {icon}
        <input
          ref={ref}
          type="radio"
          checked={selected === value}
          value={value}
          onChange={handleChange}
          name={name}
        />
      </RadioButton>
    );
  },
);

ImageSelectBox.displayName = 'ImageSelectBox';

ImageSelectBox.defaultProps = {
  label: 'means',
  onChange: () => {},
  name: 'radios',
  otherProps: {},
  selected: '',
};

ImageSelectBox.propTypes = {
  selected: string,
  label: string,
  value: string.isRequired,
  icon: node,
  onChange: func,
  mode: string,
  name: string,
  otherProps: object,
};

export default ImageSelectBox;
