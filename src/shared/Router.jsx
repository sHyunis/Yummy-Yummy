import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DetailPage from "../pages/detail/DetailPage";
import MyPage from "../pages/mypage/MyPage";
import WritePage from "../pages/write/WritePage";
import SignUpPage from "../pages/sign/signup/SignUpPage";
import SignInPage from "../pages/sign/signin/SignInPage";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";
import EditPage from "../pages/edit/EditPage";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/mypage" element={<ProtectedRoute element={<MyPage />} />} />
            <Route path="/write" element={<ProtectedRoute element={<WritePage />} />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/edit/:id" element={<ProtectedRoute element={<EditPage />} />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
