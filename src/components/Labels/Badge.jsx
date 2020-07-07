import React from 'react';
import { node, string, object, bool } from 'prop-types';
import styled from 'styled-components';

const Badge = ({ children, size, disabled, className, ...otherProps }) => {
  return (
    <StyledBadge
      size={size}
      disabled={disabled}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.div`
  width: ${({ size }) =>
    size === 'normal' ? '3.2rem' : size === 'small' ? '1.6rem' : '3.2rem'};
  height: ${({ size }) =>
    size === 'normal' ? '3.2rem' : size === 'small' ? '1.6rem' : '3.2rem'};
  background-color: ${({ theme, disabled }) =>
    disabled ? '#D4D4D4' : theme.brand.primary};
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ size }) => (size === 'normal' ? '500' : '400')};
  font-size: ${({ size }) => (size === 'normal' ? '1.6rem' : '1rem')};
  line-height: ${({ size }) => (size === 'normal' ? '1.6rem' : '1rem')};
  color: white;
`;

Badge.defaultProps = {
  size: 'normal',
};

Badge.propTypes = {
  /** Content to be displayed inside of the badge. */
  children: node.isRequired,
  /** Size of the badge ("normal" / "small"). */
  size: string,
  /** If set to true, will be more greyed out. */
  disabled: bool,
  /** Extra classname to pass to the element. */
  className: string,
  /** Extra props to pass to the element. */
  otherProps: object,
};

export default Badge;
