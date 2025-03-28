import styled, { keyframes } from "styled-components";

export default function SingleInvoiceSkl() {
  return (
    <StyledSingleInvoiceSkl>
      <PaymentStatus></PaymentStatus>
      <Info></Info>
    </StyledSingleInvoiceSkl>
  );
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const StyledSingleInvoiceSkl = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaymentStatus = styled.div`
  background-color: #e0e0e0;
  width: 327px;
  height: 91px;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  border-radius: 8px;
  animation: ${pulse} 1.5s infinite ease-in-out;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 688px;
    height: 88px;
  }
`;

const Info = styled.div`
  background-color: #e0e0e0;
  width: 327px;
  height: 695px;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  border-radius: 8px;
  animation: ${pulse} 1.5s infinite ease-in-out;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 688px;
    height: 602px;
  }
`;
