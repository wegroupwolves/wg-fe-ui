import React from 'react';
import styled from 'styled-components';
import { string, number, object } from 'prop-types';

const Handle = ({
  handle: { id, value, percent },
  getHandleProps,
  handlePrefix,
}) => {
  return (
    <StyledHandle percent={percent} {...getHandleProps(id)}>
      {handlePrefix ? handlePrefix : ''}
      {value}
    </StyledHandle>
  );
};

const StyledHandle = styled.div`
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  margin-left: 3px;
  margin-top: 3px;
  z-index: 2;
  width: 50px;
  height: 30px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: ${({ theme }) => theme.typo.title};
`;

Handle.propTypes = {
  handle: object,
  id: string,
  value: number,
  percent: number,
  getHandleProps: object,
  handlePrefix: string,
};

export default Handle;
