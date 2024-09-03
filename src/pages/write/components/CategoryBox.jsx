import React, { useContext } from "react";
import Label from "./Label";
import styled from "styled-components";
import Box from "./Box";
import { WriteContext } from "../../../contexts/WriteContext";

const CtgSelect = styled.select`
  padding: 0 10px;
  border-radius: var(--border-radius);
  border: none;
  box-shadow: inset 0 0 3px rgb(0, 0, 0, 0.3);
  width: 600px;
  height: 40px;
  appearance: none; /* 기본 화살표 숨기기 */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("https://fonts.gstatic.com/s/i/materialicons/arrow_drop_down/v6/24px.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 30px;
`;

const CategoryBox = (props) => {
  const { ctgChange, recipeInfo } = useContext(WriteContext);
  return (
    <>
      <Box>
        <Label>{props.label}</Label>
        <CtgSelect onChange={(e) => ctgChange(e.target.value)} value={recipeInfo.RECIPE_CTG || ""}>
          <option value="" disabled hidden>
            카테고리를 선택해주세요.
          </option>
          <option value="한식">한식</option>
          <option value="양식">양식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="디저트">디저트</option>
          <option value="퓨전">퓨전</option>
        </CtgSelect>
      </Box>
    </>
  );
};

export default CategoryBox;
