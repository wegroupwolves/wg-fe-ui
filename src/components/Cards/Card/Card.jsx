import React from 'react';
import { node, bool, func, string, object } from 'prop-types';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import styled from 'styled-components';

const Card = ({ children, onClick, className, ...otherProps }) => {
  return (
    <StyledCard onClick={onClick} className={className} {...otherProps}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  max-width: 100rem;
  background-color: white;
  border: 2px solid #f0f1f3;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 0.5rem;
  transition: box-shadow 0.1s ease-in-out, border 0.1s ease-in-out;

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  &:hover {
    border: ${({ theme, onClick }) =>
      onClick ? `2px solid ${theme.brand.primary}` : null};

    box-shadow: ${({ onClick }) =>
      onClick
        ? '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04)'
        : null};
  }
`;

Card.propTypes = {
  children: node.isRequired,
  onClick: func,
  className: string,
  otherProps: object,
};

Card.CardHeader = CardHeader;
Card.CardHeader.displayName = 'Card.CardHeader';
Card.CardContent = CardContent;
Card.CardContent.displayName = 'Card.CardContent';
Card.CardFooter = CardFooter;
Card.CardFooter.displayName = 'Card.CardFooter';

export default Card;
