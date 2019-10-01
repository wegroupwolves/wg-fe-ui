import ReactDOM from 'react-dom'
import React from 'react'
import { ToolBar } from './../src/components/Bars'
import { ActionButton, ToggleActionButton } from './components/Buttons';
import { Checkbox } from './components/Checkboxes';
import { TextInput, SearchInput, SearchSelectInput } from './components/Inputs';
import { QuestionBox } from './components/Boxes';
import { DisplayTable, OverviewTable } from './components/Tables';
import { HeaderNav, MainNavigation } from './components/Navigation';
import { Section } from './components/Section';
import { ThemeProvider } from 'styled-components';
import Theme from './constants/theme';

export {
  ActionButton,
  ToggleActionButton,
  ThemeProvider,
  Checkbox,
  TextInput,
  SearchInput,
  SearchSelectInput,
  QuestionBox,
  DisplayTable,
  Theme,
  HeaderNav,
  MainNavigation,
  Section,
  OverviewTable,
  ToolBar
};

// Export all components

ReactDOM.render(
  <ToolBar><SearchInput  placeholder="search for text..." /></ToolBar>,
  document.getElementById('root')
)