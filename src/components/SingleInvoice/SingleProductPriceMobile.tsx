import styled from "styled-components";

export default function SingleProductPriceMobile() {
  return (
    <StyledSingleProductPriceMobile>
      <TitleAndQuantityDiv>
        <h2>Banner Design</h2>
        <p>1 x £ 156.00</p>
      </TitleAndQuantityDiv>
      <Price>£ 156.00</Price>
    </StyledSingleProductPriceMobile>
  );
}

const StyledSingleProductPriceMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const TitleAndQuantityDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.txtColor};
`;
