import React from 'react';
import { string, number, object, func } from 'prop-types';
import styled from 'styled-components';
import CloseIcon from './../Icons/Close';
import { key } from 'styled-theme';


const Box = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  padding: 19px 20px 15px 22px;
  border: 1px solid ${key('colors.outline')};
  box-sizing: border-box;
  width: 30%;
  margin-right: 3%;
  margin-top: 45px;
  justify-content: space-between;
  /* Backdrop */

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  &:last-child {
    margin-right: 0;
  }

  img {
    max-width: 50px;
  }

  svg {
    cursor: pointer;
  }

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

Box.displayName = 'Box';

const File = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoadingBar = styled.div`
  width: ${({ loaded }) => (loaded !== null ? '22vw' : 0)};
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

const FileBox = ({ name, size, source, loaded, onClose, children }) => {
  return (
    <Box show={size}>
      <File>
        <img src={source} />
        <span className="fileName">{name}</span>
        {size ? (
          <span className="fileSize">{size}</span>
        ) : (
          <LoadingBar loaded={loaded} />
        )}
      </File>
      <div>
        {children}
        {size ? (
          <CloseIcon onClick={() => onClose({ name, size, img: source })} />
        ) : null}
      </div>
    </Box>
  );
};

FileBox.defaultProps = {
  onClose: Function.prototype,
};

FileBox.propTypes = {
  className: string,
  name: string,
  size: number,
  source: string,
  loaded: number,
  onClose: func,
};

export default FileBox;
