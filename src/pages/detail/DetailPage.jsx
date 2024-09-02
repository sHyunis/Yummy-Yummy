import React, { useState } from "react";
import styled from "styled-components";
import DetailPageHeader from "./DetailPageHeader";
import RecipeContent from "./RecipeContent";
import CookWriter from "./CookWriter";
import Comments from "./Comments";
import CommentWrite from "./CommentWrite";
import { useParams } from "react-router-dom";
import { Container, DivisionLineDiv } from "./styled";

const DetailPage = () => {
  const params = useParams();
  const recipeId = Number(params.id);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCommentAdded = () => {
    setRefreshKey((prevKey) => prevKey + 1); // 댓글 작성 후 Comments 컴포넌트 새로고침
  };

  return (
    <>
      <Container>
        <DetailPageHeader recipeId={recipeId} />
      </Container>

      <DivisionLineDiv />
      <Container>
        <RecipeContent recipeId={recipeId} />
      </Container>

      <DivisionLineDiv />
      <Container>
        <CookWriter recipeId={recipeId} />
      </Container>

      <DivisionLineDiv />
      <Container>
        <Comments key={refreshKey} recipeId={recipeId} />
      </Container>

      <DivisionLineDiv />
      <Container>
        <CommentWrite recipeId={recipeId} onCommentAdded={handleCommentAdded} />
      </Container>
    </>
  );
};

export default DetailPage;
