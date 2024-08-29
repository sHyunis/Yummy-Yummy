import React from "react";
import TextInputBox from "./TextInputBox";
import CategoryBox from "./CategoryBox";
import styled from "styled-components";
import MainImage from "./MainImage";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RecipeInfo = () => {
  const title = "예) 소고기 미역국";
  const description = `요리에 대한 설명을 간략하게 적어주세요! 
예) 우리집 만의 특별한 소고기 미역국 레시피`;

  return (
    <>
      <InfoBox>
        <TextInputBox label="레시피 제목" place={title} />
        <TextInputBox label="레시피 소개" place={description} />
        <CategoryBox label="카테고리" />
      </InfoBox>
      <MainImage />
    </>
  );
};

export default RecipeInfo;
