import React, { createContext, useState, useContext, useEffect } from "react";
import supabase from "../../base-camp/supabaseClient";
import { useNavigate } from "react-router-dom";

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
  const [signIn, setSignIn] = useState(false);

  const navigate = useNavigate();

  // user 로그인 상태 확인
  const checkSignIn = async () => {
    const { data: session } = await supabase.auth.getSession();
    const isSignIn = !!session?.session;
    setSignIn(isSignIn);
  };

  useEffect(() => {
    // 로그인 확인
    checkSignIn();
  }, []);

  // user 회원가입
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    } else if (!email || !password || !confirmPassword || !nickname) {
      setError("모든 칸을 입력해주세요");
      return;
    }

    // 회원가입
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
        },
      },
    });

    if (error) {
      setError("회원가입 실패: " + error.message);
      setSuccess("");
      return;
    } else {
      setError("");
      setSuccess("회원가입 성공!");
      navigate("/sign-in");
    }
  };

  // user 로그인
  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("로그인 실패: " + error.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("로그인 성공!");
      await checkSignIn();
      navigate("/");
    }
  };

  // user 로그아웃
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSignIn(false); // 로그아웃 후 로그인 상태 초기화
    navigate("/"); // 홈으로 이동
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
        signIn,
        checkSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => useContext(AuthContext);
