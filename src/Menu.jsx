import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faChartBar, faChartLine, faRss, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faReddit, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
  span {
    font-size: 12px;
    padding-left: 7px;
    transition: 0.2s;
  }
  svg {
    transition: 0.2s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
      color: white;
    }
    span {
      padding-left: 10px;
      color: white;
    }
  }
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
            <FontAwesomeIcon icon={faTrophy}/>
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
    </StyledMenuContainer>
  )
}