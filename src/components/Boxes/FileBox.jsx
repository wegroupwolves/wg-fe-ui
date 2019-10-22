import React from 'react';
import { node, string, number, func } from 'prop-types';
import styled from 'styled-components';
import CloseIcon from './../Icons/Close';
import { key } from 'styled-theme';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 19px 20px 15px 22px;
  border: 1px solid ${key('colors.outline')};
  box-sizing: border-box;
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

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: row;
  }
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

const FileBox = ({ className, name, size, source, loaded, onClose, children }) => {
  return size ? (
    <Box className={className}>
      <Left>
        <img src={source} />
        <span className="fileName">{name}</span>
        {size ? (
          <span className="fileSize">{size}</span>
        ) : (
          <LoadingBar loaded={loaded} />
        )}
      </Left>
      <Right>
        {children}
        {size ? (
          <CloseIcon onClick={() => onClose({ name, size, img: source })} />
        ) : null}
      </Right>
    </Box>
  ) : null;
};

FileBox.defaultProps = {
  onClose: Function.prototype,
};

FileBox.propTypes = {
  children: node,
  className: string,
  name: string,
  size: string,
  source: string,
  loaded: number,
  onClose: func,
};

export default FileBox;
