import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detail/DetailPage";
import MyPage from "../pages/mypage/MyPage";
import WritePage from "../pages/write/WritePage";
import SignUpPage from "../pages/sign/signup/SignUpPage";
import SignInPage from "../pages/sign/signin/SignInPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
