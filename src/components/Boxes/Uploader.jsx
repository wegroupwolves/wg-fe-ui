import React, { useState } from 'react';
import { string, arrayOf, func, bool } from 'prop-types';
import styled from 'styled-components';
import UploadField from './../Buttons/UploadField';
import FileBox from './FileBox';

const bytesToMega = value => {
  const val =
    value > 10000
      ? `${(value / 1000000).toFixed(2)} mb`
      : `${(value / 1000).toFixed(2)} kb`;
  return val;
};

// Make text shorter if it's longer than 20 chars.
const shortifyText = text => {
  if (text.length < 20) return text;
  else return `${text.substring(0, 17)}...`;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Uploader = ({ supported, className, multiple, onClick, onClose }) => {
  const [loaded, setLoaded] = useState([]);
  const [files, setFiles] = useState([]);
  const [value, setValue] = useState();

  const readFile = async (file, index) => {
    let reader = new FileReader();
    setLoaded(l => [...l, 0]);
    reader.addEventListener('progress', e => {
      const percentage = (file.size / e.loaded) * 100;
      setLoaded(l => {
        l[index] = percentage;
        return [...l];
      });
    });

    reader.addEventListener('loadend', e => {
      setFiles(f => [
        ...f,
        {
          name: shortifyText(file.name),
          size: bytesToMega(file.size),
          img: file.type.match('image.*') ? e.target.result : '',
        },
      ]);

      setLoaded(l => {
        l[index] = null;
        return [...l];
      });
    });

    await reader.readAsDataURL(file);
  };

  const handleClick = target => {
    if (!target.files) return false;
    // [...target.files].reduce(async (promise, file, i) => {
    //   await promise;
    //   await readFile(file, i);
    // }, Promise.resolve());
    setValue(target.files);
    target.files.forEach((t, i) => {
      readFile(t, i);
    });
    onClick(target.files);
  };

  const handleClose = file => {
    let id;
    setFiles(f => {
      id = f.findIndex(fi => fi.name === file.name);
      f[id] = { name: '', size: '', img: '' };
      return [...f];
    });
    setValue(v => {
      const dt = new DataTransfer();
      for (let i = 0; i < v.length; i++) if (i !== id) dt.items.add(v[i]);

      return dt.files;
    });
    onClose();
  };

  return (
    <StyledUploader className={className}>
      <UploadField
        supported={supported}
        value={value}
        multiple={multiple}
        onClick={handleClick}
      />
      <Container>
        {files.map((file, i) => (
          <FileBox
            key={i}
            loaded={loaded}
            name={file.name}
            size={file.size}
            source={file.img}
            onClose={handleClose}
          ></FileBox>
        ))}
      </Container>
    </StyledUploader>
  );
};

const StyledUploader = styled.div`
  align-self: center;
  margin-left: 3vw;
  span {
    font-size: 15px;
  }
  .fileName {
    font-weight: 900;
    margin-right: 1vw;
    max-width: 10vw;
  }

  .fileSize {
    color: #76726e;
  }
`;

Uploader.defaultProps = {
  onClick: Function.prototype,
  onClose: Function.prototype,
  multiple: false,
};

Uploader.propTypes = {
  className: string,
  multiple: bool,
  onClick: func,
  onClose: func,
  supported: arrayOf({
    type: string,
    extension: string,
  }),
};

export default Uploader;
