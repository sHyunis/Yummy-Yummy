import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
<<<<<<< HEAD
import kakaoImg from "../../assets/imgs/kakao-logo.png";
import googleImg from "../../assets/imgs/google-logo.png";
import githubImg from "../../assets/imgs/github-logo.png";
=======
import kakaoLogo from "../../assets/images/kakao-logo.png";
import githubLogo from "../../assets/images/github-logo.png";
import googleLogo from "../../assets/images/google-logo.png";

>>>>>>> c083c4e130d55dd05255caa20200a9aaf037474d
const SocialSign = () => {
  const { signInWithKakao, signInWithGithub, signInWithGoogle } = useAuth();

  const Social = [
    {
<<<<<<< HEAD
      src: kakaoImg,
=======
      src: kakaoLogo,
>>>>>>> c083c4e130d55dd05255caa20200a9aaf037474d
      alt: "kakao-logo",
      onClick: signInWithKakao
    },
    {
<<<<<<< HEAD
      src: githubImg,
=======
      src: githubLogo,
>>>>>>> c083c4e130d55dd05255caa20200a9aaf037474d
      alt: "github-logo",
      onClick: signInWithGithub
    },
    {
<<<<<<< HEAD
      src: googleImg,
=======
      src: googleLogo,
>>>>>>> c083c4e130d55dd05255caa20200a9aaf037474d
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
