import styled from "styled-components";
import OneInvoiceMobile from "./OneInvoiceMobile";
import OneInvoiceDesktop from "./OneInvoiceDesktop";
import { Invoice } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface OneInvoiceProps {
  invoiceData: Invoice;
}

export default function OneInvoice({ invoiceData }: OneInvoiceProps) {
  const navigate = useNavigate();

  return (
    <StyledOneInvoice onClick={() => navigate(`/invoice/${invoiceData.id}`)}>
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
