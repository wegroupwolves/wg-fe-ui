import React from 'react';
import { bool, object, string } from 'prop-types';
import styled from 'styled-components';
import Checkmark from '../../assets/checkmark';
import Errormark from '../../assets/errormark';

const ValidationIcons = ({ browser, error, focus, iconRight, touched }) => {
  return error ? (
    <StyledErrormark
      color="#F74040"
      focus={focus}
      right={iconRight}
      browser={browser ? browser.name : null}
    />
  ) : touched ? (
    <StyledCheckmark
      color="#00CD39"
      focus={focus}
      right={iconRight}
      browser={browser ? browser.name : null}
    />
  ) : null;
};

const StyledCheckmark = styled(Checkmark)`
  position: absolute;
  right: ${({ focus, right }) => (focus ? right : '1rem')};
  bottom: 1.3rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

const StyledErrormark = styled(Errormark)`
  position: absolute;
  right: ${({ focus, right }) => (focus ? right : '1rem')};
  bottom: 1.2rem;
  max-width: 2rem;
  transition: 0.2s;
  object-fit: contain;
`;

ValidationIcons.displayName = 'ValidationIcons';

ValidationIcons.defaultProps = {
  error: '',
  touched: false,
};

ValidationIcons.propTypes = {
  browser: object,
  iconRight: string,
  focus: bool,
  /** string with errormessage */
  error: string,
  /** boolean to check if inputfield is touched */
  touched: bool,
};

ValidationIcons.displayName = 'ValidationIcons';

export default ValidationIcons;
