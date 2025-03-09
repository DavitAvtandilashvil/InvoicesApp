import styled from "styled-components";
import OneInvoiceMobile from "./OneInvoiceMobile";
import OneInvoiceDesktop from "./OneInvoiceDesktop";
import { AllInvoice } from "../../types/types";

interface OneInvoiceProps {
  invoiceData: AllInvoice;
}

export default function OneInvoice({ invoiceData }: OneInvoiceProps) {
  return (
    <StyledOneInvoice>
      <StyledForMobile>
        <OneInvoiceMobile invoiceData={invoiceData} />
      </StyledForMobile>
      <StyledForDesktop>
        <OneInvoiceDesktop invoiceData={invoiceData} />
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
