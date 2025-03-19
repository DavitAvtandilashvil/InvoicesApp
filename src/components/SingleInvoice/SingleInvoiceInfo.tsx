import { FaHashtag } from "react-icons/fa";
import styled from "styled-components";
import ProductsAndPrices from "./ProductsAndPrices";

export default function SingleInvoiceInfo() {
  return (
    <StyledSingleInvoiceInfo>
      <IdAndAddress>
        <IdAndDescription>
          <IdContainer>
            <FaHashtag color="#7E88C3" size={12} />
            <p>XM9141</p>
          </IdContainer>
          <p>Graphic Design</p>
        </IdAndDescription>
        <AddressContainer>
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>United Kingdom</p>
        </AddressContainer>
      </IdAndAddress>

      <ClientInfoContainer>
        <DateAndBillContainer>
          <DateAndDueContainer>
            <InvoiceDataContainer>
              <h2>Invoice Date</h2>
              <p>21 Aug 2021</p>
            </InvoiceDataContainer>
            <PaymentDueContainer>
              <h2>Invoice Date</h2>
              <p>21 Aug 2021</p>
            </PaymentDueContainer>
          </DateAndDueContainer>
          <BillToContainer>
            <h2>Bill To</h2>
            <p>Alex Grim</p>
            <StreetDetails>
              <p>84 Church Way</p>
              <p>Bradford</p>
              <p>BD1 9PB</p>
              <p>United Kingdom</p>
            </StreetDetails>
          </BillToContainer>
        </DateAndBillContainer>
        <SentToContainer>
          <h2>Sent to</h2>
          <p>alexgrim@mail.com</p>
        </SentToContainer>
      </ClientInfoContainer>

      <ProductsAndPrices />
    </StyledSingleInvoiceInfo>
  );
}

const StyledSingleInvoiceInfo = styled.div`
  margin-top: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.oneInvoiceBg};
  box-shadow: 0px 10px 10px -10px #48549f1a;
  border-radius: 8px;
  padding: 25px 24px 24px 24px;

  @media screen and (min-width: 768px) {
    padding: 33px 32px 32px 32px;
  }
`;

const IdAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`;

const IdAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 3px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const AddressContainer = styled.div`
  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const ClientInfoContainer = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 117px;
  }
`;

const DateAndBillContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 118px;
  }
`;

const DateAndDueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

const InvoiceDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const PaymentDueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const BillToContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  & > h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;

const StreetDetails = styled.div`
  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }
`;

const SentToContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  & > h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.editButtonTxt};
  }

  & > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.txtColor};
  }
`;
