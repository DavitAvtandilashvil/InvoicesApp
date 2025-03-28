import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import AllInvoices from "../components/Home/AllInvoices";
import EmptyInvoices from "../components/Home/EmptyInvoices";
import useInvoice from "../context/useInvoice";

export default function Home() {
  const { allInvoices, allInvoiceLoader } = useInvoice();
  return (
    <StyledHome>
      <HomeHeader />
      {allInvoices?.length === 0 && allInvoiceLoader === false ? (
        <EmptyInvoices />
      ) : (
        <AllInvoices />
      )}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding: 36px 24px;

  @media screen and (min-width: 768px) {
    padding: 61px 0px 0px 0px;
    width: 672px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    padding: 77px 0px 0px 0px;
    width: 730px;
    margin: auto;
  }
`;
