import React, { forwardRef, useState } from 'react';
import { array, object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
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

const validateFiles = (files, validFileTypes) => {
  for (const f of files) {
    const type = f.type.split('/')[1];
    if (!validFileTypes.includes(type)) return false;
  }
  return true;
};

const UploadField = forwardRef(
  (
    {
      icon,
      name,
      multiple,
      onClick,
      supported,
      label,
      errorText,
      ...otherProps
    },
    ref,
  ) => {
    const [withFile, setWithFile] = useState(false);
    const handleChange = ({ target }) => {
      const fileTypes = supported.map(s => s.extension);
      const extensionsOk = validateFiles(target.files, fileTypes);
      if (supported && supported.length && !extensionsOk)
        return alert(errorText);
      onClick(target.files);
    };
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
        {withFile ? 'Drop file to upload' : label}
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
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 120%;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '52vw')};
  padding: 2vh 0;
  border: 0.5px solid;
  border-color: ${({ withFile, theme }) =>
    withFile ? theme.brand.secondary : theme.ui.outline};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ withFile, theme }) =>
    withFile ? theme.brand.secondary : theme.typo.highlight};
  &:hover {
    cursor: pointer;
    input,
    svg {
      cursor: pointer;
    }
  }
  background-color: ${({ withFile, theme }) =>
    withFile ? theme.ui.active : theme.ui.background};
  position: relative;

  svg {
    margin-bottom: 12px;

    path {
      fill: ${({ withFile, theme }) =>
        withFile ? theme.brand.secondary : theme.ui.interactive};
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
  label: 'Click here or drag file to upload',
  otherProps: {},
  supported: [],
  fullwidth: false,
  errorText: 'File error!',
};

UploadField.propTypes = {
  fullwidth: bool,
  icon: element,
  name: string.isRequired,
  multiple: bool,
  onClick: func.isRequired,
  supported: array,
  label: string,
  errorText: string,
  otherProps: object,
};

export default UploadField;
