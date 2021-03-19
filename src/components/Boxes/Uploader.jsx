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
    {
      supported,
      className,
      name,
      icon,
      label,
      multiple,
      onClick,
      onClose,
      errorText,
      children,
    },
    ref,
  ) => {
    const [id, setId] = useState(-1);
    const [loaded, setLoaded] = useState([]);
    const [files, setFiles] = useState([]);
    const [dt, setDT] = useState(new DataTransfer());

    // useEffect(() => {
    //   setDT(v => updateFiles(v, id, [], true));
    // }, [id]);

    const readFile = async (file, index) => {
      let reader = new FileReader();
      setLoaded(l => [...l, 0]);

      const parts = file.name.split('.');
      const extension = parts.length > 1 ? parts.slice(-1)[0] : ''; // get last el. of parts arr

      const fileNew = {
        title: parts[0],
        name: `${shortifyText(parts[0])}${extension ? `.${extension}` : ''}`,
        size: bytesToMega(file.size),
        type: file.type,
        data: '',
      };

      return await new Promise((resolve, reject) => {
        reader.readAsDataURL(file);

        reader.addEventListener('progress', e => {
          const percentage = (file.size / e.loaded) * 100;
          setLoaded(l => {
            l[index] = percentage;
            return [...l];
          });
        });

        reader.onerror = () => {
          reader.abort();
          reject(new DOMException('Problem parsing input file.'));
        };

        reader.addEventListener('loadend', e => {
          fileNew.data = e.target.result;
          setFiles(f => [
            ...f,
            {
              ...fileNew,
            },
          ]);

          setLoaded(l => {
            l[index] = null;
            return [...l];
          });
          resolve(fileNew);
        });
      });
    };

    const handleClick = async uploaded => {
      if (!uploaded) return false;
      // [...target.files].reduce(async (promise, file, i) => {
      //   await promise;
      //   await readFile(file, i);
      // }, Promise.resolve());
      if (!multiple) setFiles([]);
      // setDT(dataTransfer => {
      //   const vdata = multiple ? dataTransfer : new DataTransfer();
      //   return updateFiles(vdata, -1, uploaded);
      // });
      const uploadedFiles = await Promise.all(
        Array.from(uploaded).map(async (t, i) => {
          return await readFile(t, i);
        }),
      );
      onClick({ name, value: uploadedFiles });
    };

    const handleClose = file => {
      let id;
      setFiles(f => {
        id = f.findIndex(fi => fi.name === file.name);
        const newFiles = f.filter(file => file.name !== f[id].name);
        setId(id);
        return [...newFiles];
      });
      onClose();
    };

    // if (ref.current && dt.files) ref.current.files = dt.files;
    return (
      <StyledUploader className={className}>
        <UploadField
          ref={ref}
          name={name}
          supported={supported}
          icon={icon}
          multiple={multiple}
          onClick={handleClick}
          label={label}
          errorText={errorText}
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
    font-weight: 500;
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
  name: string,
  icon: element,
  multiple: bool,
  onClick: func,
  onClose: func,
  errorText: string,
  supported: arrayOf({
    type: string,
    extension: string,
  }),
  label: string,
};

Uploader.FileBox = FileBox;

export default Uploader;
