import React, { useCallback, useState } from 'react';
import { string, array, func, bool } from 'prop-types';
import styled from 'styled-components';
import CloseIcon from './../Icons/Close';
import UploadField from './../Buttons/UploadField';
import { key } from 'styled-theme';

const bytesToMega = value => {
  const val = (value / 1000000).toFixed(2);
  return val > 0 ? val : 0;
};

// Make text shorter if it's longer than 20 chars.
const shortifyText = text => {
  if (text.length < 20) return text;
  else return `${text.substring(0, 17)}...`;
};

const LoadingBar = styled.div`
  width: 22vw;
  height: 5px;
  background-color: ${key('colors.backDrop')};
  margin-top: 11px;

  &:before {
    content: '';
    width: ${({ loaded }) => `calc(${loaded} / 100 * 22vw);`};
    transition: ${({ loaded }) => (loaded === 0 ? null : 'width 1s')};
    height: 5px;
    position: absolute;
    background-color: ${key('colors.action')};
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 20px 15px 22px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  width: 33%;
  margin-top: 45px;
  /* Backdrop */

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  img {
    max-width: 50px;
  }
`;

const File = styled.div`
  display: flex;
  flex-direction: column;
`;

const Uploader = ({ className, multiple, onClick, onClose }) => {
  const [loaded, setLoaded] = useState([]);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const readFile = async file => {
    let reader = new FileReader();
    setLoaded([...loaded, 0]);
    reader.addEventListener('progress', e => {
      if (e.type === 'progress') {
        const percentage = (file.size / e.loaded) * 100;
        setLoaded([...loaded, percentage]);
      }
    });

    reader.addEventListener('loadend', e => {
      if (e.type === 'loadend' && file.type.match('image.*')) {
        setImages([...images, e.target.result]);
      }
    });

    if (!file) return false;
    setFiles([
      ...files,
      {
        name: shortifyText(file.name),
        size: bytesToMega(file.size),
      },
    ]);
    await reader.readAsDataURL(file);
  };

  const handleClick = async target => {
    if (!target.files) return false;
    await target.files.forEach(async file => {
      await readFile(file);
    });
    onClick(target.files);
  };

  const callBack = useCallback(handleClick, [images]);

  const handleClose = i => {
    const newFiles = files.slice();
    newFiles[i] = { name: '', size: '' };
    setFiles(newFiles);
    onClose();
  };

  console.log('files: ', files.length, images.length);
  return (
    <StyledUploader className={className}>
      <UploadField multiple={multiple} onClick={callBack} />
      {loaded[0]
        ? files.map((file, i) => (
            <Box key={i}>
              <File>
                <img src={images[i]} />
                <span className="fileName">{file.name}</span>
                {file.size ? (
                  <span className="fileSize">{file.size} mb</span>
                ) : (
                  <LoadingBar loaded={loaded[i]} />
                )}
              </File>
              {file.size ? <CloseIcon onClick={() => handleClose(i)} /> : null}
            </Box>
          ))
        : null}
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
  //   images: array,
  multiple: false,
};

Uploader.propTypes = {
  className: string,
  //   images: [],
  multiple: bool,
  onClick: func,
  onClose: func,
  //   setImages: func.isRequired,
};

export default Uploader;
