import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Invoice } from "../../types/types";
import { formatDate } from "../../services/Date";

interface OneInvoiceDesktopProps {
  invoiceData: Invoice;
}

export default function OneInvoiceDesktop({
  invoiceData,
}: OneInvoiceDesktopProps) {
  return (
    <StyledOneInvoice>
      <IdContainer>
        <FaHashtag color="#7E88C3" size={12} />
        <InvoiceId>{invoiceData.invoiceId}</InvoiceId>
      </IdContainer>
      <InvoiceDate>Due {formatDate(invoiceData.invoiceDate)}</InvoiceDate>
      <Name>{invoiceData.billTo.clientName}</Name>
      <Price>£ {invoiceData.price}</Price>
      <PaymentStatus status={invoiceData.paymentStatus}>
        <div></div>
        <PaymentStatusText status={invoiceData.paymentStatus}>
          {invoiceData.paymentStatus}
        </PaymentStatusText>
      </PaymentStatus>
      <ArrowRight>
        <FaChevronRight size={12} color="#7C5DFA" />
      </ArrowRight>
    </StyledOneInvoice>
  );
}

const statusColors = {
  Paid: { bg: "#33d69f0f", text: "#33d69f", dot: "#33d69f" },
  Pending: { bg: "#FF8F000F", text: "#FF8F00", dot: "#FF8F00" },
  Draft: { bg: "#373B530F", text: "#373B53", dot: "#373B53" },
};

const StyledOneInvoice = styled.div`
  width: 672px;
  height: 72px;
  margin: auto;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    width: 730px;
  }
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InvoiceId = styled.p`
  color: ${({ theme }) => theme.txtColor};
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-top: 3px;
`;

const InvoiceDate = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.nameTxt};
  margin-left: 28px;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.nameTxt};
  margin-left: 51px;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.txtColor};
  margin-left: auto;
  margin-right: 40px;
`;

const PaymentStatus = styled.div<{ status: keyof typeof statusColors }>`
  width: 104px;
  height: 40px;
  background-color: ${({ status, theme }) =>
    status === "Draft" ? theme.draftBg : statusColors[status].bg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  margin-right: 20px;

  & > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status, theme }) =>
      status === "Draft" ? theme.draftTxt : statusColors[status].dot};
  }
`;

const PaymentStatusText = styled.p<{ status: keyof typeof statusColors }>`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ status, theme }) =>
    status === "Draft" ? theme.draftTxt : statusColors[status].text};
  margin-top: 3px;
`;

const ArrowRight = styled.div``;
