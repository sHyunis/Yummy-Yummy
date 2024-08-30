import React from "react";
import styled from "styled-components";

const RecipeContent = () => {
  return (
    <StRecipeContentSection>
      <IngredientDiv>
        <StyledH2>재료</StyledH2>
        <LineDiv />
        <StIngredientDiv>
          <div>달걀 - 100개</div>
          <div>당근 - 160g</div>
          <div>우유 - 1L</div>
          <div>설탕 - 50g</div>
          <div>밀가루 - 1kg</div>
        </StIngredientDiv>
      </IngredientDiv>
      <IngredientDiv>
        <StyledH2>레시피 순서</StyledH2>
        <LineDiv />
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
        <p>1. 달걀을 믹싱 볼에 넣고 균일한 갈색이 될 때까지 저어줍니다.</p>
        <p>2. 당근을 넣고 섞어줍니다...</p>
      </IngredientDiv>
    </StRecipeContentSection>
  );
};

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const StIngredientDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
`;

const LineDiv = styled.div`
  padding: 5px;
  border-bottom: 2px solid var(--yellow-color);
  margin-bottom: 20px;
`;

const IngredientDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const StRecipeContentSection = styled.div`
  width: var(--container-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
`;

export default RecipeContent;
