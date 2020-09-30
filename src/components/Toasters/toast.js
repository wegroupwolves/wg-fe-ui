import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const truncateString = (string, maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

const baseToast = ({ title, subtitle, icon, showIconCircle }, options) => {
  const content = (
    <ToastContainer>
      <IconContainer circle={showIconCircle}>{icon}</IconContainer>
      <TextContainer>
        <H1>{title}</H1>
        <H2>{truncateString(subtitle, 110)}</H2>
      </TextContainer>
    </ToastContainer>
  );
  toast(content, options);
};

baseToast.prototype = {
  error: function(content, options) {
    console.log(content, options);
  },
};

const H1 = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  color: #2d2d2d;
  margin-bottom: 0.6rem;
`;

const H2 = styled.h2`
  font-size: 1.4rem;
  color: #8990a3;
  line-height: 1.4;
`;

const IconContainer = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  margin-right: 2rem;
  ${({ circle }) =>
    circle &&
    `
    background: #ff8000;
    border-radius: 50%;
    min-width: 3.8rem;
    display: flex;
    justify-content: center;
    > svg {
      margin-top: 0.2rem;
      }
    `};
`;
const TextContainer = styled.div``;

const ToastContainer = styled.div`
  display: flex;
  padding: 1rem;
`;

baseToast.defaultProps = {
  subtitle: '',
};

export default baseToast;
// export { toast };
