import React from 'react';
import { node, bool, string, object } from 'prop-types';
import styled from 'styled-components';
import { IconActionEye, IconActionEyeCrossed } from '../Icons';

const NotificationListBox = ({ title, icon, time, description, children, seen, onClick, markRead, className, otherProps }) => {
  return (
    <Container className={className} {...otherProps} onClick={onClick}>
      <NotificationBox onClick={onClick}>
        <HeaderContainer>
          <IconContainer>
            <IconCircle>
              {icon}
            </IconCircle>
          </IconContainer>
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
  }

  &:focus {
    outline: none;
  }
`;

const IconCircle = styled.div`
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.brand.primary};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
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
  align-items: flex-start;
  justify-content: flex-end;
`;

NotificationListBox.propTypes = {
  /** Code to be displayed within the element. This is also what will be copied if copying is enabled. */
  children: node.isRequired,
  /** Extra classnames to pass to the element. */
  className: string,
  /** Extra props to pass to the element. */
  otherProps: object,
};

export default NotificationListBox;
