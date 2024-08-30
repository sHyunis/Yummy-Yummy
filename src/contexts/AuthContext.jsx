import React, { createContext, useState, useContext } from "react";
import supabase from "../../base-camp/supabaseClient";

// Context 생성
const AuthContext = createContext();

// Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // user 회원가입
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nickname },
      },
    });

    if (error) {
      setError("회원가입 실패: " + error.message);
    } else {
      setSuccess("회원가입 성공!");
      setError("");
    }
  };

  // user 로그인
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("로그인 실패:" + error.message);
    } else {
      setSuccess("로그인 성공!");
      setError("");
    }
  };

  // user 로그아웃
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        nickname,
        setNickname,
        error,
        success,
        handleSignUp,
        handleSignIn,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => useContext(AuthContext);
