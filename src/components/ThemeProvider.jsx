import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shape } from 'prop-types';

const ThemeProviderLib = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeProviderLib.propTypes = {
  children: shape().isRequired,
  theme: shape().isRequired,
};

export default ThemeProviderLib;
