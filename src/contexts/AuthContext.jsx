import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import {} from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {}, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
