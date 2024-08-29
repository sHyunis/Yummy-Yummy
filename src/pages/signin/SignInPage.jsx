import React from "react";
import styled from "styled-components";
import SignButton from "./SignButton";
import SignInput from "./SignInput";

const SignInPage = () => {
  return (
    <Container>
      <LoginWrap>
        <Logo>Yummy Yummy!</Logo>
        <p>로그인</p>
        <InputBox>
          <SignInput type="id" placeholder="아이디" />
          <SignInput type="password" placeholder="비밀번호" />
        </InputBox>
        <ButtonBox>
          <SignButton backgroundColor="--green-color" textColor="white">
            로그인
          </SignButton>
          <SignButton backgroundColor="--beige-color" textColor="black">
            회원가입
          </SignButton>
        </ButtonBox>
      </LoginWrap>
    </Container>
  );
};

const Container = styled.div`
  width: var(--container-width);

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrap = styled.div`
  width: 350px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;
const Logo = styled.h2`
  font-size: 3rem;
  color: var(--yellow-color);
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

export default SignInPage;
