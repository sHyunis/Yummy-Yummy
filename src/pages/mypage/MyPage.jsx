import React from "react";
import MyPageLayout from "./MyPageLayout";
import { useSearchParams } from "react-router-dom";
import MyPageProfile from "./MyPageProfile";
import MyPagePost from "./MyPagePost";
import MyPageComment from "./MyPageComment";

const MyPage = () => {
  const [searchParams] = useSearchParams();
  const views = searchParams.get("views");

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
