import React from 'react';
import { node, string, object, bool, func } from 'prop-types';
import styled from 'styled-components';

export const MenuContent = ({
  opened,
  handleOpenClose,
  children,
  className,
  ...otherProps
}) => {
  return (
    <StyledMenuContent className={className} {...otherProps}>
      {children}
    </StyledMenuContent>
  );
};

const StyledMenuContent = styled.div`
  flex: 1 0 auto;
  padding: 2rem;
  background-color: #fbfbfb;
  overflow-y: scroll;
`;

MenuContent.propTypes = {
  opened: bool,
  handleOpenClose: func,
  children: node.isRequired,
  className: string,
  otherProps: object,
};
