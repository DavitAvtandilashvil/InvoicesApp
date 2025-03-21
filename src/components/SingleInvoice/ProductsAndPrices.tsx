import React from "react";
import styled from "styled-components";
import SingleProductPriceMobile from "./SingleProductPriceMobile";
import SingleProductPriceDesktop from "./SingleProductPriceDesktop";
import ProductAndPriceUiDesktop from "./ProductAndPriceUiDesktop";
import { Items } from "../../types/types";

interface ProductsAndPricesProps {
  items: Items[];
}

export default function ProductsAndPrices({ items }: ProductsAndPricesProps) {
  return (
    <StyledProductsAndPrices>
      <ProductAndPriceUiDesktop />
      {items.map((item) => {
        return (
          <React.Fragment key={item.itemName}>
            <SingleProductPriceMobile item={item} />
            <SingleProductPriceDesktop item={item} />
          </React.Fragment>
        );
      })}
    </StyledProductsAndPrices>
  );
}

const StyledProductsAndPrices = styled.div`
  margin-top: 38px;
  width: 100%;
  background-color: ${({ theme }) => theme.editButtonBg};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 25px 24px 23px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 33px 32px 39px 32px;
    gap: 32px;
  }
`;
