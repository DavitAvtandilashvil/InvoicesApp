import styled from "styled-components";

export default function SingleProductPriceDesktop() {
  return (
    <StyledSingleProductPriceDesktop>
      SingleProductPriceDesktop
    </StyledSingleProductPriceDesktop>
  );
}

const StyledSingleProductPriceDesktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
