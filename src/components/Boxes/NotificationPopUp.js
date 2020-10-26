// stylelint-disable value-keyword-case
import React, { useEffect, useState } from 'react';
import { string, object, func, element } from 'prop-types';
import LinkHandler from '../Link';
import styled from 'styled-components';

const Timer = function(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
      window.clearTimeout(timerId);
      remaining -= Date.now() - start;
  };

  this.resume = function() {
      start = Date.now();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

let hideTimer;
let hidePopUpFunctionTimer;

const NotificationPopUp = ({
  title,
  icon,
  time,
  description,
  to,
  hidePopup = () => {},
  onClick = () => {},
  className,
  hideDelay = 10,
  otherProps
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    hideTimer = new Timer(() => {
      setShow(false);
      hidePopUpFunctionTimer = setTimeout(() => {
        hidePopup();
      }, 500);
    }, hideDelay * 1000);
  }, []);
  return (
    <Container
      hideDelay={hideDelay}
      show={show}
      onMouseEnter={() => {
        hideTimer.pause();
        if (hidePopUpFunctionTimer) clearTimeout(hidePopUpFunctionTimer);
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
  box-sizing: border-box;
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
  opacity: 1;
  max-height: 15rem;
  cursor: pointer;
  overflow: hidden;
  padding: 2rem;
  transition: all 500ms ease;
  transform: scaleY(1);
  ${({ show }) => !show && `
    opacity: 0;
    max-height: 0;
    transform: scaleY(0);
    padding: 0;
    border-color: rgba(0,0,0,0);
    border-width: 0;
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

export default NotificationPopUp;
