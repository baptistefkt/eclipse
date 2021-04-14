import React from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faRecycle, faFire, faMoneyBill, faUser, faCheck, faHourglass } from '@fortawesome/free-solid-svg-icons'
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
  max-height: 591px;
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
    display: block;
  }
`

const StyledBigArticle = styled(StyledArticle)`
  grid-column: 1/3;
  grid-row: 3/5;

  .flexContent {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .items {
    padding: 20px;
    text-align: center;
    background-color: transparent;
    background-image: linear-gradient(142deg, #212440, #292e634a);
    border-radius: 10px;
    margin: 0 15px;
    flex: 1;
    min-height: 366px;
    height: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: white;
  }
`

const StyledRoadMap = styled(StyledArticle)`
  grid-column: 3/4;
  grid-row: 3/5;

  .row {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 16px;
  }

  .icon {
    font-size: 9px;
    line-height: 14px;
    width: 17px;
    height: 17px;
    border-radius: 5px;
    text-align: center;
    color: white;
    margin-right: 10px;
  }

  .complete {
    background: #47ab5d;
    border: 2px solid #53ff79;
  }

  .pending {
    background: #d67b1e;
    border: 2px solid #ffae5b;
  }

  .notComplete {
    background: #34385f;
    border: 2px solid #484d82;
  }

  .text {
    color: white;
    font-size: 12px;
    font-weight: 600;

    span {
      color: #53ff79;
      font-size: 80%;
    }

    .orange {
      color: #ffae5b;
    }
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
          <span className="bolder">- solidity.finance</span>
        </p>
        <a href="#">
          <StyledButton>
            Read full analysis
          </StyledButton>
        </a>
      </StyledArticle>
      <StyledBigArticle>
        <h4>
          Points of interest
          <small>Reasons why to own Eclipse</small>
        </h4>
        <div className="flexContent">
          <div className="items">
            <img src="" alt=""/>
            <h3>Completely Secured</h3>
            <p>Audited smart contract, no big devs holdings (all burnt from start), Liquidity Pool locked for 5 years!</p>
          </div>
          <div className="items">
            <img src="" alt=""/>
            <h3>Rewarding for Holders</h3>
            <p>Keep holding your Eclipse tokens, and you will earn more. For each transaction, a 3% fee is sent back to our beloved holders.</p>
          </div>
          <div className="items">
            <img src="" alt=""/>
            <h3>Inventive Construction</h3>
            <p>With a combination of burning, automatic LP filling and rewarding of holders, Eclipse is set to rise!</p>
          </div>
        </div>
      </StyledBigArticle>
      <StyledRoadMap>
        <h4>
          Roadmap
          <small>Trace our work</small>
        </h4>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Presale live on DXSales <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Presale sold out <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Listing on PANCAKESWAP <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Marketing on Poocoin <span>Live now</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Reach 1000 holders <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Audit Eclipse Smart Contract <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon complete">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">Reach 3000 holders <span>Completed</span></div>
        </div>
        <div className="row">
          <div className="icon pending">
            <FontAwesomeIcon icon={faHourglass} />
          </div>
          <div className="text">Launch holder contest ($1000) <span className="orange">Contest live</span></div>
        </div>
        <div className="row">
          <div className="icon pending">
            <FontAwesomeIcon icon={faHourglass} />
          </div>
          <div className="text">Litepaper released <span className="orange">In progress</span></div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">Whitebit listing</div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">Reach 5000 holders</div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">Launch second holder contest ($2000)</div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">Whitepaper released</div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">CoinmarketCap & Coingecko Listing</div>
        </div>
        <div className="row">
          <div className="icon notComplete" />
          <div className="text">Listing on Exchange</div>
        </div>
      </StyledRoadMap>
    </StyledContentContainer>
  )
}
