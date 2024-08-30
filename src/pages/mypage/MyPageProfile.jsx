import ButtonGroup from "./ButtonGroup";
import MyPageTitle from "./MyPageTitle";
import Input from "./Input";
import Button from "../../components/Button";
import ProfileImage from "../../components/ProfileImage";

const MyPageProfile = () => {

  return (
    <>
      <MyPageTitle>프로필 수정</MyPageTitle>
      <Input type="password" placeholder="비밀번호 확인이 필요합니다." />
      <ButtonGroup>
        <Button height="50px">확인</Button>
      </ButtonGroup>

      <div>
        <ProfileImage></ProfileImage>

      </div>
    </>
  );
};

export default MyPageProfile;
