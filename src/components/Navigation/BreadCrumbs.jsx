import React from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';
import styled from 'styled-components';
import ChevronRight from '../Icons/IconBreadCrumbChevronRight';

const BreadCrumbs = ({ urls }) => {
  return (
    <>
      {urls.length > 3 ? (
        <BreadCrumbsContainer>
          <BreadCrumb to={urls[0].url}> {urls[0].label} </BreadCrumb>
          <StyledChevronRight />
          <BreadCrumbSpacer>...</BreadCrumbSpacer>
          <StyledChevronRight />
          <BreadCrumb to={urls[urls.length - 1].url} active>
            {urls[urls.length - 1].label}
          </BreadCrumb>
        </BreadCrumbsContainer>
      ) : (
        <BreadCrumbsContainer>
          {urls.map((url, index) => {
            return (
              <React.Fragment key={index}>
                <BreadCrumb
                  key={index}
                  to={url.url}
                  isActive={urls.length - 1 !== index ? false : true}
                >
                  {url.label}
                </BreadCrumb>
                {urls.length - 1 !== index ? <StyledChevronRight /> : ''}
              </React.Fragment>
            );
          })}
        </BreadCrumbsContainer>
      )}
    </>
  );
};

const StyledChevronRight = () => <ChevronRight size={13} color="#8990a3" />;

const BreadCrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.font};
`;

const BreadCrumb = styled(Link)`
  font-size: 1.4rem;
  line-height: 120%;
  color: ${({ theme }) => theme.labels.guaranteeText};

  margin: 0 5px;
  font-weight: ${({ isActive }) => (isActive ? '500' : 'normal')};
  pointer-events: ${({ isActive }) => isActive && 'none'};
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.ui.highlight : theme.typo.title};
  }
`;

const BreadCrumbSpacer = styled.p`
  font-size: 1.4rem;
  line-height: 120%;
  color: ${({ theme }) => theme.ui.disabled};
  margin: 0 5px;
  text-decoration: none;
`;

BreadCrumbs.propTypes = {
  urls: array,
};

export default BreadCrumbs;
