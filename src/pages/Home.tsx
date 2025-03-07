import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

export default function Home() {
  return (
    <StyledHome>
      <HomeHeader />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  padding: 36px 24px;
`;
