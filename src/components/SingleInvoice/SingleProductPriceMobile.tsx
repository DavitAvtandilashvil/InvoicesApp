import styled from "styled-components";
import { Items } from "../../types/types";

interface SingleProductPriceMobileProps {
  item: Items;
}

export default function SingleProductPriceMobile({
  item,
}: SingleProductPriceMobileProps) {
  return (
    <StyledSingleProductPriceMobile>
      <TitleAndQuantityDiv>
        <h2>{item?.itemName}</h2>
        <p>
          {item?.quantity} x £ {item?.price}
        </p>
      </TitleAndQuantityDiv>
      <Price>£ {item?.total}</Price>
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
