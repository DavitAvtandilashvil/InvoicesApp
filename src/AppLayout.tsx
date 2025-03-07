import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const MainContent = styled.main`
  width: 100%;
`;
