import React from 'react';
import { element, string, func, bool, object } from 'prop-types';
import styled from 'styled-components';

const IconLinkBlock = ({
  icon,
  iconType,
  iconTopOffset,
  iconLeftOffset,
  label,
  subLabel,
  onClick,
  active,
  disabled,
  className,
  otherProps,
}) => {
  return (
    <StyledIconLinkBlock
      onClick={disabled ? null : onClick}
      active={active}
      disabled={disabled}
      iconType={iconType}
      className={className}
      {...otherProps}
    >
      {icon ? (
        <IconWrapper
          iconTopOffset={iconTopOffset}
          iconLeftOffset={iconLeftOffset}
        >
          {icon}
        </IconWrapper>
      ) : null}
      {label || subLabel ? (
        <TextBox>
          {label ? <Label>{label}</Label> : null}
          {subLabel ? <SubLabel>{subLabel}</SubLabel> : null}
        </TextBox>
      ) : null}
    </StyledIconLinkBlock>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: ${({ iconTopOffset }) => (iconTopOffset ? iconTopOffset : '1.3rem')};
  left: ${({ iconLeftOffset }) => (iconLeftOffset ? iconLeftOffset : '1.3rem')};

  > svg path {
    transition: fill 0.15s ease-in-out, stroke 0.15s ease-in-out;
  }
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 2.4rem;
  left: 2.4rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Label = styled.h4`
  font-family: ${({ theme }) => theme.font};
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 135%;
  color: #222;
  margin-bottom: 0.8rem;
  margin-right: 2.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SubLabel = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #8990a3;
  margin-right: 2.4rem;
`;

const StyledIconLinkBlock = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: ${({ theme, active, disabled }) =>
    disabled ? '#f0f1f3' : active ? theme.brand.primary : 'white'};
  border: 1px solid
    ${({ theme, active, disabled }) =>
      disabled ? '#f0f1f3' : active ? theme.brand.primary : '#f0f1f3'};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: box-shadow 0.15s ease-in-out;

  ${IconWrapper} {
    > svg path {
      fill: ${({ active, disabled, iconType }) =>
        disabled && iconType === 'fill'
          ? '#D4D4D4'
          : active && iconType === 'fill'
          ? 'white'
          : iconType === 'fill'
          ? '#D4D4D4'
          : null};

      stroke: ${({ active, disabled, iconType }) =>
        disabled && iconType === 'stroke'
          ? '#D4D4D4'
          : active && iconType === 'stroke'
          ? 'white'
          : iconType === 'stroke'
          ? '#D4D4D4'
          : null};
    }
  }

  ${Label} {
    color: ${({ active, disabled }) =>
      disabled ? '#D4D4D4' : active ? 'white' : '#222'};
  }

  ${SubLabel} {
    color: ${({ active, disabled }) =>
      disabled ? '#D4D4D4' : active ? 'white' : '#8990a3'};
  }

  &:hover {
    box-shadow: ${({ disabled }) =>
      disabled
        ? `0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04)`
        : `0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.04), 0 24px 32px rgba(0, 0, 0, 0.04)`};

    ${IconWrapper} {
      > svg path {
        fill: ${({ theme, iconType, active, disabled }) =>
          disabled && iconType === 'fill'
            ? '#D4D4D4'
            : active && iconType === 'fill'
            ? 'white'
            : iconType === 'fill'
            ? theme.brand.primary
            : null};

        stroke: ${({ theme, iconType, active, disabled }) =>
          disabled && iconType === 'stroke'
            ? '#D4D4D4'
            : active && iconType === 'stroke'
            ? 'white'
            : iconType === 'stroke'
            ? theme.brand.primary
            : null};
      }
    }
  }
`;

IconLinkBlock.defaultProps = {
  iconType: 'fill',
};

IconLinkBlock.propTypes = {
  /** If an element is passed here, it will be displayed in the top left corner of the element. */
  icon: element,
  /** Defines wether an icon is made up of strokes or fill. (Needed for coloring of the SVG.) TYPES = "fill" / "stroke" */
  iconType: string,
  /** Due to the way wg-fe-ui icons are implemented, a top offset might be needed to align the icon correctly. */
  iconTopOffset: string,
  /** Due to the way wg-fe-ui icons are implemented, a left offset might be needed to align the icon correctly. */
  iconLeftOffset: string,
  /** A label to be displayed at the bottom of the element. */
  label: string.isRequired,
  /** A secondary, smaller piece of text to be displayed below the normal label. */
  subLabel: string,
  /** onClick function to be executed when the element is clicked. */
  onClick: func.isRequired,
  /** Defines wether the element is in it's active state or not. */
  active: bool,
  /** Defines wether the element is disabled or not. */
  disabled: bool,
  /** Extra classnames to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default IconLinkBlock;
