import React from "react";
import styled from "styled-components";
import DetailPageHeader from "./DetailPageHeader";
import RecipeContent from "./RecipeContent";
import CookWriter from "./CookWriter";
import Comments from "./Comments";
import CommentWrite from "./CommentWrite";

const DetailPage = () => {
  return (
    <>
      <Container>
        <DetailPageHeader />
      </Container>

      <DivisionLineDiv />
      <Container>
        <RecipeContent />
      </Container>

      <DivisionLineDiv />
      <Container>
        <CookWriter />
      </Container>

      <DivisionLineDiv />
      <Container>
        <Comments />
      </Container>

      <DivisionLineDiv />
      <Container>
        <CommentWrite />
      </Container>
    </>
  );
};
const Container = styled.div`
  width: var(--container-width);
  background-color: var(--gray4-color);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivisionLineDiv = styled.div`
  width: var(--container-width);
  height: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default DetailPage;
