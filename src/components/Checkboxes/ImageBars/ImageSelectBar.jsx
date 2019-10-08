import React from 'react';
import styled from 'styled-components';
import { key } from 'styled-theme';
import PropTypes from 'prop-types';
import { StyledContainer, StyledInput, Text } from './ImageBarTemplate';

const StyledCheck = styled.span`
  height: 16px;
  min-width: 16px;
  border-radius: 10px;
  margin: auto 1.6vw;
  border: ${({ checked }) => (checked ? '5px solid' : '1.2px solid')};
  border-color: ${({ checked }) =>
    checked ? key('colors.toggle') : key('colors.outline')};
`;

const ImageSelectBar = ({
  checked,
  disabled,
  handleChange,
  icon,
  children,
  ...otherProps
}) => {
  return (
    <StyledContainer checked={checked} disabled={disabled} {...otherProps}>
      <StyledInput
        type="radio"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      {icon}
      <Text>{children}</Text>
      <StyledCheck checked={checked} />
    </StyledContainer>
  );
};

ImageSelectBar.displayName = 'ImageSelectBar';

ImageSelectBar.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

ImageSelectBar.defaultProps = {
  checked: false,
};

export default ImageSelectBar;
