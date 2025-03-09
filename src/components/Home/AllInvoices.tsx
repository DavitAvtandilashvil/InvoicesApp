import styled from "styled-components";
import OneInvoice from "./OneInvoice";
import { useAllInvoice } from "../../hooks/useAllInvoice";
import Loader from "../../ui/Loader";

export default function AllInvoices() {
  const { allInvoices, loading } = useAllInvoice();

  if (loading) return <Loader />;

  return (
    <StyledAllInvoices>
      {allInvoices?.map((item) => {
        return <OneInvoice key={item.id} invoiceData={item} />;
      })}
    </StyledAllInvoices>
  );
}

const StyledAllInvoices = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 55px;
  }
`;
