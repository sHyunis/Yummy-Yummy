import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";

const SocialSign = () => {
  const { signInWithKakao, signInWithGithub, signInWithGoogle } = useAuth();

  const Social = [
    {
      src: "/public/images/kakao-logo.png",
      alt: "kakao-logo",
      onClick: signInWithKakao
    },
    {
      src: "/public/images/github-logo.png",
      alt: "github-logo",
      onClick: signInWithGithub
    },
    {
      src: "/public/images/google-logo.png",
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
