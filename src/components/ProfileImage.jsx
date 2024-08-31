import React from "react";
import styled from "styled-components";
import supabase from "../../base-camp/supabaseClient";
import { useState } from "react";
import { useEffect } from "react";

const ProfileImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "100px")};
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: var(--gray3-color);
  background-image: url(https://bgazafwsoohqylvwugug.supabase.co/storage/v1/object/public/avatars/default-profile.jpg?t=2024-08-31T13%3A21%3A52.366Z);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;
const ProfileImageStyle = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  text-indent: -9999px;
  color: transparent;
  background-color: transparent;
  object-fit: cover;
`;

const ProfileImage = ({ src }) => {
  const [profileImage, setProfileImage] = useState();

  const checkProfileImage = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("userinfo")
      .select("user_img_url")
      .eq("id", user.id)
      .single();
    if (error) {
      console.error("Error:", error);
      return;
    }

    if (data) {
      setProfileImage(data.user_img_url);
    }
  };

  useEffect(() => {
    checkProfileImage();
  }, []);

  return (
    <ProfileImageWrap>
      <ProfileImageStyle src={src || profileImage} alt="프로필 이미지" />
    </ProfileImageWrap>
  );
};

export default ProfileImage;
