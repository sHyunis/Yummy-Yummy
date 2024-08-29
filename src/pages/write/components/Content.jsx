import React from "react";
import styled from "styled-components";

const ContBox = styled.div`
  height: fit-content;
  padding: 20px;
  border-bottom: 10px solid white;
`;
const Content = ({ children }) => {
  return <ContBox>{children}</ContBox>;
};

export default Content;
