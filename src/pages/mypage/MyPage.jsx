// import { useEffect } from "react";
// import { useAuth } from "../../contexts/AuthContext";
// import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import MyPageLayout from "./MyPageLayout";
import MyPageProfile from "./MyPageProfile";
import MyPagePost from "./MyPagePost";
import MyPageComment from "./MyPageComment";

const MyPage = () => {
  // const { signIn } = useAuth();
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const views = searchParams.get("views");

  // useEffect(() => {
  //   if (!signIn) {
  //     alert("로그인이 필요합니다.");
  //     navigate("/sign-in");
  //   }
  // }, [signIn, navigate]);

  const renderContent = () => {
    switch (views) {
      case "post":
        return <MyPagePost />;
      case "comment":
        return <MyPageComment />;
      default:
        return <MyPageProfile />;
    }
  };

  return <MyPageLayout>{renderContent()}</MyPageLayout>;
};

export default MyPage;
