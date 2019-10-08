import { configure, addDecorator} from '@storybook/react';
import Theme from './../src/constants/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
