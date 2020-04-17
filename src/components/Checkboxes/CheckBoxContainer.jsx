import React, { useState } from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';

const CheckBoxContainer = ({ children, label }) => {
  const [CheckedAll, setCheckedAll] = useState(false);

  const elements = React.Children.toArray(children);

  const toggleCheckedAll = () => {
    setCheckedAll(!CheckedAll);
  };

  return (
    <CheckBoxContainerWrapper>
      <CheckBoxContainerHeader>
        <span className="title">
          {label}
          {label !== '' ? ' -' : ''}{' '}
        </span>
        <CheckBoxContainerToggler onClick={toggleCheckedAll}>
          {CheckedAll ? 'Deselect all' : 'Select all'}
        </CheckBoxContainerToggler>
      </CheckBoxContainerHeader>

      {elements.map((element, index) => {
        return React.cloneElement(element, {
          checked: CheckedAll,
          style: { marginBottom: '6px' },
        });
      })}
    </CheckBoxContainerWrapper>
  );
};

const CheckBoxContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font};
`;

const CheckBoxContainerHeader = styled.div`
  margin-bottom: 7px;

  .title {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.typo.highlight};
  }
`;

const CheckBoxContainerToggler = styled.a`
  font-size: 1rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.typo.selected};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

CheckBoxContainer.propTypes = {
  children: node,
  label: string,
};

export default CheckBoxContainer;
