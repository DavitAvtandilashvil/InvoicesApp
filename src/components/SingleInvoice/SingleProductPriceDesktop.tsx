import styled from "styled-components";
import { Items } from "../../types/types";

interface SingleProductPriceDesktopProps {
  item: Items;
}

export default function SingleProductPriceDesktop({
  item,
}: SingleProductPriceDesktopProps) {
  return (
    <StyledSingleProductPriceDesktop>
      <Item>{item.itemName}</Item>
      <Quantity>{item.quantity}</Quantity>
      <Price>£ {item.price}</Price>
      <Total>£ {item.price}</Total>
    </StyledSingleProductPriceDesktop>
  );
}

const StyledSingleProductPriceDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }

  h2 {
    font-family: League Spartan;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const Item = styled.h2`
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

const Total = styled.h2`
  width: 20%;
  text-align: right;
`;
