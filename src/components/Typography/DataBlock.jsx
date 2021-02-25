import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

const DataBlock = ({ children, className }) => {
  return <StyledDataBlock className={className}>{children}</StyledDataBlock>;
};

const StyledDataBlock = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

DataBlock.propTypes = {
  children: node.isRequired,
  className: string,
};

export default DataBlock;
