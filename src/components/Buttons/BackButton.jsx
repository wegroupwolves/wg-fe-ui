import React from 'react';
import { string, node, func, object } from 'prop-types';
import BackArrow from './../Icons/BackArrow';
import styled from 'styled-components';

const BackButton = ({
  onClick,
  background,
  icon,
  name,
  className,
  ...otherProps
}) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      background={background}
      {...otherProps}
    >
      {icon}
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font};
  background-color: ${({ background }) =>
    background ? background : 'initial'};
  font-size: 1.6rem;
  border-radius: 0.5rem;
  min-width: 12rem;
  height: 4rem;
  color: ${({ background, theme }) =>
    background ? '#FFFFFF' : theme.typo.highlight};
  line-height: 120%;
  border: 0;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    /* background-color: #FFBF80; */
  }

  svg {
    margin-right: 1.15vw;
  }
`;

BackButton.defaultProps = {
  icon: <BackArrow />,
  name: 'Back',
  onClick: () => {
    console.log('back button clicked');
  },
  otherProps: {},
};

BackButton.propTypes = {
  background: string,
  /** Beeing able to use it in Styled Components */
  className: string,
  name: string,
  /** Triggered when button is clicked */
  onClick: func.isRequired,
  /** Adds icon to button */
  icon: node,
  /** Adds extra props to the element */
  otherProps: object,
};

export default BackButton;
