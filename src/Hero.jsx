import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import hero from './hero.jpg'


const params = {
  "particles": {
      "links": {
        "enable": true,
        "opacity": 0.1,
      },
      "number": {
          "value": 120,
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
          "speed": 1,
          "direction": "none",
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

const StyledHero = styled.header`
  width: 100%;
  height: auto;
  min-height: 320px;
  border-radius: 8px;
  background-image: linear-gradient(141deg, rgb(158 144 144 / 22%), #943f3f), url(${hero});
  background-size: cover;
  background-position: center top;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 20px 0px #0b0d23;

  grid-column: 1 / 4;
  grid-row: 1;
  margin-bottom: 10px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -3px;
    line-height: 40px;
    span {
      display: block;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: normal;
      margin-top: 16px;
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