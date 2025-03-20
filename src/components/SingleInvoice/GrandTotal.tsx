import styled from "styled-components";

interface GrandTotalProps {
  grandTotal: number;
}

export default function GrandTotal({ grandTotal }: GrandTotalProps) {
  return (
    <StyledGrandTotal>
      <Title>Grand Total</Title>
      <Total>£ {grandTotal}</Total>
    </StyledGrandTotal>
  );
}

const StyledGrandTotal = styled.div`
  width: 100%;
  padding: 32px 24px 22px 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.grandTotal};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  color: #ffff;
`;

const Total = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #ffff;
`;
