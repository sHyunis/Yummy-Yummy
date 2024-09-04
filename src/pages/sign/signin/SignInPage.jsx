import React from "react";
import styled from "styled-components";
// import SignButton from "../SignButton";
// import SignInput from "../SignInput";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import LinkButton from "../../../components/LinkButton";
import Logo from "../../../components/Logo";
// import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import SocialSign from "../SocialSign";
import { useEffect } from "react";

const SignInPage = () => {
  const { email, setEmail, password, setPassword, handleSignIn, error, success, setError, setSuccess } = useAuth();

  useEffect(() => {
    setError("");
    setSuccess("");
    setPassword("");
    setEmail();
  }, []);
  return (
    <Container>
      <LoginWrap>
        <LogoBox>
          <Logo />
        </LogoBox>
        <Title size="small">LOGIN</Title>
        <InputBox>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <ButtonBox>
          <Button height="40px" onClick={handleSignIn}>
            로그인
          </Button>
          <LinkButton to="/sign-up" height="40px" color="yellow">
            회원가입
          </LinkButton>
        </ButtonBox>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <p>SNS계정으로 간편로그인</p>
      </LoginWrap>
      <SocialSign />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  margin: 0px auto;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--beige-color);
  gap: 40px;
`;

const LoginWrap = styled.div`
  width: 350px;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const LogoBox = styled.div`
  width: 350px;
  height: 100px;
  margin-bottom: 40px;
`;

// const LoginP = styled.p`
//   font-weight: 700;
//   font-size: 1.5rem;
// `;

const InputBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonBox = styled.div`
  font-family: var(--font-family);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
`;

export default SignInPage;
