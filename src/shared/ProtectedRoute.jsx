import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { session } = useAuth;
  // session(로그인) 상태이면 해당 element로 이동 session 상태가 아니면 sign-in 페이지로 이동
  return <Route {...rest} element={session ? element : <Navigate to="sign-in" />} />;
};

export default ProtectedRoute;
