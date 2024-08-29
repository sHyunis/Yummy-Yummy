import React from "react";
import styled from "styled-components";

const ContentStyled = styled.div`
  height: fit-content;
  padding: 30px 60px;
  border-bottom: 5px solid var(--yellow-color);
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
