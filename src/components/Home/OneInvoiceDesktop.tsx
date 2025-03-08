import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function OneInvoiceDesktop() {
  return (
    <StyledOneInvoice>
      <IdContainer>
        <FaHashtag color="#7E88C3" />
        <p>XM9141</p>
      </IdContainer>
      <Date>Due 19 Aug 2021</Date>
      <Name>Jensen Huang</Name>
      <Price>£ 1,800.90</Price>
      <PaymentStatus>
        <div></div>
        <p>Paid</p>
      </PaymentStatus>
      <ArrowRight>
        <FaChevronRight size={12} color="#7C5DFA" />
      </ArrowRight>
    </StyledOneInvoice>
  );
}

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

  @media screen and (min-width: 1440px) {
    width: 730px;
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

const Date = styled.p`
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

const PaymentStatus = styled.div`
  width: 104px;
  height: 40px;
  background-color: #33d69f0f;
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

const ArrowRight = styled.div``;
