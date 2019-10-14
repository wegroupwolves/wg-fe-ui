import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const Title = ({
  className,
  children,
  color,
  ...otherProps
}) => {


  return (
    <H1
    color={color}
    className={className}
    {...otherProps}
    >
      {children}
    </H1>
  );
};

const H1 = styled.h1`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.big--size')};
  font-weight: 900;
  line-height: 130%;
  color: ${props =>  props.color ? props.color : `${key(`colors.font`)}` };
`;


Title.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
}

export default Title;
