import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";

export default function OneInvoiceMobile() {
  return (
    <StyledOneInvoice>
      <IdAndName>
        <IdContainer>
          <FaHashtag color="#7E88C3" />
          <p>XM9141</p>
        </IdContainer>
        <p>Jensen Huang</p>
      </IdAndName>

      <DateAndPaymentContainer>
        <DateAndPayment>
          <p>Due 19 Aug 2021</p>
          <h2>£ 1,800.90</h2>
        </DateAndPayment>
        <PaymentStatus>
          <div></div>
          <p>Paid</p>
        </PaymentStatus>
      </DateAndPaymentContainer>
    </StyledOneInvoice>
  );
}

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
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;

  & > p {
    color: ${({ theme }) => theme.txtColor};
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

const PaymentStatus = styled.div`
  width: 104px;
  height: 40px;
  background-color: #33d69f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;

  & > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #33d69f;
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #33d69f;
  }
`;
