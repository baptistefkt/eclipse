import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartBar, faChartLine, faRss, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faReddit, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import pancakeSvg from './pancake.svg'
import bscscan from './bscscan-logo.svg'

const StyledMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  width: 200px;
  background: linear-gradient(142deg, #212440, #0000001f);
  left: 0;
  height: calc(100vh - 60px);
  min-height: 740px;
  padding: 15px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #d6dbff;
    font-size: 10px;
  }
`

const StyledMenuBlock = styled.div`
  .top {
    margin-top: 0;
  }
`

const StyledMenuTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #7a7fa9;
  margin-top: 20px;
  height: 20px;
`
const StyledMenuItems = styled.div`
  height: 30px;
  line-height: 30px;
  letter-spacing: 0;
  font-weight: 500;
  span {
    font-size: 12px;
    padding-left: 8px;
    transition: 0.2s;
  }
  svg {
    transition: 0.2s;
  }
  &:hover {
    svg, img {
      transform: scale(1.2);
      color: white;
    }
    span {
      padding-left: 11px;
      color: white;
    }
  }

img {
  width: 13px;
  height: 13px;
  position: relative;
  top: -2px;
  transition: 0.2s;
}
`
const StyledButtonsCont = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 100px;
  left: 0px;
  padding: 15px;
  padding-bottom: 146px;
`
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  float: left;
  margin-top: 15px;
  background: #272b4e;
  border-radius: 5px;
  border: 2px solid #4b5080;
  box-shadow: 10px 10px 20px 0px #0b0d23;
  transition-duration: 0.2s;
  position: relative;
  cursor: pointer;
`

export function Menu() {
  return (
    <StyledMenuContainer>
      <StyledMenuBlock>
        <StyledMenuTitle className="top">Website navigation</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTachometerAlt}/>
            <span>Dashboard</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faRss}/>
            <span>Releases</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTrophy}/>
            <span>Contests</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Important links</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <img src={pancakeSvg} alt="Pancakeswap" />
            <span>Buy on Pancakeswap</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartLine}/>
            <span>Chart</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faChartBar}/>
            <span>BSC Scan</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledMenuBlock>
        <StyledMenuTitle>Socials</StyledMenuTitle>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTelegramPlane}/>
            <span>Telegram</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter}/>
            <span>Twitter</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faReddit}/>
            <span>Reddit</span>
          </a>
        </StyledMenuItems>
        <StyledMenuItems>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord}/>
            <span>Discord</span>
          </a>
        </StyledMenuItems>
      </StyledMenuBlock>
      <StyledButtonsCont>
        <StyledButton>
          <img src={bscscan} alt="bscscan-logo"/>
        </StyledButton>
      </StyledButtonsCont>
    </StyledMenuContainer>
  )
}