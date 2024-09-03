import React from "react";
import styled from "styled-components";
import supabase from "../../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import defaultProfile from "../assets/images/default-profile.jpg";

const ProfileImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "100px")};
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: var(--gray3-color);
  background-image: url(${defaultProfile});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;
const ProfileImageStyle = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ProfileImage = ({ src, width }) => {
  const [profileImage, setProfileImage] = useState();

  const checkProfileImage = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data, error } = await supabase.from("user_info").select("USER_IMG_URL").eq("id", user.id).single();
    if (error) {
      console.error("Error:", error);
      return;
    }

    if (data) {
      setProfileImage(data.USER_IMG_URL);
    }
  };

  useEffect(() => {
    if (!profileImage) {
      checkProfileImage();
    }
  }, [profileImage]);

  return (
    <ProfileImageWrap width={width}>
      <ProfileImageStyle style={{ backgroundImage: `url(${src || profileImage})` }}>
        <div className="sr-only">프로필 이미지</div>
      </ProfileImageStyle>
    </ProfileImageWrap>
  );
};

export default ProfileImage;
