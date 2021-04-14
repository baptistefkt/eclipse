import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'


const params = {
  "particles": {
      "number": {
          "value": 70,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 1,
          "random": true
      },
      "move": {
          "enable": true,
          "speed": 3,
          "direction": "top",
          "out_mode": "out",
          "random": true,
          "straight": false,
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": false,
              
          }
      },
  }
}

const StyledHero = styled.div`
  background-color: linear-gradient(141deg, rgb(176 114 255 / 57%), #3f4894);
  grid-column: 1 / 4;
  grid-row: 1;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 70px;
    font-weight: 800px;
    span {
      display: block;
      font-size: 25px;
      font-weight: 400px;
    }
  }
`

const StyledParticleCont = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
`

export function Hero() {
  return (
    <>
      <StyledHero>
        <h1>
          Welcome to Eclipse. <span>Truly a safe token, let's moon.</span>
        </h1>
        <StyledParticleCont>
          <Particles params={params} />
        </StyledParticleCont>
      </StyledHero>
      
    </>
  )
}