import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router />
    </>
  );
};

export default App;
