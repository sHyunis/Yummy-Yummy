import React from "react";
import Layout from "./shared/Layout";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export default App;
