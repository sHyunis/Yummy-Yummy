import React from "react";
import Input from "./Input";
import Label from "./Label";
import Box from "./Box";
import styled from "styled-components";

const Width = styled.div`
  width: 600px;
  display: flex;
  min-height: 30px;
  height: ${(props) => {
    return props.height * 1.5 + "px";
  }};
`;

const TextInputBox = (props) => {
  return (
    <>
      <Box>
        <Label>{props.label}</Label>
        <Width height={props.place.length}>
          <Input place={props.place} />
        </Width>
      </Box>
    </>
  );
};

export default TextInputBox;
