import styled from "styled-components";
import { FaCircle, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";
import useInvoice from "../context/useInvoice";
import { useUserInfo } from "../hooks/useUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const { isDarkMode, setIsDarkMode } = useInvoice();
  const { user } = useUserInfo();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <HeaderContainer>
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
                cursor="pointer"
              />
            ) : (
              <FaSun
                color="#7E88C3"
                size={20}
                onClick={() => setIsDarkMode(false)}
                cursor="pointer"
              />
            )}
            <Line></Line>
            <Profile onClick={() => setOpenProfileModal((isOpen) => !isOpen)}>
              <p>{user?.name[0].toUpperCase()}</p>
            </Profile>
            {openProfileModal && (
              <ProfileModal>
                <LogOutDiv onClick={handleLogOut}>
                  <FaSignOutAlt color="red" />
                  <p>Log Out</p>
                </LogOutDiv>
              </ProfileModal>
            )}
          </ProfileContainer>
        </StyledHeader>
      </HeaderContainer>
      <HeaderSpace></HeaderSpace>
    </>
  );
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.headerBg};
  position: fixed;
  width: 100%;
  z-index: 99;

  @media screen and (min-width: 1440px) {
    width: auto;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 103px;
    height: 100vh;
    background-color: ${({ theme }) => theme.headerBg};

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
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

  @media screen and (min-width: 1440px) {
    width: 103px;
    height: 103px;
  }
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
  position: relative;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    padding-bottom: 24px;
    padding-right: 0px;
    width: 100%;
  }
`;

const Line = styled.div`
  height: 72px;
  border: 1px solid #494e6e;
  width: 1px;

  @media screen and (min-width: 1440px) {
    height: 1px;
    width: 100%;
  }
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > p {
    color: #fff;
    font-size: 20px;
    padding-top: 2px;
  }
`;

const ProfileModal = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 180px;
  padding: 15px;
  border-radius: 10px;
  background-color: #301515;

  @media screen and (min-width: 1440px) {
    left: 100px;
    bottom: 100px;
    height: 50px;
  }
`;

const LogOutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: red;
  cursor: pointer;
`;

const HeaderSpace = styled.div`
  height: 80px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
