import React from 'react';
// import { string } from 'prop-types';
import styled from 'styled-components';
import ChevronLeft from '../Icons/IconActionChevronLeft';
import ChevronRight from '../Icons/IconActionChevronRight';

const Pagination = () => {
  return (
    <PaginationWrapper>
      <PaginationButton>
        <ChevronLeft color="#C1C1C1" />
        <span className="label">Prev</span>
      </PaginationButton>

      <PaginationPages>
        <PaginationPage>1</PaginationPage>
        <PaginationPage>...</PaginationPage>
        <PaginationPage>6</PaginationPage>
        <PaginationPage>7</PaginationPage>
        <PaginationPage active={true}>8</PaginationPage>
        <PaginationPage>9</PaginationPage>
        <PaginationPage>10</PaginationPage>
        <PaginationPage>...</PaginationPage>
        <PaginationPage>25</PaginationPage>
      </PaginationPages>

      <PaginationButton>
        <span className="label">Next</span>
        <ChevronRight color="#C1C1C1" />
      </PaginationButton>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.font};
  justify-content: center;
  /* align-items: center; */
  border: 1px solid #e4e4e4;
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
`;

const PaginationButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:first-of-type {
    border-right: 1px solid #e4e4e4;
    padding-right: 10px;
  }

  &:last-of-type {
    border-left: 1px solid #e4e4e4;
    padding-left: 10px;
  }

  svg {
    transform: scale(0.5);
  }

  .label {
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.typo.interactive};
    transition: 0.15s ease-in-out;
  }

  &:hover {
    .label {
      color: ${({ theme }) => theme.brand.primary};
    }
  }
`;

const PaginationPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
`;

const PaginationPage = styled.a`
  cursor: pointer;
  padding: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.brand.primary : 'white'};
  display: block;
  border-radius: 5px;
  color: ${({ active, theme }) => (active ? 'white' : theme.typo.interactive)};
  font-size: 1.4rem;
  line-height: 130%;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ active, theme }) => (active ? 'white' : theme.brand.primary)};
  }
`;

// Pagination.propTypes = {
//   label: string,
// };

export default Pagination;
