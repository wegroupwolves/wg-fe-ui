import React from 'react';
import { object, string, element, func } from 'prop-types';
import styled from 'styled-components';
import PlusIcon from './../Icons/Plus';

const AddEntityButton = ({ icon, onClick, name, ...otherProps }) => {
  return (
    <StyledButton onClick={onClick} {...otherProps}>
      {icon}
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  line-height: 130%;
  border-radius: 0.5rem;
  min-width: 14rem;
  min-width: 250px;
  padding: 2vh 0;
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.ui.outline};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #505050;
  cursor: pointer;
  background-color: ${({ theme }) => theme.ui.background};
  position: relative;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  :hover {
    /* background-color: #FFBF80; */
  }

  svg {
    margin-bottom: 12px;

    &:hover line {
      stroke: ${({ theme }) => theme.ui.interactive};
    }
  }
`;

StyledButton.displayName = 'StyledButton';

AddEntityButton.defaultProps = {
  icon: <PlusIcon />,
  otherProps: {},
  fullwidth: false,
};

AddEntityButton.propTypes = {
  icon: element,
  name: string.isRequired,
  onClick: func.isRequired,
  otherProps: object,
};

export default AddEntityButton;
