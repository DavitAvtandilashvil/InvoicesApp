import styled from "styled-components";
import emptyInvoice from "/emptyInvoice.png";

export default function EmptyInvoices() {
  return (
    <StyledEmptyInvoices>
      <img src={emptyInvoice} alt="empty-invoice" />
      <h2>There is nothing here</h2>
      <p>Create an invoice by clicking the New button and get started</p>
    </StyledEmptyInvoices>
  );
}

const StyledEmptyInvoices = styled.div`
  margin-top: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 193px;
    height: 160px;
    object-fit: cover;
    margin: auto;

    @media screen and (min-width: 768px) {
      width: 241px;
      height: 200px;
    }
  }

  & > h2 {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.75px;
    color: ${({ theme }) => theme.txtColor};
    margin-top: 42px;

    @media screen and (min-width: 768px) {
      margin-top: 66px;
    }
  }

  & > p {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    text-align: center;
    color: ${({ theme }) => theme.txtSecondary};
    padding-top: 23px;
    width: 176px;
    margin: auto;
    text-align: center;
  }
`;
