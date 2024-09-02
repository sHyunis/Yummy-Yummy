// AuthContext.js
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

    // 로그인 상태확인 후 초기화
    setSuccess("");
    setError("");
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
          NICKNAME: nickname,
          user_img_url: "https://bgazafwsoohqylvwugug.supabase.co/storage/v1/object/public/avatars/default-profile.jpg"
        }
      }
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
      password
    });

    if (error) {
      setError("로그인 실패: " + error.message);
      setSuccess("");
    } else {
      setSuccess("로그인 성공!");
      setError("");
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

  // 카카오로 로그인
  const signInWithKakao = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        scopes: "profile_nickname profile_image" // 'email' 스코프를 제외하고 'profile' 스코프만 요청
      }
    });
    if (error) {
      console.log("카카오 로그인 실패", error.message);
    } else {
      console.log("로그인 성공", data);
    }
  };

  // Gibhub로 로그인
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github"
    });

    if (error) {
      console.log("깃허브 로그인 실패", error.message);
    } else {
      console.log("로그인 성공", data);
    }
  };

  //
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google"
    });

    if (error) {
      console.log("구글 로그인 실패", error.message);
    } else {
      console.log("로그인 성공", data);
    }
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
        signInWithKakao,
        signInWithGithub,
        signInWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => useContext(AuthContext);
