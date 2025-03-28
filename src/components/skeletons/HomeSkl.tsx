import styled, { keyframes } from "styled-components";

export default function HomeSkl() {
  return (
    <StyledHomeSkl>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
      <OneInvoice></OneInvoice>
    </StyledHomeSkl>
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

const StyledHomeSkl = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 55px;
  }
`;

const OneInvoice = styled.div`
  background-color: #e0e0e0;
  width: 327px;
  height: 134px;
  animation: ${pulse} 1.5s infinite ease-in-out;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0px 10px 10px -10px #48549f1a;

  @media screen and (min-width: 768px) {
    width: 672px;
    height: 72px;
  }
`;
