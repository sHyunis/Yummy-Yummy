import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <GlobalStyle />

        <Router />
      </UserProvider>
    </>
  );
};

export default App;
