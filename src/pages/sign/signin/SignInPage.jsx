import React from "react";
import styled from "styled-components";
import SignButton from "../SignButton";
import SignInput from "../SignInput";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const SignInPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
    error,
    success,
  } = useAuth();

  return (
    <Container>
      <LoginWrap>
        <LogoBox>
          <Logo />
        </LogoBox>
        <LoginP>LOGIN</LoginP>
        <InputBox>
          <SignInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SignInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <ButtonBox>
          <SignButton
            backgroundColor="--green-color"
            textColor="white"
            onClick={handleSignIn}
          >
            로그인
          </SignButton>
          <Link to="/sign-up">
            <SignButton backgroundColor="--beige-color" textColor="black">
              회원가입
            </SignButton>
          </Link>
        </ButtonBox>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <p>SNS계정으로 간편로그인</p>
      </LoginWrap>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
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

const LoginP = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

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
  gap: 1rem;
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
