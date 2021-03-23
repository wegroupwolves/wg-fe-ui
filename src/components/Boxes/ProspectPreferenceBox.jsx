import React, { useContext } from 'react';
import { func, string, object, bool } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';

import { H4 } from '../Typography';
import IconThumbsUp from '../Icons/IconThumbsUp';
import IconThumbsDown from '../Icons/IconThumbsDown';

const getColor = (value, theme) => {
  switch (value) {
    case true:
      return {
        dark: theme.status.succes,
        light: theme.status.succesLight,
      };

    case false:
      return {
        dark: theme.status.error,
        light: theme.status.errorLight,
      };

    default:
      return {
        dark: '#cccccc',
        light: '#f0f1f3',
      };
  }
};

const ProspectPreferenceBox = ({
  label,
  value,
  DisplayIcon,
  className,
  ...otherProps
}) => {
  const theme = useContext(ThemeContext);
  const { dark, light } = getColor(value, theme);

  return (
    <Container className={className} color={dark} {...otherProps}>
      <InnerContainer>
        <IconContainer color={light}>
          <DisplayIcon color={dark} />
        </IconContainer>

        <Label>{label}</Label>
      </InnerContainer>

      {value !== null && (
        <StatusIconContainer color={dark}>
          {value === true && <IconThumbsUp color={theme.status.succesLight} />}
          {value === false && (
            <IconThumbsDown color={theme.status.errorLight} />
          )}
        </StatusIconContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;

  border: ${({ color }) => `solid ${color} 1px`};
  border-radius: 0.8rem;

  width: 23rem;
`;

const InnerContainer = styled.div`
  grid-row: 1;
  grid-column: 1;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  padding: 1.6rem;
`;

const Label = styled(H4)`
  text-align: center;
  font-weight: 400;

  word-break: break-word;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  width: 4.4rem;
  height: 4.4rem;

  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

const StatusIconContainer = styled.div`
  grid-row: 1;
  grid-column: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  background-color: ${({ color }) => color};
  border-radius: 50%;

  justify-self: flex-end;
  margin-top: -1.6rem;
  margin-right: -1.6rem;
`;

ProspectPreferenceBox.propTypes = {
  /** Label to be shown in the container. */
  label: string.isRequired,
  /** This will handle the status color: true || null || false */
  value: bool,
  /** React element FUNCTION which has the icon that will be displayed. */
  DisplayIcon: func.isRequired,
  /** Extra classes to be passed to the element. */
  className: string,
  /** Extra props to be passed to the element. */
  otherProps: object,
};

ProspectPreferenceBox.defaultProps = {
  value: null,
};

export default ProspectPreferenceBox;
