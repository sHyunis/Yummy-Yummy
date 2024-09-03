import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import { useAuth } from "../contexts/AuthContext";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: var(--yellow-color);
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const HeaderLeft = styled.div`
  display: block;
`;
const LogoStyled = styled(Link)`
  display: block;
  height: 40px;
`;
const HeaderRight = styled.div`
  display: block;
  margin-right: calc(var(--spacing-lg) * -1);
`;
const NavLink = styled(Link)`
  padding: var(--spacing);
  margin: 0 var(--spacing);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  &:hover {
    color: var(--gray2-color);
  }
`;

const Contents = styled.main`
  position: relative;
  flex: 1 0 auto;
  padding: 50px 0;
  ${(props) => (props.$isMyPage ? "display:flex;" : "")};
`;

const LogoutButton = styled.button`
  border: none;
  background-color: inherit;
  padding: var(--spacing);
  margin: 0 var(--spacing);
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  &:hover {
    color: var(--gray2-color);
  }
`;
const FooterStyled = styled.footer`
  padding: 20px 0;
  font-size: 1.2rem;
  text-align: center;
  border-top: 1px solid var(--gray3-color);
`;

export const Header = () => {
  const { handleLogout, session } = useAuth();
  const navigate = useNavigate();
  const LogoutSuccess = async () => {
    await handleLogout();
    navigate("/");
  };

  return (
    <HeaderStyled>
      <HeaderContainer className="container">
        <HeaderLeft>
          <LogoStyled to="/" title="홈으로 이동">
            <Logo color="#fff" />
          </LogoStyled>
        </HeaderLeft>
        <HeaderRight>
          {session ? (
            <>
              <NavLink to="/write">레시피 쓰러가기</NavLink>
              <LogoutButton onClick={LogoutSuccess}>로그아웃</LogoutButton>
              <NavLink to="/mypage?views=profile">마이페이지</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/sign-in">로그인</NavLink>
              <NavLink to="/sign-up">회원가입</NavLink>
            </>
          )}
        </HeaderRight>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <p>ⓒ 2024. Yummy Yummy All rights reserved.</p>
      </div>
    </FooterStyled>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isMyPage = location.pathname === "/mypage";

  return (
    <>
      <Header />
      <Contents $isMyPage={isMyPage}>{children}</Contents>
      <Footer />
    </>
  );
};

export default Layout;
