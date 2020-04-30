import React from 'react';
import styled from 'styled-components';
import { IconActionPlus, IconMinus } from '../../components/Icons/index';
import { bool, func, string, object } from 'prop-types';

const AddRemoveButton = ({ added, onClick, className, ...otherProps }) => {
  return (
    <Button className={className} onClick={onClick} {...otherProps}>
      {!added ? (
        <IconActionPlus className="plus" size={20} />
      ) : (
        <IconMinus className="minus" size={20} />
      )}
    </Button>
  );
};

const Button = styled.button`
  padding: 0;
  border: 0;
  background-color: #f0f1f3;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  svg.plus path {
    fill: #8990a3;
    transition: fill 0.15s ease-in-out;
  }

  svg.minus line {
    stroke: #8990a3;
    transition: stroke 0.15s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.brand.primary};

    svg.plus path {
      fill: white;
    }

    svg.minus line {
      stroke: white;
    }
  }
`;

AddRemoveButton.defaultProps = {
  added: false,
};

AddRemoveButton.propTypes = {
  /** Set to true if the remove state should be shown. */
  added: bool.isRequired,
  /** onClick function to be executed when the button is clicked. */
  onClick: func.isRequired,
  /** Extra className to be added to the button. */
  className: string,
  /** Extra props. */
  otherProps: object,
};

export default AddRemoveButton;
