import React from "react";
import Label from "./Label";
import styled from "styled-components";
import Box from "./Box";

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
  return (
    <>
      <Box>
        <Label>{props.label}</Label>
        <CtgSelect>
          <option>한식</option>
          <option>양식</option>
          <option>중식</option>
          <option>일식</option>
          <option>디저트</option>
          <option>퓨전</option>
        </CtgSelect>
      </Box>
    </>
  );
};

export default CategoryBox;
