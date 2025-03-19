import styled from "styled-components";

export default function ProductAndPriceUiDesktop() {
  return (
    <StyledProductAndPriceUiDesktop>
      <Item>Item Name</Item>
      <Quantity>QTY.</Quantity>
      <Price>Price</Price>
      <Total>Total</Total>
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

  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const Item = styled.p`
  width: 40%;
`;

const Quantity = styled.p`
  width: 20%;
  text-align: right;
`;

const Price = styled.p`
  width: 20%;
  text-align: right;
`;

const Total = styled.p`
  width: 20%;
  text-align: right;
`;
