import styled from "styled-components";

export default function ProductAndPriceUiDesktop() {
  return (
    <StyledProductAndPriceUiDesktop>
      <NameDiv>
        <p>Item Name</p>
      </NameDiv>
      <PriceAndQuantityDiv>
        <p>QTY.</p>
        <h2>Price</h2>
        <h3>Total</h3>
      </PriceAndQuantityDiv>
    </StyledProductAndPriceUiDesktop>
  );
}

const StyledProductAndPriceUiDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p,
  h2,
  h3 {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const NameDiv = styled.div``;

const PriceAndQuantityDiv = styled.div`
  display: flex;
  align-items: center;

  & > h3 {
    margin-left: 111px;
  }

  & > h2 {
    margin-left: 91px;
  }
`;
