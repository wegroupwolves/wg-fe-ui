import React from 'react';
import styled from 'styled-components';

const Rail = () => {
  return <StyledRail />;
};

const StyledRail = styled.div`
  position: absolute;
  height: 36px;
  right: -56px;
  left: 0;
  border-radius: 8px;
  background-color: #f0f1f3;
`;

export default Rail;
