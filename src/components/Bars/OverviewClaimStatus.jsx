import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatusRectangle = styled.div`
  width: 20px;
  height: 3.81px;
  background-color: ${({ color }) => (color ? color : null)};
  margin-right: 5px;
`;

StatusRectangle.displayName = 'StatusRectangle';

const StatusesContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  span {
    font-size: 1.2rem;
    margin-bottom: 5.33px;
    line-height: 16px;
  }
`;

/**
 * Returns valid HEX color depending on
 * current item index
 * @param {number} mappedIndex
 * @param {number} currentIndex
 */
const getRectangleColor = (mappedIndex, currentIndex = 1) => {
  if (mappedIndex < currentIndex) return '#37D66C';
  else if (mappedIndex === currentIndex) return '#FFD600';
  else return '#F1EFEF';
};

const OverviewClaimStatus = ({
  statuses,
  currentStatus,
  className,
  ...rest
}) => {
  const rectangles = statuses.map((status, i) => (
    <StatusRectangle
      key={status}
      color={getRectangleColor(i, statuses.indexOf(currentStatus))}
    />
  ));

  return (
    <Container className={className} {...rest}>
      <span>{currentStatus}</span>
      <StatusesContainer>{rectangles}</StatusesContainer>
    </Container>
  );
};

OverviewClaimStatus.propTypes = {
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStatus: PropTypes.string,
  className: PropTypes.string,
};

OverviewClaimStatus.defaultProps = {
  statuses: [],
};

export default OverviewClaimStatus;
