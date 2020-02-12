import React from 'react';
import styled from 'styled-components';
import { ActionButton } from './../Buttons';
import { string, object, node, func, bool } from 'prop-types';

const Box = styled.div`
  display: flex;
  background-color: #f7f7f7;
  height: 7.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 18px 9.7vw 17px 1.56vw;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.ui.outline};
  padding-left: 2rem;
`;

ButtonWrapper.displayName = 'ButtonWrapper';

const InnerBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

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
        <ButtonWrapper>
          <ActionButton
            disabled={btnDisable}
            level={level}
            onClick={onClick}
            padding="0.5rem 1.5rem"
          >
            {btnName}
          </ActionButton>
        </ButtonWrapper>
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
