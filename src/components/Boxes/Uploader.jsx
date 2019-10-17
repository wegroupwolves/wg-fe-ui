import React, { useState } from 'react';
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
  padding: 19px 20px 15px 22px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  width: 30%;
  margin-right: 3%;
  margin-top: 45px;
  /* Backdrop */

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  &:last-child {
    margin-right: 0;
  }

  img {
    max-width: 50px;
  }
`;

const File = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Uploader = ({ className, multiple, onClick, onClose }) => {
  const [loaded, setLoaded] = useState([]);
  const [files, setFiles] = useState([]);

  const readFile = async (file, index) => {
    let reader = new FileReader();
    setLoaded([...loaded, 0]);
    reader.addEventListener('progress', e => {
      const percentage = (file.size / e.loaded) * 100;
      setLoaded([...loaded, percentage]);
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
      const newLoaded = loaded.slice();
      newLoaded[index] = 0;
      setLoaded(newLoaded);
    });

    await reader.readAsDataURL(file);
  };

  const handleClick = async target => {
    if (!target.files) return false;
    [...target.files].reduce(async (promise, file, i) => {
      await promise;
      await readFile(file, i);
    }, Promise.resolve());
    onClick(target.files);
  };

  const handleClose = i => {
    const newFiles = files.slice();
    newFiles[i] = { name: '', size: '', img: '' };
    setFiles(f => {
      f[i] = { name: '', size: '', img: '' };
      return [...f];
    });
    const newLoaded = loaded.map(l => l * 0);
    setLoaded(newLoaded);
    onClose();
  };

  console.log('files: ', files.length, loaded);
  return (
    <StyledUploader className={className}>
      <UploadField multiple={multiple} onClick={handleClick} />
      <Container>
        {files.map((file, i) => (
          <Box key={i}>
            <File>
              <img src={files[i].img} />
              <span className="fileName">{file.name}</span>
              {file.size ? (
                <span className="fileSize">{file.size} mb</span>
              ) : (
                <LoadingBar loaded={loaded[i]} />
              )}
            </File>
            {file.size ? <CloseIcon onClick={() => handleClose(i)} /> : null}
          </Box>
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
