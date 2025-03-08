import styled from "styled-components";
import OneInvoiceMobile from "./OneInvoiceMobile";
import OneInvoiceDesktop from "./OneInvoiceDesktop";

export default function OneInvoice() {
  return (
    <StyledOneInvoice>
      <StyledForMobile>
        <OneInvoiceMobile />
      </StyledForMobile>
      <StyledForDesktop>
        <OneInvoiceDesktop />
      </StyledForDesktop>
    </StyledOneInvoice>
  );
}

const StyledOneInvoice = styled.div``;

const StyledForMobile = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledForDesktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
