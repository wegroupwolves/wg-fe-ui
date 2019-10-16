import React from 'react';
import { object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
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
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
  line-height: 130%;
  border-radius: 0.5rem;
  min-width: 14rem;
  min-width: 250px;
  padding: 2vh 0;
  border: 0.5px solid;
  border-color: ${key('colors.outline')};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #505050;
  cursor: pointer;
  background-color: ${key('colors.big-disabled')};
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
      stroke: ${key('colors.interactive')};
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
