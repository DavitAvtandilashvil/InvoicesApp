import { FaHashtag } from "react-icons/fa";
import styled from "styled-components";
import ProductsAndPrices from "./ProductsAndPrices";
import GrandTotal from "./GrandTotal";
import useInvoice from "../../context/useInvoice";
import { calculatePaymentDue, formatDate } from "../../services/Date";
import { useEffect, useState } from "react";

export default function SingleInvoiceInfo() {
  const { singleInvoice } = useInvoice();
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    singleInvoice?.items.map((item) => {
      total = total + item.total;
    });
    setGrandTotal(total);
  }, [singleInvoice?.items]);

  if (!singleInvoice) return;

  return (
    <StyledSingleInvoiceInfo>
      <IdAndAddress>
        <IdAndDescription>
          <IdContainer>
            <FaHashtag color="#7E88C3" size={12} />
            <p>{singleInvoice?.invoiceId}</p>
          </IdContainer>
          <p>{singleInvoice?.projectDescription}</p>
        </IdAndDescription>
        <AddressContainer>
          <p>{singleInvoice?.billFrom.streetAddress}</p>
          <p>{singleInvoice?.billFrom.city}</p>
          <p>{singleInvoice?.billFrom.postCode}</p>
          <p>{singleInvoice?.billFrom.country}</p>
        </AddressContainer>
      </IdAndAddress>

      <ClientInfoContainer>
        <DateAndBillContainer>
          <DateAndDueContainer>
            <InvoiceDataContainer>
              <h2>Invoice Date</h2>
              <p>{formatDate(singleInvoice?.invoiceDate)}</p>
            </InvoiceDataContainer>
            <PaymentDueContainer>
              <h2>Payment Due</h2>
              <p>
                {calculatePaymentDue(
                  singleInvoice?.invoiceDate,
                  singleInvoice?.paymentTerms
                )}
              </p>
            </PaymentDueContainer>
          </DateAndDueContainer>
          <BillToContainer>
            <h2>Bill To</h2>
            <p>{singleInvoice?.billTo.clientName}</p>
            <StreetDetails>
              <p>{singleInvoice?.billTo.streetAddress}</p>
              <p>{singleInvoice?.billTo.city}</p>
              <p>{singleInvoice?.billTo.postCode}</p>
              <p>{singleInvoice?.billTo.country}</p>
            </StreetDetails>
          </BillToContainer>
        </DateAndBillContainer>
        <SentToContainer>
          <h2>Sent to</h2>
          <p>{singleInvoice?.billTo.clientEmail}</p>
        </SentToContainer>
      </ClientInfoContainer>

      <ProductsAndPrices items={singleInvoice?.items} />
      <GrandTotal grandTotal={grandTotal} />
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
