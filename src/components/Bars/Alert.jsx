import React from 'react';
import styled from 'styled-components';
import { node, string, object, func, bool } from 'prop-types';
import { IconActionClose } from '../Icons/index';

const Alert = ({ children, type, onClick, icon, className, ...otherProps }) => {
  return (
    <AlertBox
      type={type}
      onCLick={onClick}
      className={className}
      {...otherProps}
    >
      {icon ? (
        type === 'error' ? (
          <ErrorIcon color={'#F74040'} size={40} />
        ) : (
          <DefaultIcon type={type ? type : 'normal'}>i</DefaultIcon>
        )
      ) : (
        ''
      )}

      <ContentWrapper type={type}>{children}</ContentWrapper>
    </AlertBox>
  );
};

const AlertBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 100rem;
  padding: ${({ type }) => (type ? '2.4rem' : '0')};
  border: 1px solid ${({ type, theme }) => getTypeColor(type, theme)};
  border-radius: 5px;
  background: ${({ type, theme }) => getLighterColor(type, theme)};
`;

const DefaultIcon = styled.div`
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${({ type, theme }) => getTypeColor(type, theme)};
  color: ${({ type, theme }) => getTypeColor(type, theme)};
  font-family: 'Times New Roman', sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-right: 1rem;
`;

const ErrorIcon = styled(IconActionClose)`
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  flex: 0 0 3rem;
`;

const ContentWrapper = styled.div`
  padding-top: 3px;
  font-family: ${({ theme }) => theme.font};
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ type, theme }) => getTextColor(type, theme)};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: ${({ theme }) => theme.font};
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${({ type, theme }) => getTextColor(type, theme)};
  }
`;

const getTypeColor = (type, theme) => {
  switch (type) {
    case 'primary':
      return theme.brand.primary;

    case 'error':
      return theme.status.error;

    case 'warning':
      return theme.status.warning;

    case 'success':
      return theme.status.succes;

    case 'normal':
      return '#8990A3';

    default:
      return 'transparent';
  }
};

const getTextColor = (type, theme) => {
  switch (type) {
    case 'primary':
      return theme.brand.primary;

    case 'error':
      return theme.status.error;

    case 'warning':
      return theme.status.warning;

    case 'success':
      return theme.status.succes;

    case 'normal':
      return '#8990A3';

    default:
      return '#8990A3';
  }
};

const getLighterColor = (type, theme) => {
  switch (type) {
    case 'primary':
      return theme.brand.lightest;

    case 'error':
      return theme.status.errorLight;

    case 'warning':
      return theme.status.warningLight;

    case 'success':
      return theme.status.succesLight;

    case 'normal':
      return '#F6F6F6';

    default:
      return 'transparent';
  }
};

Alert.propTypes = {
  /** Content to be shown inside the alert box. */
  children: node.isRequired,
  /** The type of alert box to be shown. (normal, primary, error, warning, success OR do not pass a value for the default styling) */
  type: string,
  /** Optional onClick function which gets triggered by clicking the whole box. */
  onClick: func,
  /** Wether or not to show the default "info" icon. */
  icon: bool,
  /** Optional className to be applied. */
  className: string,
  /** Optional props to be passed. */
  otherProps: object,
};

export default Alert;
