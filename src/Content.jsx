import React from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faRecycle, faFire, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './commonStyled'

const StyledContentContainer = styled.div`
  margin-left: 200px;
  margin-top: 60px;
  padding: 20px;
  background-color: #0d102c;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;

  > div, article {
    background: linear-gradient(142deg, #212440, #292e634a);
    border-radius: 8px;
  }
`

const StyledArticle = styled.article`
  min-height: 200px;
  border-radius: 10px;
  padding: 20px;

  h4 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    color: white;

    small {
      color: #8270c4;
      text-shadow: 0px 0px 6px #4e4693;
      font-size: 12px;
      font-weight: 400;
      padding-left: 7px;
    }
  }

  p {
    color: #838dd6;
    font-size: 14px;
    margin-top: 30px;
  }

  .flex, .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .flex {
    margin-bottom: 16px;
  }

  .iconContainer {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    background: #7872ff;
    border: 2px solid #a7a3ff;
    text-align: center;
    float: left;
    font-size: 12px;
    line-height: 18px;
    margin-right: 10px;
    color: white;
  }

  .left {
    color: white;
    font-weight: 600;
  }
  .right {
    color: #9b82fb;
    font-size: 12px;
  }

  .bolder {
    font-weight: 700;
    color: #838dd6;
  }
`

export function Content() {
  return (
    <StyledContentContainer>
      <Hero />
      <StyledArticle>
        <h4>
          About Eclipse
          <small>Brief description</small>
        </h4>
        <p>We are tired of all the scams that happen among tokens. So we decided to take matters into our own hands. That's why we created ECLIPSE, with the intention of being 100% safe from rug pulls. How? Because we, the devs have no rugs to pull. This token is for you, let's moon.</p>
      </StyledArticle>
      <StyledArticle>
        <h4>
          Tokenomics
          <small>Update daily</small>
        </h4>
        <div className="content">
          <div className="flex">
            <div className="left">
              <div className="iconContainer">
                <FontAwesomeIcon icon={faCoins} />
              </div>
              <div>Max Supply</div>
            </div>
            <div className="right">1,000,000,000,000,000</div>
          </div>
          <div className="flex">
            <div className="left">
              <div className="iconContainer">
                <FontAwesomeIcon icon={faRecycle} />
              </div>
              <div>Circulating</div>
            </div>
            <div className="right">720,093,318,120,919</div>
          </div>
          <div className="flex">
            <div className="left">
              <div className="iconContainer">
                <FontAwesomeIcon icon={faFire} />
              </div>
              <div>Burned</div>
            </div>
            <div className="right">279,906,681,879,081</div>
          </div>
          <div className="flex">
            <div className="left">
              <div className="iconContainer">
                <FontAwesomeIcon icon={faMoneyBill} />
              </div>
              <div>Marketcap</div>
            </div>
            <div className="right">$7,132,960</div>
          </div>
          <div className="flex">
            <div className="left">
              <div className="iconContainer">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>Holders</div>
            </div>
            <div className="right">4,343</div>
          </div>
        </div>
      </StyledArticle>
      <StyledArticle>
        <h4>
          Audit by solidity.finance
          <small>100% Passed</small>
        </h4>
        <p>
          <i>
            "Eclipse is a new competitor in the meme-coin space that has gained a large community following in a short timeframe.
            <br/><br/>
            No security issues were identified in our analysis."
          </i>
          <div className="bolder">- solidity.finance</div>
        </p>
        <a href="#">
          <StyledButton>
            Read full analysis
          </StyledButton>
        </a>
      </StyledArticle>
      <div>5</div>
      <div>6</div>
    </StyledContentContainer>
  )
}
