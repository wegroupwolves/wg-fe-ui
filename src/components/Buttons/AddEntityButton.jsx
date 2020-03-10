import React from 'react';
import { object, string, element, func } from 'prop-types';
import styled from 'styled-components';
import * as Icons from '../Icons';

const IconsList = {};
Object.keys(Icons).map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey];
});

const AddEntityButton = ({ fullwidth, icon, onClick, name, ...otherProps }) => {
  const ChosenIcon = IconsList[icon];

  return (
    <StyledButton fullwidth={fullwidth} onClick={onClick} {...otherProps}>
      <ChosenIcon size={40}></ChosenIcon>
      <span className="label">{name}</span>
    </StyledButton>
  );
};

// const StyledButton = styled.button`
//   font-family: ${({ theme }) => theme.font};
//   font-size: 1.6rem;
//   line-height: 130%;
//   border-radius: 0.5rem;
//   min-width: 25rem;
//   padding: 2vh 0;
//   border: 0.5px solid;
//   border-color: ${({ theme }) => theme.ui.outline};
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: #505050;
//   cursor: pointer;
//   background-color: ${({ theme }) => theme.ui.background};
//   position: relative;
//   width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

//   :active {
//     transform: scale(0.95);
//   }

//   :focus {
//     outline: none;
//   }

//   :hover {
//     /* background-color: #FFBF80; */
//   }

//   svg {
//     margin-bottom: 12px;

//     &:hover line {
//       stroke: ${({ theme }) => theme.ui.interactive};
//     }
//   }
// `;

const StyledButton = styled.button`
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 2px dashed ${({ theme }) => theme.ui.outline};
  background-color: #f0f1f3;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

  svg {
    path {
      stroke: ${({ theme }) => theme.ui.outline};
      fill: ${({ theme }) => theme.ui.outline};
      transition: 0.15s ease-in-out;
    }
  }

  .label {
    margin-top: 5px;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme.typo.highlight};
    transition: 0.15s ease-in-out;
  }

  &:hover {
    border: 2px dashed ${({ theme }) => theme.brand.primary};
    background-color: ${({ theme }) => theme.brand.lightest};

    svg {
      path {
        stroke: ${({ theme }) => theme.brand.primary};
        fill: ${({ theme }) => theme.brand.primary};
      }
    }

    .label {
      color: ${({ theme }) => theme.brand.primary};
    }
  }
`;

StyledButton.displayName = 'StyledButton';

AddEntityButton.defaultProps = {
  icon: 'IconPlusFilled',
  otherProps: {},
  fullwidth: false,
};

AddEntityButton.propTypes = {
  icon: string,
  name: string.isRequired,
  onClick: func.isRequired,
  otherProps: object,
};

export default AddEntityButton;
