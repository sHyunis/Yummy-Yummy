import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
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
  height: 50px;
`;
const HeaderRight = styled.div`
  display: block;
  margin-right: calc(var(--spacing-lg) * -1);
`;
const NavLink = styled(Link)`
  padding: var(--spacing);
  margin: 0 var(--spacing);
  font-size: 1.8rem;
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
`;

const FooterStyled = styled.footer`
  padding: 40px 0;
  font-size: 1.2rem;
  text-align: center;
  border-top: 1px solid var(--gray3-color);
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer className="container">
        <HeaderLeft>
          <LogoStyled to="/" title="홈으로 이동">
            <Logo color="#fff" />
          </LogoStyled>
        </HeaderLeft>
        <HeaderRight>
          {/* <NavLink to="/sign-in">로그인</NavLink>
          <NavLink to="/sign-up">회원가입</NavLink> */}
          <NavLink to="/">로그아웃</NavLink>
          <NavLink to="/mypage">마이페이지</NavLink>
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
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </>
  );
};

export default Layout;
