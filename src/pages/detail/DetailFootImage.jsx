import React from "react";
import styled from "styled-components";
import image from "./food.png";

const DetailFootImage = () => {
  return (
    <StDetailFootMainDiv>
      <StDetailFootImage src={image} alt="image" />
      <StDetailFootText>&#60;소개멘트&#62;</StDetailFootText>
      <StDetailFootText>일상이 지칠 땐 당근케이크죠</StDetailFootText>
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
