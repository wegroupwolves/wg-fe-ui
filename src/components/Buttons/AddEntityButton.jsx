import React from 'react';
import { object, bool, string, element, func } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';
import PlusIcon from './../Icons/Plus';

const AddEntityButton = ({
  icon,
  name,
  multiple,
  onChange,
  onClick,
  text,
  ...otherProps
}) => {
  const handleChange = ({ target: { value } }) => onChange(value);

  return (
    <StyledButton onClick={onClick} {...otherProps}>
      {icon}
      {text}
      <input
        type="file"
        name={name}
        multiple={multiple}
        onChange={handleChange}
      />
    </StyledButton>
  );
};

const StyledButton = styled.label`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
  line-height: 130%;
  border-radius: 0.5rem;
  min-width: 14rem;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '52vw')};
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

  input {
    position: absolute;
    opacity: 0;
  }
`;

StyledButton.displayName = 'StyledButton';

AddEntityButton.defaultProps = {
  multiple: false,
  icon: <PlusIcon />,
  name: 'label',
  text: 'Label',
  otherProps: {},
  fullwidth: false,
};

AddEntityButton.propTypes = {
  fullwidth: bool,
  icon: element,
  name: string.isRequired,
  multiple: bool,
  onChange: func.isRequired,
  onClick: func.isRequired,
  text: string,
  otherProps: object,
};

export default AddEntityButton;
