import React from 'react';
import { Link } from 'react-router-dom';
import { number, string, func } from 'prop-types';
import styled from 'styled-components';
import ChevronLeft from '../Icons/IconActionChevronLeft';
import ChevronRight from '../Icons/IconActionChevronRight';

const Pagination = ({
  currentPage,
  totalPages,
  base,
  otherFilters,
  onClick,
  nextText,
  prevText,
  ...otherProps
}) => {
  const urls = [];

  for (let index = 1; index <= totalPages; index++) {
    const generatedUrl = `${base}${index}`;
    const pageNumber = index;

    if (base === undefined) {
      urls[index] = { url: `${pageNumber}`, page: pageNumber };
    } else {
      urls[index] = { url: generatedUrl, page: pageNumber };
    }
  }

  const prevUrl = currentPage - 1;
  const nextUrl = currentPage + 1;

  // disable history pushing when you just want to update an querystring
  // If there is no base given (=undefined) then just provide a callback
  function handleOnclick(e) {
    if (base === undefined) {
      e.preventDefault();
      const page =
        e?.currentTarget
          ?.getAttribute('href')
          ?.split('/')
          ?.pop() || [];

      onClick(page);
    }
  }

  return (
    <PaginationWrapper {...otherProps}>
      {currentPage > 1 ? (
        <PaginationButton onClick={handleOnclick} to={urls[prevUrl].url}>
          <ChevronLeft color="#C1C1C1" />
          <span className="label">{prevText}</span>
        </PaginationButton>
      ) : (
        ''
      )}

      <PaginationPages>
        {currentPage > 4 ? (
          <PaginationPage onClick={handleOnclick} to={urls[1].url}>
            1
          </PaginationPage>
        ) : (
          ''
        )}
        {currentPage > 4 ? (
          <PaginationPageNoLink>...</PaginationPageNoLink>
        ) : (
          ''
        )}

        {urls.map(url => {
          return url.page >= currentPage - 2 && url.page <= currentPage + 2 ? (
            <PaginationPage
              to={url.url}
              key={url.page}
              active={url.page === currentPage ? 1 : 0}
              onClick={handleOnclick}
            >
              {url.page}
            </PaginationPage>
          ) : (
            ''
          );
        })}

        {currentPage < totalPages - 3 ? (
          <PaginationPageNoLink disabled>...</PaginationPageNoLink>
        ) : (
          ''
        )}
        {currentPage < totalPages - 3 ? (
          <PaginationPage onClick={handleOnclick} to={urls[totalPages].url}>
            {totalPages}
          </PaginationPage>
        ) : (
          ''
        )}
      </PaginationPages>

      {currentPage < totalPages ? (
        <PaginationButton onClick={handleOnclick} to={urls[nextUrl].url}>
          <span className="label">{nextText}</span>
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

const PaginationButton = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

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
    line-height: 120%;
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
  line-height: 120%;
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

const PaginationPageNoLink = styled.div`
  padding: 4px 5px;
  margin: 0 2px;
  background-color: ${({ active, theme }) =>
    active ? theme.brand.primary : 'white'};
  display: block;
  border-radius: 5px;
  color: ${({ active, theme }) => (active ? 'white' : theme.typo.interactive)};
  font-size: 1.4rem;
  line-height: 120%;
  transition: color 0.15s ease-in-out;
  text-decoration: none;
`;

Pagination.defaultProps = {
  onClick: () => {},
  prevText: 'Prev',
  nextText: 'Next',
};

Pagination.propTypes = {
  /** The current page the pagination component should show. */
  currentPage: number.isRequired,
  /** Total amount of pages possible. */
  totalPages: number.isRequired,
  /** Records shown per page. */
  pageLength: number.isRequired,
  /** URL on which the pagination is to be based. */
  base: string,
  /** Callback that fire's when there is no base */
  onClick: func,
  /** Text which has to be displayed on the previous button */
  prevText: string,
  /** Text which has to be displayed on the next button */
  nextText: string,
  /** Extra filters to be passed to the URL. */
  otherFilters: string,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  pageLength: 20,
};

export default Pagination;
