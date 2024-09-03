import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ProtectedRoute = ({ element }) => {
  const { session } = useAuth();
  const [message, setMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);
  // session(로그인) 상태이면 해당 element로 이동 session 상태가 아니면 sign-in 페이지로 이동

  useEffect(() => {
    console.log(session);
    if (!session) {
      // 사용자가 로그인하지 않았으면 메세지 표시
      setMessage(true);
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000); // 2초 후 로그인페이지 이동

      return () => clearTimeout(timer); // 타이머를 정리
    } else {
      // 로그인 했으면 메세지 표기 x 이동 x
      setMessage(false);
      setRedirect(false);
    }
  }, [session]);

  if (redirect) {
    return <Navigate to="/sign-in" />; // 로그인 페이지로 이동
  }

  return (
    <>
      {message ? (
        <MessageBox>
          권한이 없는 페이지입니다. <br />
          로그인 후 이용 가능합니다.
          <br />
          로그인 페이지로 자동으로 이동합니다.
        </MessageBox>
      ) : (
        element
      )}
    </>
  );
};

const MessageBox = styled.div`
  width: 350px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: 2rem;
  font-weight: 700;
  background-color: var(--beige-color);
  border-radius: var(--border-radius-sm);
  text-align: center;
  border: 1px solid var(--green-color);
`;
export default ProtectedRoute;
