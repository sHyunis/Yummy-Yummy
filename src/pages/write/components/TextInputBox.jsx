import React, { useContext } from "react";
import Input from "./Input";
import Label from "./Label";
import Box from "./Box";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const Width = styled.div`
  width: 600px;
  display: flex;
  min-height: 40px;
  height: ${(props) => {
    return props.height * 2 + "px";
  }};
`;

const TextInputBox = (props) => {
  const { recipeInfoChange } = useContext(WriteContext);

  return (
    <>
      <Box>
        <Label>{props.label}</Label>
        <Width height={props.place.length}>
          <Input place={props.place} onChange={recipeInfoChange} type={props.type} />
        </Width>
      </Box>
    </>
  );
};

export default TextInputBox;
