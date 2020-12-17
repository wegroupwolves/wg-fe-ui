// stylelint-disable value-keyword-case
import React, { useEffect, useState } from 'react';
import { string, object, func, element } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

// Components
import LinkHandler from '../Link';
import Timer from '../TimerWithPause';

let hideTimer;

const NotificationPopUp = ({
  title,
  icon,
  time,
  description,
  to,
  hidePopup = () => {},
  onClick = () => {},
  className,
  hideDelay = 5,
  otherProps
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    // Show the popup default
    hideTimer = new Timer(() => {
      // After the hideDelay timer is done, start the hide animation
      setShow(false);
      let hidePopUpFunctionTimer = setTimeout(() => {
        // after hide animation return the callback function
        hidePopup();
      }, 500);
    }, hideDelay * 1000);
  }, []);

  return (
    <Container
      showPopup={show}
      onMouseEnter={() => {
        hideTimer.pause();
        setShow(true);
      }}
      onMouseLeave={() => hideTimer.resume()}
      className={className}
      onClick={onClick}
      to={to}
      {...otherProps}
    >
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

const SlideIn = keyframes`
  0% {
    right: -100%;
    opacity: 0;
  }
  80% {
    right: 5%;
    opacity: 1;
  }
  100% {
    right: 0;
  }
`;

const SlideOut = keyframes`
  0% {
    right: 0;
    opacity: 1;
  }
  100% {
    opacity: 0;
    right: -100%;
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

const Container = styled(({showPopup, ...props}) => <LinkHandler {...props} />)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  word-break: break-word;
  margin-bottom: 1rem;
  position: relative;
  font-family: ${({ theme }) => theme.font};
  flex: 1 1 100%;
  max-height: 20rem;
  background: white;
  border: 0.5px solid #ECECEC;
  text-decoration: none;
  justify-content: space-between;
  filter: drop-shadow(-4px 4px 12px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  top: 0;
  right: 0;
  overflow: hidden;
  padding: 2rem;
  transition: all 500ms ease;
  z-index: 10;
  animation: ${SlideIn} 500ms forwards ease;
  ${({ showPopup }) => !showPopup && css`
    animation: ${SlideOut} 500ms forwards ease;
    z-index: 9;
  `}

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

NotificationPopUp.displayName = 'NotificationPopUp';

export default NotificationPopUp;
