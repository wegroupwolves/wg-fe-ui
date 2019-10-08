import React from 'react';
import styled from 'styled-components';
import ImageSelectBox from './ImageSelectBox';
import { arrayOf, number, func, string, element, object } from 'prop-types';

const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSelectGroup = ({
  selected,
  setSelected,
  boxes,
  label,
  ...otherProps
}) => {
  const handleChange = ({ target }) => {
    setSelected(target.value);
  };
  return (
    <RadioGroup {...otherProps}>
      {boxes.map(({ id, val, icon }) => (
        <ImageSelectBox
          key={id}
          selected={selected}
          label={label}
          value={val}
          icon={icon}
          onChange={handleChange}
        />
      ))}
    </RadioGroup>
  );
};

ImageSelectGroup.defaultProps = {
  boxes: [],
  setSelected: () => {},
  otherProps: {},
};

ImageSelectGroup.propTypes = {
  selected: string,
  boxes: arrayOf({ id: number, val: string, icon: element }),
  label: string,
  otherProps: object,
  setSelected: func,
};

export default ImageSelectGroup;
