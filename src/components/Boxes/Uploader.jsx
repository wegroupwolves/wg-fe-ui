import React, { forwardRef, useEffect, useState } from 'react';
import { element, node, string, arrayOf, func, bool } from 'prop-types';
import styled from 'styled-components';
import UploadField from './../Buttons/UploadField';
import FileBox from './FileBox';

const removeFile = (dt, id) => dt.items.remove(id);

const updateFiles = (dt, id, fileList, isRemoving = false) => {
  isRemoving && removeFile(dt, id);
  for (let j = 0; j < fileList.length; j++) dt.items.add(fileList[j]);
  return dt;
};

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

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Uploader = forwardRef(
  (
    { supported, className, icon, text, multiple, onClick, onClose, children },
    ref,
  ) => {
    const [id, setId] = useState(-1);
    const [loaded, setLoaded] = useState([]);
    const [files, setFiles] = useState([]);
    const [dt, setDT] = useState(new DataTransfer());

    useEffect(() => {
      setDT(v => updateFiles(v, id, [], true));
    }, [id]);

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

    const handleClick = uploaded => {
      if (!uploaded) return false;
      // [...target.files].reduce(async (promise, file, i) => {
      //   await promise;
      //   await readFile(file, i);
      // }, Promise.resolve());
      if (!multiple) setFiles([]);
      setDT(dataTransfer => {
        const vdata = multiple ? dataTransfer : new DataTransfer();
        return updateFiles(vdata, -1, uploaded);
      });
      Array.from(uploaded).forEach((t, i) => {
        readFile(t, i);
      });
      onClick(uploaded);
    };

    const handleClose = file => {
      let id;
      setFiles(f => {
        id = f.findIndex(fi => fi.name === file.name);
        const newFiles = f
          .filter(file => file.name !== f[id].name)
          .map(file => ({ ...file }));
        setId(id);
        return [...newFiles];
      });
      onClose();
    };

    if (ref.current && dt.files) ref.current.files = dt.files;
    return (
      <StyledUploader className={className}>
        <UploadField
          ref={ref}
          supported={supported}
          icon={icon}
          multiple={multiple}
          onClick={handleClick}
          text={text}
        />
        <Container>
          {files.length ? children({ files, loaded, handleClose }) : null}
        </Container>
      </StyledUploader>
    );
  },
);

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

Uploader.displayName = 'Uploader';

Uploader.defaultProps = {
  onClick: Function.prototype,
  onClose: Function.prototype,
};

Uploader.propTypes = {
  children: node,
  className: string,
  icon: element,
  multiple: bool,
  onClick: func,
  onClose: func,
  supported: arrayOf({
    type: string,
    extension: string,
  }),
  text: string,
};

Uploader.FileBox = FileBox;

export default Uploader;
