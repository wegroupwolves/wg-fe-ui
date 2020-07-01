import React from 'react';
import styled from 'styled-components';
import { element, func, string, object } from 'prop-types';

const RoundedButton = ({
  icon,
  iconType,
  size,
  onClick,
  type,
  className,
  ...otherProps
}) => {
  return (
    <StyledRoundedButton
      onClick={onClick}
      className={className}
      type={type}
      iconType={iconType}
      size={size}
      {...otherProps}
    >
      {icon}
    </StyledRoundedButton>
  );
};

const StyledRoundedButton = styled.div`
  width: ${({ size }) =>
    size === 'large' ? '5rem' : size === 'small' ? '1.6rem' : '3.2rem'};
  height: ${({ size }) =>
    size === 'large' ? '5rem' : size === 'small' ? '1.6rem' : '3.2rem'};
  background: white;
  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    stroke: ${({ theme, type, iconType }) =>
      iconType === 'fill'
        ? null
        : type === 'default'
        ? theme.ui.outline
        : type === 'primary'
        ? theme.brand.primary
        : type === 'warning'
        ? theme.status.warning
        : type === 'success'
        ? theme.status.succes
        : type === 'danger'
        ? theme.status.error
        : theme.ui.outline};

    fill: ${({ theme, type, iconType }) =>
      iconType === 'stroke'
        ? null
        : type === 'default'
        ? theme.ui.outline
        : type === 'primary'
        ? theme.brand.primary
        : type === 'warning'
        ? theme.status.warning
        : type === 'success'
        ? theme.status.succes
        : type === 'danger'
        ? theme.status.error
        : theme.ui.outline};
    transition: stroke 0.15s ease-in-out;
  }

  &:hover {
    background: ${({ theme, type }) =>
      type === 'default'
        ? theme.brand.primary
        : type === 'primary'
        ? theme.brand.primary
        : type === 'warning'
        ? theme.status.warning
        : type === 'success'
        ? theme.status.succes
        : type === 'danger'
        ? theme.status.error
        : theme.brand.primary};
    border: 1px solid
      ${({ theme, type }) =>
        type === 'default'
          ? theme.brand.primary
          : type === 'primary'
          ? theme.brand.primary
          : type === 'warning'
          ? theme.status.warning
          : type === 'success'
          ? theme.status.succes
          : type === 'danger'
          ? theme.status.error
          : theme.brand.primary};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.06);

    svg path {
      stroke: ${({ iconType }) => (iconType === 'fill' ? null : 'white')};
      fill: ${({ iconType }) => (iconType === 'stroke' ? null : 'white')};
    }
  }
`;

RoundedButton.defaultProps = {
  type: 'default',
  iconType: 'stroke',
  size: 'default',
};

RoundedButton.propTypes = {
  /** A React component to be displayed inside the button. (If using an icon from wg-fe-ui, set size to 20) */
  icon: element.isRequired,
  /** Defines wether an icon should be colored by fill or by stroke. */
  iconType: string,
  /** Set a predefined size based on types. (Options: 'small', 'large') */
  size: string,
  /** The onClick function to be called when the button is clicked. */
  onClick: func,
  /** Set a predefined color scheme based on action types. (Options: 'default', 'primary', 'warning', 'success', 'danger') */
  type: string,
  /** Extra classNames to be passed to the StyledRoundedButton. */
  className: string,
  /** Adds extra props to the element */
  otherProps: object,
};

export default RoundedButton;
