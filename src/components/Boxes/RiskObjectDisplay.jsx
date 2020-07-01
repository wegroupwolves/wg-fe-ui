import React from 'react';
import { string, element, node, func, object } from 'prop-types';
import styled from 'styled-components';

import { H4 } from '../../../src';

const RiskObjectDisplay = ({
  title,
  icon,
  children,
  onClick,
  hoverContent,
  hoverButton,
  className,
  ...otherProps
}) => {
  return (
    <StyledRiskObjectDisplay
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      {icon || title ? (
        <Header>
          {icon ? <IconWrapper>{icon}</IconWrapper> : null}
          {title ? <H4 larger>{title}</H4> : null}
        </Header>
      ) : null}

      {children ? <Content>{children}</Content> : null}

      {onClick && hoverContent ? (
        <Overlay>
          {hoverButton ? <HoverButton>{hoverButton}</HoverButton> : null}
          {hoverContent ? <HoverContent>{hoverContent}</HoverContent> : null}
        </Overlay>
      ) : null}
    </StyledRiskObjectDisplay>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2.4rem;
  border-bottom: 0.1rem solid #e4e4e4;
`;

const IconWrapper = styled.div`
  padding: 0.8rem;
  margin-right: 1.8rem;
  background-color: #c4c4c4;
  border-radius: 0.5rem;

  svg path {
    fill: white;
  }
`;

const Content = styled.div`
  padding: 2.4rem;

  > * {
    margin-bottom: 1.6rem;

    /** Disabled to ensure every child has an equal bottom spacing. */
    /* stylelint-disable-next-line selector-max-universal */
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 128, 0, 0.9);
  border-radius: 0.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  cursor: pointer;
`;

const HoverButton = styled.div`
  margin-bottom: 1.6rem;
`;

const HoverContent = styled.div`
  color: white;
  font-family: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 0.01em;
`;

const StyledRiskObjectDisplay = styled.div`
  width: 100%;
  background: white;
  border: 0.1rem solid #f0f1f3;
  box-sizing: border-box;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.04),
    0 0.2rem 0.6rem rgba(0, 0, 0, 0.04), 0 1rem 2rem rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  position: relative;

  &:hover {
    ${Overlay} {
      display: flex;
    }
  }
`;

RiskObjectDisplay.propTypes = {
  /** String to be displayed in the header of the element. */
  title: string,
  /** A React component to be displayed inside the button. (If using an icon from wg-fe-ui, set size to 20) */
  icon: element,
  /** Content to be shown in the body of the element. */
  children: node,
  /** Function to be ran when the element is clicked. */
  onClick: func,
  /** Text to be displayed in the overlay when the element is hovered. */
  hoverContent: string,
  /** Button to be displayed in the overlay when the element is hovered. */
  hoverButton: element,
  /** Extra classNames to be passed. */
  className: string,
  /** Adds extra props to the element. */
  otherProps: object,
};

export default RiskObjectDisplay;
