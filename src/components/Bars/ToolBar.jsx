import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './../Buttons';
import { string, object, node, func, bool } from 'prop-types';

const Box = styled.div`
  display: flex;
  background-color: #f7f7f7;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 13px 9.21vw 12px 15.73vw;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const InnerBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.ui.outline};
  margin-right: 2.4vw;

  input {
    border: none;
    background-color: inherit;
  }
`;

InnerBox.displayName = 'InnerBox';

const ToolBar = ({
  btnName,
  btnDisable,
  className,
  children,
  level,
  onClick,
  ...otherProps
}) => {
  return (
    <Box className={className} {...otherProps}>
      <Wrapper>
        <InnerBox>{children}</InnerBox>
        <ActionButton
          disabled={btnDisable}
          level={level}
          onClick={onClick}
          padding="0.5rem 1.5rem"
        >
          {btnName}
        </ActionButton>
      </Wrapper>
    </Box>
  );
};

ToolBar.defaultProps = {
  btnName: 'New claim',
  level: 'primary',
  btnDisable: false,
  onClick: Function.prototype,
  otherProps: {},
};

ToolBar.propTypes = {
  /** Button name */
  btnName: string,
  /** Disable button */
  btnDisable: bool,
  /** Beeing able to use it in Styled Components */
  className: string,
  level: string,
  onClick: func,
  /** Adds extra props to the element */
  otherProps: object,
  children: node,
};

ToolBar.displayName = 'ToolBar';

export default ToolBar;
