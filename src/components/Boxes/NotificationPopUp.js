import React from 'react';
import { string, object, func, element } from 'prop-types';
import LinkHandler from '../LinkHandler';
import styled, { keyframes } from 'styled-components';

const NotificationPopUp = ({
  title,
  icon,
  time,
  description,
  to,
  onClick = () => {},
  className,
  otherProps
}) => {
  return (
    <Container className={className} {...otherProps} onClick={onClick} to={to}>
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
    </Container>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const TimeLeft = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 2rem;
  text-align: right;
  height: 100%;
  flex-shrink: 0;
  color: #8990A3;
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

const Container = styled(LinkHandler)`
  display: flex;
  width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.font};
  flex: 1 1 100%;
  background: white;
  border: 0.5px solid #ECECEC;
  text-decoration: none;
  justify-content: space-between;
  filter: drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  cursor: pointer;
  padding: 2rem;
  animation: ${FadeIn} 200ms ease;
  transition: all .2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.brand.primary};
  }
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
  font-size: 16px;
  color: #2D2D2D;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8990A3;
`;

NotificationPopUp.propTypes = {
  /** String how long ago the notification happened */
  time: string.isRequired,
  /** Notification description */
  description: string.isRequired,
  /** To url where to go to when clicking on the notification */
  to: string,
  /** Pass an icon as element to be displayed at the front of the bar. */
  icon: element,
  /** Notification title */
  title: string.isRequired,
  /** onClick function when clicked on the notification */
  onClick: func,
  /** Extra classnames to pass to the element. */
  className: string,
  /** Extra props to pass to the element. */
  otherProps: object,
};

export default NotificationPopUp;
