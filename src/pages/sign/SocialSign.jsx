import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import kakaoImg from "../../assets/imgs/kakao-logo.png";
import googleImg from "../../assets/imgs/google-logo.png";
import githubImg from "../../assets/imgs/github-logo.png";
const SocialSign = () => {
  const { signInWithKakao, signInWithGithub, signInWithGoogle } = useAuth();

  const Social = [
    {
      src: kakaoImg,
      alt: "kakao-logo",
      onClick: signInWithKakao
    },
    {
      src: githubImg,
      alt: "github-logo",
      onClick: signInWithGithub
    },
    {
      src: googleImg,
      alt: "google-logo",
      onClick: signInWithGoogle
    }
  ];
  return (
    <SocialWrap>
      {Social.map((app, index) => {
        return (
          <SocialLogoBox key={index}>
            <SocialLogoImg src={app.src} alt={app.alt} onClick={app.onClick} />
          </SocialLogoBox>
        );
      })}
    </SocialWrap>
  );
};

export default SocialSign;

const SocialWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;
const SocialLogoBox = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const SocialLogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
