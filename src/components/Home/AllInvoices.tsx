import styled from "styled-components";
import OneInvoice from "./OneInvoice";

export default function AllInvoices() {
  return (
    <StyledAllInvoices>
      <OneInvoice />
      <OneInvoice />
      <OneInvoice />
      <OneInvoice />
      <OneInvoice />
    </StyledAllInvoices>
  );
}

const StyledAllInvoices = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 55px;
  }
`;
