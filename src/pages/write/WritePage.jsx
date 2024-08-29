import React from "react";

import styled from "styled-components";
import Content from "./components/Content";
import RecipeInfo from "./components/RecipeInfo";
import Ingredients from "./components/Ingredients";
import RecipeCont from "./components/RecipeCont";
import SaveBox from "./components/SaveBox";

const MainContainer = styled.div`
  height: fit-content;
  width: var(--container-width);
  margin: 20px auto;
  border-radius: var(--border-radius);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  color: var(--green-color);
`;

const WritePage = () => {
  return (
    <MainContainer>
      <Content>
        <Title>나만의 레시피 등록하기</Title>
      </Content>
      <Content>
        <RecipeInfo />
      </Content>
      <Content>
        <Ingredients />
        <RecipeCont />
      </Content>
      <Content>
        <SaveBox />
      </Content>
    </MainContainer>
  );
};

export default WritePage;
