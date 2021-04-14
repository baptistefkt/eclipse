import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Menu } from './Menu'
import { Content } from './Content'
import './App.css';

const StyledAppContainer = styled.div`
  background-color: #0d102c;
  box-sizing: border-box;
`

function App() {
  return (
    <StyledAppContainer>
      <Header />
      <Menu />
      <Content />
    </StyledAppContainer>
  );
}

export default App;
