import React from 'react';
import { node, string, object, bool, func } from 'prop-types';
import styled from 'styled-components';
import { IconActionEye, IconActionEyeCrossed } from '../Icons';

const NotificationListBox = ({
  title,
  icon,
  time,
  description,
  children,
  seen,
  onClick,
  tooltipText = "Mark notification as seen",
  markRead = () => {
    console.log('clicked mark as read');
  },
  className,
  otherProps
}) => {
  return (
    <Container className={className} {...otherProps} onClick={onClick}>
      <NotificationBox onClick={onClick}>
        <HeaderContainer>
          {icon && (
            <IconContainer>
              <IconCircle>
                {icon}
              </IconCircle>
            </IconContainer>
          )}
          <HeaderContentContainer>
            <Title>
              {title}
            </Title>
            <Description>
              {description}
            </Description>
          </HeaderContentContainer>
          <TimeLeft>
            {time}
          </TimeLeft>
        </HeaderContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </NotificationBox>
      <MarkIconContainer>
        <MarkIcon onClick={markRead}>
          <TooltipContainer onClick={e => e.stopPropagation()}>
            <p>{tooltipText}</p>
          </TooltipContainer>
          {seen ? (
            <IconActionEyeCrossed size={22} color="white" />
          ) : (
            <IconActionEye size={22} color="white" />
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
  border-radius: 5px;
  right: 0;
  cursor: default;
  background-color: #11141C;
  visibility: hidden;
  opacity: 0;
  color: white;
  transition: all .2s ease;

  &::after {
    content: '';
    top: 100%;
    right: 2px;
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-top-color: #11141c;
    transform: translate(-50%, 0);
    position: absolute;
  }
`;

const TimeLeft = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  color: #8990A3;
`;

const MarkIcon = styled.button`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 3px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brand.primary};
  transition: all .2s ease;
  cursor: pointer;

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
  background-color: ${({ theme }) => theme.brand.primary};

  & > svg {
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.font};
`;

const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  background: white;
  border: 0.5px solid #ECECEC;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.brand.primary};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 7.8rem;
  border-bottom: 1px solid #ececec;
  align-items: center;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 16px;
  color: #2D2D2D;
  margin-bottom: 2px;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8990A3;
`;

const ContentContainer = styled.div`
  padding: 2rem;
  font-style: normal;
  font-size: 16px;
  color: #8990A3;
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
  /** Notification description */
  description: string.isRequired,
  /** Notification title */
  title: string.isRequired,
  /** tooltip text */
  tooltipText: string,
  /** onClick function when clicked on the notification */
  onClick: func,
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
