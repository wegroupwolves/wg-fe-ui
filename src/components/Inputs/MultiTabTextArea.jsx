import React, { useEffect, useState } from 'react';
import { array, bool, func, node, number, object, string } from 'prop-types';
// import { TextArea, Tabs, IconResetFilled } from 'wg-fe-ui';
import styled from 'styled-components';
import { IconResetFilled } from '../Icons';
import TextArea from './TextArea';
import Tabs from '../Navigation/Tabs';

const MultiTabTextArea = ({
  values,
  errors,
  areas,
  children,
  maxLength,
  onChange,
  disabled,
  onReset,
  className,
}) => {
  const [selectedTab, setSelectedTab] = useState(values[0]?.tab);

  useEffect(() => {}, [selectedTab]);
  return (
    <Container className={className}>
      <Label>{children}</Label>
      <InputContainer>
        <Header disabled={disabled}>
          <StyledTabs onSelect={tab => setSelectedTab(tab)}>
            {areas?.map(valueObject => {
              return (
                <Tabs.Item
                  key={valueObject.name}
                  active={false}
                  name={valueObject.name}
                  rightAlign={false}
                  onBlur={() => null}
                  width="auto"
                >
                  <TabText error={errors[valueObject?.name]}>
                    {valueObject.tab}
                  </TabText>
                </Tabs.Item>
              );
            })}
          </StyledTabs>
          <ResetButton onClick={() => onReset(selectedTab)}>
            <StyledIconResetFilled color="#8990a3" />
            Reset to original
          </ResetButton>
        </Header>
        {areas?.map(valueObject => {
          if (valueObject.name === selectedTab)
            return (
              <StyledTextArea
                disabled={disabled}
                key={valueObject?.name}
                error={errors[valueObject?.name]}
                maxLength={maxLength}
                name={valueObject?.name}
                onBlur={() => null}
                onChange={onChange}
                placeholder={valueObject?.placeholder}
                value={values[valueObject?.name] || undefined}
              />
            );
          else return;
        })}
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 2.4rem;
  font-family: ${({ theme }) => theme.font};
  width: 100%;
`;

const Header = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : null)};
`;

const StyledTabs = styled(Tabs)`
  /* background-color: green; */
  pointer-events: ${({ disabled }) => (disabled ? 'none' : null)};

  & > div {
    margin: 0;
  }
  & li {
    padding: 1.4rem 0;
  }
`;

const StyledIconResetFilled = styled(IconResetFilled)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.4rem;
`;

const ResetButton = styled.p`
  position: absolute;
  right: 1.6rem;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.labels.guaranteeText};
  cursor: pointer;

  &:hover {
    color: black;
    & path {
      fill: black;
    }
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  line-height: 120%;
  color: #8990a3;
  margin-bottom: 0.8rem;
  display: block;
`;

const InputContainer = styled.div`
  position: relative;
`;

const TabText = styled.span`
  padding: 0 1.6rem;
  font-size: 1.4rem;
  position: relative;

  &:after {
    content: '!';
    color: red;
    display: ${({ error }) => (error ? 'static' : 'none')};
    position: absolute;
    bottom: 0;
    font-size: 1.4rem;
    height: 100%;
    right: 0.8rem;
  }
`;

const StyledTextArea = styled(TextArea)`
  & label {
    display: none;
  }
  & textarea {
    resize: vertical;
    border-radius: 0.5rem;
    padding-top: 5.8rem;
    min-height: 20rem;
    font-family: ${({ theme }) => theme.font};

    &:focus {
      outline: none;
      /* border-color: ${({ theme }) => theme.brand.primary}; */
    }
  }
`;

MultiTabTextArea.defaultProps = {
  onReset: () => null,
  disabled: false,
};

MultiTabTextArea.propTypes = {
  values: object.isRequired,
  areas: array.isRequired,
  children: node,
  maxLength: number,
  onChange: func,
  onReset: func,
  errors: object,
  disabled: bool,
  className: string,
};

export default MultiTabTextArea;
