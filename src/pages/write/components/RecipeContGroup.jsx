import React, { useContext } from "react";
import styled from "styled-components";
import Input from "./Input";
import { WriteContext } from "../../../contexts/WriteContext";

const GroupStyle = styled.div`
  display: flex;
  width: 480px;
  height: 100px;
  justify-content: space-between;
  padding: 10px 0;
`;

const InputSize = styled.div`
  width: 420px;
  height: 80px;
  display: flex;
`;

const RecipeContGroup = ({ index }) => {
  const { removeRecipeGroup, recipeContChange } = useContext(WriteContext);
  const ex = "조리 전, 미역을 충분히 불려 놓습니다.";
  return (
    <>
      <GroupStyle>
        {index + 1}
        <InputSize>
          <Input place={ex} index={index} onChange={recipeContChange} type="RECIPE_CONT" table="flow"></Input>
        </InputSize>
        <p onClick={() => removeRecipeGroup(index)} style={{ cursor: "pointer", opacity: 0.5 }}>
          x
        </p>
      </GroupStyle>
    </>
  );
};

export default RecipeContGroup;
