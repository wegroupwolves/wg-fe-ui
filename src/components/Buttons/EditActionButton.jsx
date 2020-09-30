import React from 'react';
import { object, bool, func, node, string } from 'prop-types';
import styled from 'styled-components';
import { IconPencilFilled } from '../Icons';

const EditActionButton = ({
  children,
  onClick,
  className,
  disabled,
  ...otherProps
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...otherProps}
    >
      <IconPencilFilled color="#8990a3" />

      <span>{children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  border-radius: 0.5rem;
  width: 5.4rem;
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eef0f4;
  color: #8990a3;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 0;

  > svg {
    margin: 0;
  }

  > span {
    position: absolute;
    opacity: 0;
  }

  :hover {
    width: auto;
    padding: 1.2rem 1.8rem 1.2rem 0;
    > svg {
      padding-left: 1.8rem;
      transition: margin 0.1s ease-in-out 5s, padding 0.2s ease-in-out;
    }
    > span {
      position: relative;
      opacity: 1;
      margin-left: 1rem;
      transition: opacity 0.2s ease-in-out 0.1s;
    }
  }
`;

// const Image = styled.img`
//   margin-right: 1rem;
//   height: 2rem;
// `;

EditActionButton.defaultProps = {
  otherProps: {},
  onClick: () => {},
};

EditActionButton.propTypes = {
  disabled: bool,
  otherProps: object,
  className: string,
  onClick: func.isRequired,
  children: node.isRequired,
};

export default EditActionButton;
