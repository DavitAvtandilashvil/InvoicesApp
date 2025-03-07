import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import AllInvoices from "../components/Home/AllInvoices";

export default function Home() {
  return (
    <StyledHome>
      <HomeHeader />
      <AllInvoices />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding: 36px 24px;

  @media screen and (min-width: 768px) {
    padding: 61px 0px 0px 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 77px 0px 0px 0px;
  }
`;
