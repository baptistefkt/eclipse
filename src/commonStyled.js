import styled from 'styled-components'

export const StyledNotVisibleXS = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
`

export const StyledVisibleXS = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`

export const StyledButton = styled.button`
    height: 40px;
    border: 2px solid #a7a3ff;
    border-radius: 6px;
    background: #7872ff;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 16px;
    padding-right: 20px;
    box-shadow: 10px 10px 20px 0px #0b0d23;
    transition-duration: 0.2s;
    cursor: pointer;
`