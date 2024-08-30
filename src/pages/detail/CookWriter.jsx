// ChefIntro.js
import React from "react";
import writer from "./writer.png";

import styled from "styled-components";

const CookWriter = () => {
  return (
    <StRecipeContentSection>
      <WriteImgDiv>
        <WriteImg src={writer} alt="요리사 캐릭터" className="chef-image" />
      </WriteImgDiv>
      <WriteDiv>
        <WriteNickName>내 이름은 요리사</WriteNickName>
        <Introduction>
          제가 만드는 대로 만드시면 당신도 백종원이 될 수있어요~~
        </Introduction>
      </WriteDiv>
    </StRecipeContentSection>
  );
};

const WriteImgDiv = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 50%;
`;

const WriteNickName = styled.p`
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  padding: 10px;
`;

const Introduction = styled.p`
  text-align: left;
  font-size: 20px;
  padding: 10px;
`;

const WriteDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const StRecipeContentSection = styled.div`
  width: var(--container-width);
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  align-items: start;
`;
const WriteImg = styled.img`
  width: 250px;
  height: 229px;
  border-radius: 50%;
`;
export default CookWriter;
