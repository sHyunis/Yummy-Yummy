import React from "react";
import Input from "./Input";
import Label from "./Label";
import Box from "./Box";
import styled from "styled-components";

const Width = styled.div`
  width: 480px;
  display: flex;
`;

const TextInputBox = (props) => {
  return (
    <>
      <Box>
        <Label>{props.label}</Label>
        <Width>
          <Input place={props.place} />
        </Width>
      </Box>
    </>
  );
};

export default TextInputBox;
