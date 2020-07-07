import React from 'react';
import styled from 'styled-components';
import { node, string, func, object } from 'prop-types';
import copy from 'copy-to-clipboard';

import { IconWebWorldFilled } from '../Icons';

const LinkBox = ({ children, url, onClick, className, ...otherProps }) => {
  /**
   * Default click handler which copies the given URL to the user's clipboard.
   */
  const handleClick = () => {
    copy(url);
  };

  return (
    <StyledLinkBox
      onClick={
        onClick
          ? onClick
          : e => {
              handleClick(e);
            }
      }
      className={className}
      {...otherProps}
    >
      <UrlBox>
        <IconWebWorldFilled size={22} color="#8990A3" />
        {url}
      </UrlBox>

      {children ? <InfoBox>{children}</InfoBox> : null}
    </StyledLinkBox>
  );
};

const StyledLinkBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 100rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f1f3;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
      0 16px 24px rgba(0, 0, 0, 0.06);
  }
`;

const UrlBox = styled.div`
  padding: 1.2rem;
  background-color: #f0f1f3;
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-family: ${({ theme }) => theme.font};
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #222;

  > svg {
    margin-right: 0.8rem;
  }
`;

const InfoBox = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 1.2rem;
`;

LinkBox.propTypes = {
  /** Pass elements to be displayed in the bottom half of the element. */
  children: node,
  /** URL to be displayed inside the element. */
  url: string.isRequired,
  /** If onClick is passed, the default onClick will be overwritten (default onClick copies the URL to clipboard). */
  onClick: func,
  /** Extra classname to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

export default LinkBox;
