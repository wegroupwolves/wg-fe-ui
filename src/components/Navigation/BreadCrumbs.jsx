import React from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';
import styled from 'styled-components';
import ChevronRight from '../Icons/IconActionChevronRight';

const BreadCrumbs = ({ urls }) => {
  return (
    <>
      {urls.length > 3 ? (
        <BreadCrumbsContainer>
          <BreadCrumb to={urls[0].url}> {urls[0].label} </BreadCrumb>
          <ChevronRight size={15} />
          <BreadCrumbSpacer>...</BreadCrumbSpacer>
          <ChevronRight size={15} />
          <BreadCrumb to={urls[urls.length - 1].url} active>
            {urls[urls.length - 1].label}
          </BreadCrumb>
        </BreadCrumbsContainer>
      ) : (
        <BreadCrumbsContainer>
          {urls.map((url, index) => {
            return (
              <>
                <BreadCrumb
                  to={url.url}
                  active={urls.length - 1 !== index ? false : true}
                >
                  {url.label}
                </BreadCrumb>
                {urls.length - 1 !== index ? <ChevronRight size={15} /> : ''}
              </>
            );
          })}
        </BreadCrumbsContainer>
      )}
    </>
  );
};

const BreadCrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.font};
`;

const BreadCrumb = styled(Link)`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.ui.highlight};
  margin: 0 5px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme, active }) =>
      active ? theme.ui.highlight : theme.typo.title};
  }
`;

const BreadCrumbSpacer = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.ui.disabled};
  margin: 0 5px;
  text-decoration: none;
`;

BreadCrumbs.propTypes = {
  urls: array,
};

export default BreadCrumbs;
