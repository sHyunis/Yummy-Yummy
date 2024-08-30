import React from "react";
import styled from "styled-components";
import image from "./food.png";

const DetailFootImage = ({ recipeInfo }) => {
  return (
    <StDetailFootMainDiv>
      <StDetailFootImage
        src={recipeInfo[0].RECIPE_IMG}
        alt={recipeInfo[0].RECIPE_TITLE}
      />
      <StDetailFootText>&#60;소개멘트&#62;</StDetailFootText>
      <StDetailFootText>{recipeInfo[0].RECIPE_DESCR}</StDetailFootText>
    </StDetailFootMainDiv>
  );
};

const StDetailFootMainDiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StDetailFootImage = styled.img`
  max-width: auto;
  height: 400px;
  object-fit: cover;
`;

const StDetailFootText = styled.p`
  font-family: var(--font-family);
  margin-top: 16px;
  color: #333;
  font-size: 16px;
`;

export default DetailFootImage;
