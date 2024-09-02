import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import Button from "../../components/Button";
import ProfileImage from "../../components/ProfileImage";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Textarea from "./Textarea";
import MyPageTitle from "./MyPageTitle";

const ProfileImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-lg);
  > .input-wrap {
    width: calc(100% - 100px - var(--spacing-lg));
  }
`;
const TextareaWrap = styled.div`
  padding-top: var(--spacing-lg);
`;

const MyPageProfile = () => {
  const [password, setPassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [introduction, setIntroduction] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState("");
  const fileInputRef = useRef(null);

  // 비밀번호 확인
  const handleConfirmPassword = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.auth.signInWithPassword({
      email: user.email, // 현재 로그인된 사용자의 이메일을 사용
      password,
    });

    if (error) {
      setPasswordErrorText("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordErrorText("");
      setIsPasswordConfirm(true);
    }
  };

  // 파일 확장자 가져오는 함수
  function getFileExtension(fileName) {
    return fileName.split(".").pop();
  }

  // 기존 유저 소개글
  const userIntroduction = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("user_info")
      .select("introduction")
      .eq("id", user.id)
      .single();

    if (user && data) {
      setIntroduction(data.introduction);
    }
  };

  useEffect(() => {
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

  // 소개글 수정
  const handleChangeIntroduction = (e) => {
    const { value } = e.target;
    setIntroduction(value);
  };

  // 프로필 수정
  const handleSaveProfile = async () => {
    const {
      data: { user },
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
        .update({ user_img_url: imageUpload })
        .eq("id", user.id);

      if (updateImageError) {
        console.error("Error:", updateImageError);
      }
    }

    // 소개글 supabase에 업데이트
    if (introduction) {
      const { error: introductionError } = await supabase
        .from("user_info")
        .update({ introduction })
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
      <MyPageTitle>프로필 수정</MyPageTitle>

      {isPasswordConfirm ? (
        <>
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
          <TextareaWrap>
            <Textarea
              value={introduction}
              placeholder="소개글을 입력해주세요."
              onChange={handleChangeIntroduction}
            />
          </TextareaWrap>
          <ButtonGroup>
            <Button height="50px" onClick={handleSaveProfile}>
              확인
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Input
            type="password"
            placeholder="비밀번호 확인이 필요합니다."
            hint={passwordErrorText}
            hintColor="red"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonGroup>
            <Button height="50px" onClick={handleConfirmPassword}>
              확인
            </Button>
          </ButtonGroup>
        </>
      )}
    </>
  );
};

export default MyPageProfile;
