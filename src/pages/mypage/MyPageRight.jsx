import React from "react";
import styled from "styled-components";

const MyPageRightStyled = styled.div`
  width: calc(100% - 278px - 50px);
  flex: 1 0 auto;
`;

const MyPageRight = ({ children }) => {
  return <MyPageRightStyled>{children}</MyPageRightStyled>;
};

export default MyPageRight;
