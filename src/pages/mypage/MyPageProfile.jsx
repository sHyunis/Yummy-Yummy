import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import supabase from "../../../supabaseClient";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProfileImage from "../../components/ProfileImage";
import ButtonGroup from "./ButtonGroup";
import Textarea from "./Textarea";

const ProfileImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-lg);
  > .input-wrap {
    width: calc(100% - 100px - var(--spacing-lg));
  }
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding-top: var(--spacing-lg);
`;

const MyPageProfile = () => {
  const [nickname, setNickname] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState("");
  const fileInputRef = useRef(null);

  // 파일 확장자 가져오는 함수
  function getFileExtension(fileName) {
    return fileName.split(".").pop();
  }

  // 기존 닉네임
  const userNickname = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase.from("user_info").select("NICKNAME").eq("id", user.id).single();

    if (user && data) {
      setNickname(data.NICKNAME);
    }
  };

  // 기존 소개글
  const userIntroduction = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase.from("user_info").select("INTRODUCTION").eq("id", user.id).single();

    if (user && data) {
      setIntroduction(data.INTRODUCTION);
    }
  };

  useEffect(() => {
    userNickname();
    userIntroduction();
  }, []);

  // 미리보기 이미지
  const handleChangeImageUrl = (e) => {
    const [file] = e.target.files;
    // 미리보기 렌더 이미지
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      // 파일정보 imageFile에 저장
      setImageFile(file);
    }
  };

  // 닉네임 수정
  const handleChangeNickname = (e) => {
    const { value } = e.target;
    setNickname(value);
  };

  // 소개글 수정
  const handleChangeIntroduction = (e) => {
    const { value } = e.target;
    setIntroduction(value);
  };

  // 프로필 수정
  const handleSaveProfile = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    // 이미지 파일 supabase에 업로드, 업데이트
    if (imageFile) {
      // 업로드
      const extension = getFileExtension(imageFile.name);
      const { data: uploadData } = await supabase.storage
        .from("avatars")
        .upload(`avatar_${Date.now()}.${extension}`, imageFile);

      const imageUpload = `https://bgazafwsoohqylvwugug.supabase.co/storage/v1/object/public/avatars/${uploadData.path}`;

      //업데이트
      const { error: updateImageError } = await supabase
        .from("user_info")
        .update({ USER_IMG_URL: imageUpload })
        .eq("id", user.id);

      if (updateImageError) {
        console.error("Error:", updateImageError);
        return;
      }
    }

    // 닉네임 supabase에 업데이트
    if (nickname) {
      const { error: nicknameError } = await supabase
        .from("user_info")
        .update({ NICKNAME: nickname })
        .eq("id", user.id);

      if (nicknameError) {
        console.error("Error:", nicknameError);
      }
    }

    // 소개글 supabase에 업데이트
    if (introduction) {
      const { error: introductionError } = await supabase
        .from("user_info")
        .update({ INTRODUCTION: introduction })
        .eq("id", user.id);

      if (introductionError) {
        console.error("Error:", introductionError);
      }
    }

    // 새로고침
    window.location.reload();
  };

  return (
    <>
      <Title>프로필 수정</Title>
      <ProfileImageWrap>
        <ProfileImage src={imagePreview} />
        <Input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hint="1:1 비율의 이미지를 올려주세요."
          className="input-wrap"
          onChange={handleChangeImageUrl}
        />
      </ProfileImageWrap>
      <InputWrap>
        <Input value={nickname} placeholder="닉네임을 입력해주세요." onChange={handleChangeNickname} />
        <Textarea value={introduction} placeholder="소개글을 입력해주세요." onChange={handleChangeIntroduction} />
      </InputWrap>
      <ButtonGroup>
        <Button height="50px" onClick={handleSaveProfile}>
          확인
        </Button>
      </ButtonGroup>
    </>
  );
};

export default MyPageProfile;
