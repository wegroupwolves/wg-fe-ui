import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  Container,
  StyledInput,
} from '../Checkboxes/ImageBars/ImageBarTemplate';

const StyledCheck = styled.span`
  height: 16px;
  min-width: 16px;
  border-radius: 10px;
  border: ${({ checked }) => (checked ? '5px solid' : '1.2px solid')};
  box-sizing: border-box;
  border-color: ${({ checked, theme }) =>
    checked ? theme.brand.secondary : theme.ui.outline};
`;

const FlightData = styled.div`
  display: flex;
  flex-direction: column;
  border-right: ${({ border, theme }) =>
    border ? `1px solid ${theme.ui.outline}` : null};
  padding-right: ${({ border }) => (border ? '1.7vw' : null)};
  margin-right: 7%;

  .label {
    font-size: 1.4rem;
    line-height: 120%;
    color: ${({ theme }) => theme.labels.defaultText};
  }

  .data {
    font-size: 1.6rem;
    line-height: 120%;
    color: #505050;
    font-weight: 600;
  }
`;

const StyledContainer = styled(Container)`
  width: 52vw;
  justify-content: space-around;
  padding: 0 2vw;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  svg {
    margin: 0;
  }

  ${({ checked, theme }) =>
    checked
      ? css`
          background-color: ${theme.brand.lightest};
          border-color: ${theme.brand.secondary};
          ${FlightData} {
            border-right-color: ${theme.brand.secondary};
            .label {
              color: ${theme.brand.secondary};
            }
            .data {
              color: ${theme.brand.primary};
            }
          }
          svg {
            fill: ${theme.brand.secondary};
            stroke: ${theme.brand.secondary};
          }
        `
      : null};
  ${FlightData} > span {
    color: ${({ disabled, theme }) => (disabled ? theme.ui.outline : null)};
  }
`;

const StyledFlightData = ({ border, label, data, children }) => (
  <FlightData border={border}>
    {label && data && (
      <>
        <span className="label">{label}</span>
        <span className="data">{data}</span>
      </>
    )}
    {children}
  </FlightData>
);

StyledFlightData.propTypes = {
  border: PropTypes.bool,
  label: PropTypes.string,
  data: PropTypes.string,
  children: PropTypes.node,
};

StyledFlightData.defaultProps = {
  border: false,
};

const FlightSelectBar = forwardRef(
  (
    { checked, disabled, handleChange, value, children, name, ...otherProps },
    ref,
  ) => {
    const onChange = e => {
      e.persist();
      handleChange({ name: e.target.name, value: e.target.value });
    };
    return (
      <StyledContainer checked={checked} disabled={disabled} {...otherProps}>
        <StyledInput
          ref={ref}
          type="radio"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          value={value}
          name={name}
        />
        {children}
        <StyledCheck checked={checked} />
      </StyledContainer>
    );
  },
);

FlightSelectBar.displayName = 'RadioOption';
FlightSelectBar.FlightData = StyledFlightData;
FlightSelectBar.FlightData.displayName = 'FlightSelectBar.FlightData';

FlightSelectBar.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.elementType,
  children: PropTypes.node,
};

FlightSelectBar.defaultProps = {
  checked: false,
  value: '',
  name: '',
};

export default FlightSelectBar;
