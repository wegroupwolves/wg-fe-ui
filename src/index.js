import ReactDOM from 'react-dom'
import styled from 'styled-components'
import React from 'react'
import { ProgressBar, ToolBar, TrackingBar } from './../src/components/Bars'
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
  ProgressBar,
  ToolBar,
  TrackingBar
};

const Wrapper = styled.div`
  margin: 0 auto;
`


const Container = ({ children }) => {

  console.log('children: ', children);
  return (
    <Wrapper>
      <h2 style={{ textAlign: 'center' }}>{children.type.displayName}</h2>
      {children}
    </Wrapper>
  )
}


// Export all components

ReactDOM.render(
  <Container>
    <ProgressBar />
  </Container>,
  document.getElementById('root')
)