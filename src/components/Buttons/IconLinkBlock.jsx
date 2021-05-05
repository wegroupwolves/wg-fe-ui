import React from 'react';
import { element, string, func, bool, object } from 'prop-types';
import styled from 'styled-components';

const IconLinkBlock = ({
  icon,
  iconType,
  iconTopOffset,
  iconLeftOffset,
  label,
  onClick,
  active,
  disabled,
  className,
  otherProps,
  info,
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
      {label ? <Label info={info}>{label}</Label> : null}
      {info ? <Info>{info}</Info> : null}
    </StyledIconLinkBlock>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: ${({ iconTopOffset }) => (iconTopOffset ? iconTopOffset : '0.5rem')};
  left: ${({ iconLeftOffset }) => (iconLeftOffset ? iconLeftOffset : '0.5rem')};

  > svg path {
    transition: fill 0.15s ease-in-out, stroke 0.15s ease-in-out;
  }
`;

const Label = styled.div`
  position: absolute;
  bottom: ${({ info }) => (info ? '4.6rem' : '1.6rem')};
  left: 1.6rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 120%;
  color: #222;
  transition: color 0.15s ease-in-out;
`;

const Info = styled.div`
  position: absolute;
  margin-right: 1rem;
  bottom: 1.6rem;
  left: 1.6rem;
  color: #8990a3;
  font-size: 1.2rem;
  line-height: 120%;
`;

const StyledIconLinkBlock = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.font};
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
