import React, { useRef, useState } from 'react';
import { object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import UploadIcon from '../Icons/Upload';

let counter = 0;

function dragEnter(e, setFile) {
  counter += 1;
  setFile(true);
  e.preventDefault();
}

function dragLeave(e, setFile) {
  counter -= 1;
  counter === 0 && setFile(false);
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function dropFile(e, setFile, onClick) {
  e.preventDefault();
  e.stopPropagation();

  onClick(e.dataTransfer.files[0]);
  setFile(false);
  counter = 0;
}

const UploadField = ({
  icon,
  name,
  multiple,
  onChange,
  onClick,
  text,
  ...otherProps
}) => {
  const ref = useRef();
  const [withFile, setWithFile] = useState(false);
  const handleChange = ({ target: { value } }) => onChange(value);

  return (
    <StyledButton
      ref={ref}
      withFile={withFile}
      onClick={onClick}
      onDragEnter={e => dragEnter(e, setWithFile)}
      onDragLeave={e => dragLeave(e, setWithFile)}
      onDragOver={e => dragOver(e, setWithFile)}
      onDrop={e => dropFile(e, setWithFile, onClick)}
      {...otherProps}
    >
      {icon}
      {withFile ? 'Drop file to upload' : text}
      <input
        type="file"
        name={name}
        multiple={multiple}
        onChange={handleChange}
      />
    </StyledButton>
  );
};

const StyledButton = styled.label`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
  line-height: 130%;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '52vw')};
  padding: 2vh 0;
  border: 0.5px solid;
  border-color: ${({ withFile }) =>
    withFile ? key('colors.toggle') : key('colors.big-disabled')};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ withFile }) =>
    withFile ? key('colors.toggle') : key('colors.highlight')};
  cursor: pointer;
  background-color: ${({ withFile }) =>
    withFile ? key('colors.selected') : key('colors.big-disabled')};
  position: relative;

  svg {
    margin-bottom: 12px;

    path {
      fill: ${({ withFile }) =>
        withFile ? key('colors.toggle') : key('colors.interactive')};
    }
  }

  input {
    position: absolute;
    opacity: 0;
  }
`;

StyledButton.displayName = 'StyledButton';

UploadField.defaultProps = {
  multiple: false,
  icon: <UploadIcon />,
  name: 'label',
  text: 'Click here or drag file to upload',
  otherProps: {},
  fullwidth: false,
};

UploadField.propTypes = {
  fullwidth: bool,
  icon: element,
  name: string.isRequired,
  multiple: bool,
  onChange: func.isRequired,
  onClick: func.isRequired,
  text: string,
  otherProps: object,
};

export default UploadField;
