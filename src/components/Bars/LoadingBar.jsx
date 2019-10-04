import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme/dist';
import { string, arrayOf, object, number } from 'prop-types';

const getActiveId = (active, stages) => {
  return stages ? stages.findIndex(item => item.key === active) : null;
};

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
    background-color: ${key('colors.action')};
    width: ${({ activeId, stages }) =>
      stages ? `${activeId * (100 / stages.length)}%` : '0'};
    transition: width 1s ease-in-out;
  }
`;

const LoadingBar = ({ active, background, stages, height, ...otherProps }) => {
  const activeId = getActiveId(active, stages) + 1;
  return (
    <ProgressTrack
      activeId={activeId}
      background={background}
      stages={stages}
      height={height}
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
  active: string,
  background: string,
  otherProps: object,
  stages: arrayOf({
    key: string,
    name: string,
    id: number,
  }),
  height: string,
};

export default LoadingBar;
