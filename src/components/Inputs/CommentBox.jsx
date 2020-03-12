import React from 'react';
import { string, node, int, func } from 'prop-types';
import styled from 'styled-components';

import * as Icons from '../Icons';

const IconsList = {};
Object.keys(Icons).map(IconKey => {
  IconsList[Icons[IconKey].name] = Icons[IconKey];
});

const CommentBox = ({
  title,
  icon,
  children,
  editHandler,
  deleteHandler,
  id,
}) => {
  const ChosenIcon = IconsList[icon];

  return (
    <CommentBoxWrapper>
      <CommentBoxIcon>
        <ChosenIcon color="#D3D4D8"></ChosenIcon>
      </CommentBoxIcon>

      <CommentBoxContent>
        <CommentBoxHeader>
          <span className="title">{title}</span>

          <CommentBoxActions>
            <span> | </span>
            <CommentBoxAction onClick={editHandler}>Edit</CommentBoxAction>
            <CommentBoxAction onClick={deleteHandler}>Delete</CommentBoxAction>
          </CommentBoxActions>
        </CommentBoxHeader>

        {children}
      </CommentBoxContent>
    </CommentBoxWrapper>
  );
};

const CommentBoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
`;

const CommentBoxIcon = styled.div`
  margin-right: 20px;
`;

const CommentBoxContent = styled.div``;

const CommentBoxHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  .title {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #a29c95;
  }
`;

const CommentBoxActions = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;

  span {
    margin: 0 10px;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #a29c95;
  }

  ${CommentBoxWrapper}:hover & {
    display: flex;
  }
`;

const CommentBoxAction = styled.a`
  margin-right: 10px;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #a29c95;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.brand.primary};
  }
`;

CommentBox.propTypes = {
  /** Title displayed next to the actions. */
  title: string,

  /** Icon to be displayed on the left side. */
  icon: string,
  children: node,

  /** Function to be ran when 'edit' is clicked. */
  editHandler: func,

  /** Function to be ran when 'delete' is clicked. */
  deleteHandler: func,
  id: int,
};

export default CommentBox;
