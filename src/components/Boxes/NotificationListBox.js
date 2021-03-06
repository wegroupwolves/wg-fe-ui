import React, { useEffect, useState } from 'react';
import { node, string, element, object, bool, func } from 'prop-types';
import styled from 'styled-components';
import { IconActionRead, IconActionUnRead } from '../Icons';
import LinkHandler from '../Link';

let hidePopUpFunctionTimer;

const NotificationListBox = ({
  title,
  icon,
  time,
  description,
  children,
  seen,
  formattedTime,
  to,
  onClick = () => {},
  tooltipText = 'Mark notification as seen',
  markRead = () => {},
  className,
  otherProps,
}) => {
  const [show, setShow] = useState(true);

  const markAsRead = () => {
    setShow(false);
    hidePopUpFunctionTimer = setTimeout(() => {
      // after hide animation return the callback function
      markRead();
    }, 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(hidePopUpFunctionTimer);
    };
  }, []);

  return (
    <Container className={className} show={show} {...otherProps}>
      <NotificationBox to={to} onClick={onClick}>
        <HeaderContainer>
          {icon && (
            <IconContainer>
              <IconCircle seen={seen}>{icon}</IconCircle>
            </IconContainer>
          )}
          <HeaderContentContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </HeaderContentContainer>
          <TimeLeft title={formattedTime}>{time}</TimeLeft>
        </HeaderContainer>
        <ContentContainer>{children}</ContentContainer>
      </NotificationBox>
      <MarkIconContainer>
        <MarkIcon onClick={markAsRead}>
          <TooltipContainer onClick={e => e.stopPropagation()}>
            <p>{tooltipText}</p>
          </TooltipContainer>
          {seen ? (
            <IconActionUnRead size={22} color="white" />
          ) : (
            <IconActionRead size={22} color="white" />
          )}
        </MarkIcon>
      </MarkIconContainer>
    </Container>
  );
};

const TooltipContainer = styled.div`
  position: absolute;
  bottom: calc(100% + 1rem);
  padding: 1.5rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  right: 0;
  cursor: default;
  background-color: #11141c;
  visibility: hidden;
  opacity: 0;
  color: white;
  transition: all 0.2s ease;

  &::after {
    content: '';
    top: 100%;
    right: 0.2rem;
    width: 0;
    height: 0;
    border: 0.7rem solid transparent;
    border-top-color: #11141c;
    transform: translate(-50%, 0);
    position: absolute;
  }
`;

const TimeLeft = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  text-align: right;
  margin-left: 2rem;
  flex-shrink: 0;
  color: #8990a3;
`;

const MarkIcon = styled.button`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 0.3rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brand.primary};
  transition: all 0.2s ease;
  cursor: pointer;

  & > svg {
    height: 90%;
    width: 90%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.brand.lighter};

    & > ${TooltipContainer} {
      visibility: visible;
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }
`;

const IconCircle = styled.div`
  border-radius: 50%;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, seen }) =>
    seen ? '#6d6d6d' : theme.brand.primary};

  & > svg {
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  word-break: break-word;
  max-width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.font};
  transition: all 500ms ease;
  max-height: 100rem;
  margin-bottom: 2rem;
  ${({ show }) =>
    !show &&
    `
    opacity: 0;
    margin-bottom: 0;
    max-height: 0;
    padding: 0;
    border-color: rgba(0,0,0,0);
    border-width: 0;
    border: none;
  `}
`;

const NotificationBox = styled(LinkHandler)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  overflow: hidden;
  background: white;
  border: 0.05rem solid #ececec;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  filter: drop-shadow(-0.4rem 0.4rem 1.2rem rgba(0, 0, 0, 0.05));

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.brand.primary};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 7.8rem;
  border-bottom: 0.1rem solid #ececec;
  align-items: center;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 100%;
`;

const IconContainer = styled.div`
  margin-right: 2rem;
  height: 3.8rem;
  width: 3.8rem;
  flex: 0 0 auto;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  color: #2d2d2d;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 120%;
  font-size: 1.4rem;
  color: #8990a3;
`;

const ContentContainer = styled.div`
  padding: 2rem;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 120%;
  color: #8990a3;
`;

const MarkIconContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  overflow: visible;
  align-items: flex-start;
  justify-content: flex-end;
`;

NotificationListBox.propTypes = {
  /** Boolean if the notification has been seen already or not. */
  seen: bool.isRequired,
  /** String how long ago the notification happened */
  time: string.isRequired,
  /** String how long ago the notification happened */
  formattedTime: string.isRequired,
  /** Notification description */
  description: string.isRequired,
  /** Notification title */
  title: string.isRequired,
  /** tooltip text */
  tooltipText: string,
  /** To url where to go to when clicking on the notification */
  to: string,
  /** onClick function when clicked on the notification */
  onClick: func,
  /** Pass an icon as element to be displayed at the front of the bar. */
  icon: element,
  /** onClick function when clicked on the eye icon */
  markRead: func,
  /** Code to be displayed within the element. This is also what will be copied if copying is enabled. */
  children: node.isRequired,
  /** Extra classnames to pass to the element. */
  className: string,
  /** Extra props to pass to the element. */
  otherProps: object,
};

export default NotificationListBox;
