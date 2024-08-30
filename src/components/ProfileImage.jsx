import React from "react";
import styled from "styled-components";

const ProfileImageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "100px")};
  aspect-ratio: 1/1;
  font-size: 3rem;
  border-radius: 100%;
  background-color: var(--gray3-color);
`;

const ProfileImage = () => {
  return <ProfileImageStyle>😋</ProfileImageStyle>;
};

export default ProfileImage;
