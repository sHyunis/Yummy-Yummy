import React from "react";

import styled from "styled-components";
import Content from "./components/Content";
import RecipeInfo from "./components/RecipeInfo";
import Ingredients from "./components/Ingredients";
import RecipeCont from "./components/RecipeCont";
import SaveBox from "./components/SaveBox";
import { WriteProvider } from "../../contexts/WriteContext";

const MainContainer = styled.div`
  height: fit-content;
  width: var(--container-width);
  margin: 0 auto;
  border-radius: var(--border-radius);
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  color: var(--green-color);
  padding-bottom: 30px;
  padding-left: 60px;
  border-bottom: 5px solid var(--yellow-color);
`;

const WriteContainer = styled.div`
  width: 100%;
  min-height: 95vh;
  padding: 20px;
  background-color: var(--beige-color);
`;

const WritePage = () => {
  return (
    <WriteProvider>
      <WriteContainer>
        <MainContainer>
          <Title>나만의 레시피 등록하기</Title>
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
      </WriteContainer>
    </WriteProvider>
  );
};

export default WritePage;
