import React, { forwardRef, useState } from 'react';
import { array, object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import UploadIcon from '../Icons/Upload';

const getAccepted = accepted => {
  const len = accepted.length;
  const accept = accepted
    .map((a, i) => {
      let type = a.type ? a.type : '';
      type += a.extension ? `/${a.extension}` : '/*';
      type += i !== len - 1 ? ', ' : '';
      return type;
    })
    .join(' ');
  return accept;
};

let counter = 0;

function dragEnter(e, setFile) {
  counter++;
  setFile(true);
  e.preventDefault();
}

function dragLeave(e, setFile) {
  counter--;
  counter === 0 && setFile(false);
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function dropFile(e, setFile, onClick, multiple) {
  e.preventDefault();
  e.stopPropagation();

  const files = multiple ? e.dataTransfer.files : [e.dataTransfer.files[0]];

  onClick(files);
  setFile(false);
  counter = 0;
}

const UploadField = forwardRef(
  ({ icon, name, multiple, onClick, supported, text, ...otherProps }, ref) => {
    const [withFile, setWithFile] = useState(false);
    const handleChange = ({ target }) => onClick(target.files);
    return (
      <StyledButton
        withFile={withFile}
        onClick={onClick}
        onDragEnter={e => dragEnter(e, setWithFile)}
        onDragLeave={e => dragLeave(e, setWithFile)}
        onDragOver={dragOver}
        onDrop={e => dropFile(e, setWithFile, onClick, multiple)}
        {...otherProps}
      >
        {icon}
        {withFile ? 'Drop file to upload' : text}
        <input
          accept={supported.length ? getAccepted(supported) : '*'}
          ref={ref}
          type="file"
          name={name}
          multiple={multiple}
          onChange={handleChange}
        />
      </StyledButton>
    );
  },
);

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
  &:hover {
    cursor: pointer;
    input,
    svg {
      cursor: pointer;
    }
  }
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
UploadField.displayName = 'UploadField';

UploadField.defaultProps = {
  multiple: false,
  icon: <UploadIcon />,
  name: 'label',
  text: 'Click here or drag file to upload',
  otherProps: {},
  supported: [],
  fullwidth: false,
};

UploadField.propTypes = {
  fullwidth: bool,
  icon: element,
  name: string.isRequired,
  multiple: bool,
  onClick: func.isRequired,
  supported: array,
  text: string,
  otherProps: object,
};

export default UploadField;
