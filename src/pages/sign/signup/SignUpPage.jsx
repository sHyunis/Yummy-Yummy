import React from "react";
import styled from "styled-components";
// import SignButton from "../SignButton";
import Title from "../../../components/Title";
import Logo from "../../../components/Logo";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import LinkButton from "../../../components/LinkButton";
import { useAuth } from "../../../contexts/AuthContext";
// import { Link } from "react-router-dom";
import SocialSign from "../SocialSign";
import { useEffect } from "react";

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
    setSuccess,
    setError
  } = useAuth();

  useEffect(() => {
    setSuccess("");
    setError("");
  }, []);
  return (
    <>
      <Container className="container">
        <LogoBox>
          <Logo />
        </LogoBox>
        <SignUp>
          <Title size="small">간편가입</Title>
          <InputBox>
            <div>
              <InputLabel>이메일</InputLabel>
              <Input
                type="email"
                placeholder="이메일 입력"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="small"
              />
            </div>
            <div>
              <InputLabel>비밀번호</InputLabel>
              <Input
                type="password"
                placeholder="비밀번호 입력"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                size="small"
              />
            </div>
            <div>
              <InputLabel>비밀번호 재입력</InputLabel>
              <Input
                type="password"
                placeholder="비밀번호 재입력"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                size="small"
              />
            </div>
            <div>
              <InputLabel>닉네임</InputLabel>
              <Input
                type="text"
                placeholder="닉네임 입력"
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
                size="small"
              />
            </div>
          </InputBox>
          <ButtonBox>
            <Button height="40px" onClick={handleSignUp}>
              가입완료
            </Button>
            <LinkButton height="40px" color="beige" to="/">
              취소
            </LinkButton>
          </ButtonBox>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
        </SignUp>
        <SocialSign />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: calc(400px + var(--gutter) * 2) !important;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUp = styled.div`
  width: 100%;
  background-color: var(--gray4-color);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
`;

const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const InputLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

const InputBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonBox = styled.div`
  margin: var(--spacing-lg) auto 0;
  width: 100%;
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

export default SignUpPage;
