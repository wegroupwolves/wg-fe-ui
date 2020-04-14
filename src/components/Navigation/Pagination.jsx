import React from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import ChevronLeft from '../Icons/IconActionChevronLeft';
import ChevronRight from '../Icons/IconActionChevronRight';

const Pagination = ({
  currentPage,
  totalPages,
  pageLength,
  base,
  otherFilters,
  ...otherProps
}) => {
  const urls = [];

  for (let index = 1; index <= totalPages; index++) {
    const generatedUrl = `${base}?page=${index}&pagelen=${pageLength}${otherFilters}`;
    const pageNumber = index;

    urls[index] = { url: generatedUrl, page: pageNumber };
  }

  return (
    <PaginationWrapper {...otherProps}>
      {currentPage > 1 ? (
        <PaginationButton>
          <ChevronLeft color="#C1C1C1" />
          <span className="label">Prev</span>
        </PaginationButton>
      ) : (
        ''
      )}

      <PaginationPages>
        {currentPage > 3 ? (
          <PaginationPage to={urls[1].url}>1</PaginationPage>
        ) : (
          ''
        )}
        {currentPage > 3 ? <PaginationPage disabled>...</PaginationPage> : ''}

        {urls.map(url => {
          return url.page >= currentPage - 2 && url.page <= currentPage + 2 ? (
            <PaginationPage
              to={url.url}
              key={url.page}
              active={url.page === currentPage ? true : false}
            >
              {url.page}
            </PaginationPage>
          ) : (
            ''
          );
        })}

        {currentPage < totalPages - 2 ? (
          <PaginationPage disabled>...</PaginationPage>
        ) : (
          ''
        )}
        {currentPage < totalPages - 2 ? (
          <PaginationPage to={urls[totalPages].url}>
            {totalPages}
          </PaginationPage>
        ) : (
          ''
        )}
      </PaginationPages>

      {currentPage < totalPages ? (
        <PaginationButton>
          <span className="label">Next</span>
          <ChevronRight color="#C1C1C1" />
        </PaginationButton>
      ) : (
        ''
      )}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.font};
  justify-content: center;
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
  padding: 8px 15px;
`;

const PaginationPage = styled(Link)`
  cursor: ${({ active, disabled }) =>
    active || disabled ? 'default' : 'pointer'};
  padding: 4px 5px;
  margin: 0 2px;
  background-color: ${({ active, theme }) =>
    active ? theme.brand.primary : 'white'};
  display: block;
  border-radius: 5px;
  color: ${({ active, theme }) => (active ? 'white' : theme.typo.interactive)};
  font-size: 1.4rem;
  line-height: 130%;
  transition: color 0.15s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme, active, disabled }) =>
      active
        ? 'white'
        : disabled
        ? theme.typo.interactive
        : theme.brand.primary};
  }
`;

Pagination.propTypes = {
  /** The current page the pagination component should show. */
  currentPage: number.isRequired,
  /** Total amount of pages possible. */
  totalPages: number.isRequired,
  /** Records shown per page. */
  pageLength: number.isRequired,
  /** URL on which the pagination is to be based. */
  base: string,
  /** Extra filters to be passed to the URL. */
  otherFilters: string,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  pageLength: 20,
};

export default Pagination;
