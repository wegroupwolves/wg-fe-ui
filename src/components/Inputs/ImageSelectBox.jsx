import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import { string, func, node, object } from 'prop-types';

const backgroundColor = {
  inactive: key('colors.inactive'),
  normal: key('colors.normal'),
  selected: key('colors.selected'),
};

const borderColor = {
  inactive: key('colors.outline'),
  normal: key('colors.outline'),
  selected: key('colors.toggle'),
};

const iconColor = {
  inactive: key('colors.outline'),
  normal: key('colors.interactive'),
  selected: key('colors.toggle'),
};

const RadioButton = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7.3vw;
  padding: 43px auto auto 27px;
  height: 13vh;
  cursor: pointer;
  margin: 0 25px;

  background-color: ${({ mode }) => backgroundColor[mode]};

  border: 1px solid;
  border-color: ${({ mode }) => borderColor[mode]};
  box-sizing: border-box;
  border-radius: 5px;
  color: ${({ mode }) => iconColor[mode]};

  /* @media (max-width: 1200px) {
    display: ${({ mode }) => (mode === 'selected' ? 'flex' : 'none')};
  } */

  &::after {
    content: '${({ value }) => value}';
    display: block;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  svg {
    width: 5vw;

    path {
      fill: ${({ mode }) => iconColor[mode]};
      stroke: ${({ mode }) => iconColor[mode]};
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
  }
`;

RadioButton.displayName = 'RadioButton';

const ImageSelectBox = ({
  selected,
  label,
  value,
  icon,
  onChange,
  ...otherProps
}) => {
  let mode = 'normal';
  if (selected === value) mode = 'selected';
  else if (selected) mode = 'inactive';
  return (
    <RadioButton {...otherProps} mode={mode} value={value}>
      {icon}
      <input
        type="radio"
        name={label}
        checked={selected === value}
        value={value}
        onChange={onChange}
      />
    </RadioButton>
  );
};

ImageSelectBox.defaultProps = {
  label: 'means',
  onChange: () => {},
  mode: 'normal',
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
  otherProps: object,
};

export default ImageSelectBox;
