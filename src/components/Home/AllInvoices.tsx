import styled from "styled-components";
import OneInvoice from "./OneInvoice";

export default function AllInvoices() {
  return (
    <StyledAllInvoices>
      <OneInvoice />
    </StyledAllInvoices>
  );
}

const StyledAllInvoices = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
