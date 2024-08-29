import React from "react";
import Input from "./Input";
import styled from "styled-components";

const Box = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
`;

const TextInputBox = (props) => {
  return (
    <>
      <Box>
        <label>{props.label}</label>
        <Input place={props.place} />
      </Box>
    </>
  );
};

export default TextInputBox;
