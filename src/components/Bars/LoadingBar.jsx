import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import { string, arrayOf, object, number } from 'prop-types';

const ProgressTrack = styled.div`
  position: absolute;
  width: 100%;
  min-width: 574px;
  height: ${({ height }) => height || '5px'};
  background-color: ${({ background }) => background || key('colors.gray')};
  @media (max-width: 768px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: ${({ height }) => height || '5px'};
    background-color: ${({ filledColor }) =>
      filledColor || key('colors.action')};
    width: ${({ len, activeId }) =>
      len ? `${(activeId - 1) * (100 / (len - 1))}%` : 0};
    transition: width 1s ease-in-out;
  }
`;

const LoadingBar = ({
  activeId,
  background,
  height,
  stages,
  ...otherProps
}) => {
  return (
    <ProgressTrack
      height={height}
      background={background}
      len={stages}
      activeId={activeId}
      {...otherProps}
    />
  );
};

LoadingBar.defaultProps = {
  activeId: 1,
  background: '',
  height: '7px',
  otherProps: {},
  stages: [
    {
      key: 'start',
      name: 'start',
      id: 1,
    },
    {
      key: 'middle',
      name: 'middle',
      id: 2,
    },
    {
      key: 'end',
      name: 'end',
      id: 3,
    },
  ],
};

LoadingBar.propTypes = {
  activeId: number,
  background: string,
  offset: number,
  otherProps: object,
  stages: arrayOf({
    key: string,
    name: string,
    id: number,
  }),
  stepWidth: number,
  height: string,
};

export default LoadingBar;
