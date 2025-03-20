import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";
import { Invoice } from "../../types/types";
import { formatDate } from "../../services/Date";

interface OneInvoiceMobileProps {
  invoiceData: Invoice;
}

export default function OneInvoiceMobile({
  invoiceData,
}: OneInvoiceMobileProps) {
  return (
    <StyledOneInvoice>
      <IdAndName>
        <IdContainer>
          <FaHashtag color="#7E88C3" size={12} />
          <p>{invoiceData.invoiceId}</p>
        </IdContainer>
        <p>{invoiceData.billTo.clientName}</p>
      </IdAndName>

      <DateAndPaymentContainer>
        <DateAndPayment>
          <p>Due {formatDate(invoiceData.invoiceDate)}</p>
          <h2>£ {invoiceData.price}</h2>
        </DateAndPayment>
        <PaymentStatus status={invoiceData.paymentStatus}>
          <div></div>
          <p>{invoiceData.paymentStatus}</p>
        </PaymentStatus>
      </DateAndPaymentContainer>
    </StyledOneInvoice>
  );
}

const statusColors = {
  Paid: { bg: "#33d69f0f", text: "#33d69f", dot: "#33d69f" },
  Pending: { bg: "#FF8F000F", text: "#FF8F00", dot: "#FF8F00" },
  Draft: { bg: "#373B530F", text: "#373B53", dot: "#373B53" },
};

const StyledOneInvoice = styled.div`
  width: 327px;
  height: 134px;
  margin: auto;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px #48549f1a;
  padding: 25px 24px 22px 24px;
`;

const IdAndName = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.nameTxt};
  }
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    color: ${({ theme }) => theme.txtColor};
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 3px;
  }
`;

const DateAndPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const DateAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.dateTxt};
  }

  & > h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const PaymentStatus = styled.div<{
  status: keyof typeof statusColors;
}>`
  width: 104px;
  height: 40px;
  background-color: ${({ status, theme }) =>
    status === "Draft" ? theme.draftBg : statusColors[status].bg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;

  & > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status, theme }) =>
      status === "Draft" ? theme.draftTxt : statusColors[status].dot};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ status, theme }) =>
      status === "Draft" ? theme.draftTxt : statusColors[status].text};
  }
`;
