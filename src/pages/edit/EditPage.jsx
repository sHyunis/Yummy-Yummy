import React from "react";

import styled from "styled-components";
import { WriteProvider } from "../../contexts/WriteContext";
import Content from "../write/components/Content";
import Ingredients from "../write/components/Ingredients";
import RecipeCont from "../write/components/RecipeCont";
import RecipeInfo from "../write/components/RecipeInfo";
import SaveBox from "../write/components/SaveBox";

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
  padding-top: 30px;
`;

const WriteContainer = styled.div`
  width: 100%;
  min-height: 95vh;
  background-color: var(--beige-color);
`;
const EditPage = () => {
  return (
    <WriteProvider>
      <WriteContainer>
        <MainContainer>
          <Title>나만의 레시피 수정하기</Title>
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

export default EditPage;
