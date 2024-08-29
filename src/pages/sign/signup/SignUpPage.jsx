import React from "react";
import styled from "styled-components";
import SignInput from "../SignInput";
import SignButton from "../SignButton";
import { useState } from "react";
import supabase from "../../../../base-camp/supabaseClient";

const SignUpPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      id,
      pw,
    });

    if (error) {
      setError(error.message);
      setSuccess(null);
    } else {
      setSuccess("회원가입이 완료되었습니다.");
      setError(null);
    }
  };
  return (
    <Container>
      <Logo>Yummy Yummy!</Logo>
      <SignUp>
        <p>간편가입</p>
        <InputBox>
          <InputLabel>아이디</InputLabel>
          <SignInput
            type="id"
            placeholder="아이디 입력"
            onChange={(e) => setId(e.target.value)}
          />
          <InputLabel>비밀번호</InputLabel>
          <SignInput
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => setPw(e.target.value)}
          />
          <SignInput type="password" placeholder="비밀번호 재입력" />
          <InputLabel>닉네임</InputLabel>
          <SignInput type="text" placeholder="닉네임 입력" />
        </InputBox>
        <ButtonBox>
          <SignButton
            backgroundColor="--green-color"
            textColor="white"
            onClick={() => handleSignUp()}
          >
            가입완료
          </SignButton>
          <SignButton backgroundColor="--beige-color" textColor="black">
            취소
          </SignButton>
        </ButtonBox>
      </SignUp>
    </Container>
  );
};

const Container = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SignUp = styled.div`
  width: 350px;
  background-color: var(--gray4-color);
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  padding: 20px;
  border-radius: var(--border-radius);
`;
const Logo = styled.h2`
  font-size: 3rem;
  color: var(--yellow-color);
`;
const InputLabel = styled.label`
  text-align: left;
  font-size: 15px;
  font-weight: 700;
`;
const InputBox = styled.div`
  width: 350px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ButtonBox = styled.div`
  font-family: var(--font-family);
  margin: 0 auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default SignUpPage;
