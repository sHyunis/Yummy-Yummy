import React from "react";
import styled from "styled-components";
import Input from "./Input";

const GroupStyle = styled.div`
  display: flex;
  width: 450px;
  height: 120px;
  justify-content: space-between;
  padding: 10px 0;
`;

const InputSize = styled.div`
  width: 420px;
  height: 100px;
  display: flex;
`;

const RecipeContGroup = ({ num }) => {
  return (
    <>
      <GroupStyle>
        {num}.
        <InputSize>
          <Input></Input>
        </InputSize>
      </GroupStyle>
    </>
  );
};

export default RecipeContGroup;
