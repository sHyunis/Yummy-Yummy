import React from "react";
import styled from "styled-components";
import DetailFootImage from "./DetailFootImage";

const DetailPageHeader = () => {
  return (
    <FoodHeader>
      <FoodCategory>디저트</FoodCategory>
      <FoodTitleH1>당근케이크</FoodTitleH1>
      <DetailFootImage />
    </FoodHeader>
  );
};

const FoodHeader = styled.header`
  width: var(--container-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FoodCategory = styled.p`
  font-family: var(--font-family);
  width: 170px;
  height: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.6px;
  align-content: center;
`;

const FoodTitleH1 = styled.h1`
  font-family: var(--font-family);

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: var(--container-width);
`;

export default DetailPageHeader;
