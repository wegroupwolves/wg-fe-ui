import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const SubTitle = ({
  className,
  children,
  color,
  ...otherProps
}) => {


  return (
    <H2
    color={color}
    className={className}
    {...otherProps}
    >
      {children}
    </H2>
  );
};

const H2 = styled.h2`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.normal-size')};
  font-weight: 900;
  line-height: 130%;
  color: ${props =>  props.color ? props.color : key(`colors.font`) };
`;


SubTitle.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
}

export default SubTitle;
