import styled from "styled-components";
import { FaCircle, FaSun, FaMoon } from "react-icons/fa";
import useInvoice from "../context/useInvoice";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useInvoice();
  return (
    <StyledHeader>
      <Logo>
        <OvalIcon color="#fff"></OvalIcon>
      </Logo>
      <ProfileContainer>
        {!isDarkMode ? (
          <FaMoon
            color="#7E88C3"
            size={20}
            onClick={() => setIsDarkMode(true)}
          />
        ) : (
          <FaSun
            color="#7E88C3"
            size={20}
            onClick={() => setIsDarkMode(false)}
          />
        )}
        <Line></Line>
        <Profile>
          <p>d</p>
        </Profile>
      </ProfileContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 72px;
  height: 72px;
  background-color: #7c5dfa;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OvalIcon = styled(FaCircle)`
  width: 28px;
  height: 28px;
`;

const ProfileContainer = styled.div`
  padding-right: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Line = styled.div`
  height: 72px;
  border: 1px solid #494e6e;
  width: 1px;
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: #fff;
    font-size: 20px;
  }
`;
