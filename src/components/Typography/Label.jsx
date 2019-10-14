import React from 'react';
import { string, node, object } from 'prop-types';
import styled from 'styled-components';
import { key } from 'styled-theme';

const Label = ({
  className,
  children,
  color,
  ...otherProps
}) => {


  return (
    <P
    color={color}
    className={className}
    {...otherProps}
    >
      {children}
    </P>
  );
};

const P = styled.p`
  font-family: ${key('fonts.primary')};
  font-size: ${key('fonts.regular--size')};
  font-weight: normal;
  line-height: 130%;
  color: ${props =>  props.color ? props.color : `${key(`colors.sub-txt`)}` };
`;


Label.propTypes = {
  /** Beeing able to use it in Styled Components */
  className: string,
  /** If true button is disabled */
  children: node.isRequired,
  color: string,
  otherProps: object,
}

export default Label;
