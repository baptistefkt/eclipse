import React from 'react'
import styled from 'styled-components'

const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: #272b4e;
  font-size: 26px;
  font-weight: bold;
  padding: 15px;
  width: 100%;
  color: white;
  height: 60px;
  z-index: 20;
`

export function Header() {
  return (
    <StyledHeaderContainer>
      ECLIPSE
    </StyledHeaderContainer>
  )
}