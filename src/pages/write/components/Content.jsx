import React from "react";
import styled from "styled-components";

const ContentStyled = styled.div`
  height: fit-content;
  padding: 20px 60px;
  border-bottom: 10px solid var(--beige-color);
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
