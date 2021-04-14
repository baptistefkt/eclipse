import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import { Menu } from './Menu'
import { Content } from './Content'
import './App.css';

const StyledAppContainer = styled.div`
  background-color: #211204;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0d102c;
  }
`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledAppContainer>
      <GlobalStyle />
      <Header onclick={() => setMenuOpen(!menuOpen)}/>
      <Menu menuOpen={menuOpen}/>
      <Content />
    </StyledAppContainer>
  );
}

export default App;
