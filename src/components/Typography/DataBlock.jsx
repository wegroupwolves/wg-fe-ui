import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const DataBlock = ({ children }) => {
  return <StyledDataBlock>{children}</StyledDataBlock>;
};

const StyledDataBlock = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

DataBlock.propTypes = {
  children: node.isRequired,
};

export default DataBlock;
