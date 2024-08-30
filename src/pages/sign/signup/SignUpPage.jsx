import React from "react";
import styled from "styled-components";
import SignInput from "../SignInput";
import SignButton from "../SignButton";
import Logo from "../../../components/Logo";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    nickname,
    setNickname,
    error,
    success,
    handleSignUp,
  } = useAuth();

  const navigate = useNavigate();

  const signUpSuccess = async () => {
    await handleSignUp();
    // 회원가입 후 홈으로 이동
    navigate("/");
  };
  return (
    <>
      <Container>
        <LogoBox>
          <Logo />
        </LogoBox>
        <SignUp>
          <SignP>간편가입</SignP>
          <InputBox>
            <InputLabel>이메일</InputLabel>
            <SignInput
              type="email"
              placeholder="이메일 입력"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputLabel>비밀번호</InputLabel>
            <SignInput
              type="password"
              placeholder="비밀번호 입력"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <InputLabel>비밀번호 재입력</InputLabel>
            <SignInput
              type="password"
              placeholder="비밀번호 재입력"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <InputLabel>닉네임</InputLabel>
            <SignInput
              type="text"
              placeholder="닉네임 입력"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
          </InputBox>
          <ButtonBox>
            <SignButton
              backgroundColor="--green-color"
              textColor="white"
              onClick={signUpSuccess}
            >
              가입완료
            </SignButton>
            <SignButton backgroundColor="--beige-color" textColor="black">
              취소
            </SignButton>
          </ButtonBox>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
        </SignUp>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
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

const SignP = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

const LogoBox = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
`;

export default SignUpPage;
