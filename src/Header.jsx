import React from 'react'
import styled from 'styled-components'
import { StyledNotVisibleXS, StyledVisibleXS, StyledButton } from './commonStyled'
import pancakeSvg from './pancake.svg'


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
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledPancakeButton = styled(StyledButton)`
  &:hover {
    transform: translateY(-3px);
    box-shadow: 10px 20px 20px 0px #0b0d23;
    transition-duration: 0.2s;
  }

  img {
    width: 18px;
    margin-right: 8px;
  }
`


export function Header() {
  return (
    <StyledHeaderContainer>
      <span>ECLIPSE</span>
      <StyledNotVisibleXS>
        <StyledPancakeButton>
          <img src={pancakeSvg} alt="Pancakeswap" />
          BUY ON PANCAKESWAP
        </StyledPancakeButton>
      </StyledNotVisibleXS>
    </StyledHeaderContainer>
  )
}