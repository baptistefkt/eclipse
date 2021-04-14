import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import { Menu } from './Menu'
import { Content } from './Content'
import './App.css';

const StyledAppContainer = styled.div`
  background-color: #0d102c;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0d102c;
  }
`

function App() {
  return (
    <StyledAppContainer>
      <GlobalStyle />
      <Header />
      <Menu />
      <Content />
    </StyledAppContainer>
  );
}

export default App;
