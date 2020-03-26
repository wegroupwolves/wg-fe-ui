import React from 'react';
import { node, string, object, bool, func } from 'prop-types';
import styled from 'styled-components';

export const MenuFooter = ({
  opened,
  handleOpenClose,
  children,
  className,
  background,
  ...otherProps
}) => {
  return (
    <StyledMenuFooter
      background={background}
      className={className}
      {...otherProps}
    >
      {!background ? <Divider /> : ''}
      {children}
    </StyledMenuFooter>
  );
};

const StyledMenuFooter = styled.div`
  flex: 0 0 auto;
  padding: 2rem;
  background-color: ${({ background }) => (background ? 'white' : '#fbfbfb')};
  border-top: ${({ background }) => (background ? '1px solid #e4e4e4' : '')};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  margin-bottom: 2rem;
`;

MenuFooter.propTypes = {
  opened: bool,
  handleOpenClose: func,
  children: node.isRequired,
  className: string,
  background: bool,
  otherProps: object,
};
