import React, { useContext } from "react";
import styled from "styled-components";
import { WriteContext } from "../../../contexts/WriteContext";

const InputStyled = styled.textarea`
  padding: 8px 16px;
  font-size: 1.4rem;
  font-family: var(--font-family);
  border: 1px solid var(--gray3-color);
  border-radius: var(--border-radius);
  width: 100%;
  height: 100%;
  resize: none;
`;

const Input = ({ place, onChange, type, index, table }) => {
  const { recipeInfo, ingredientGroups, recipeContGroups } = useContext(WriteContext);

  let value = "";
  if (table === "info") {
    value = recipeInfo?.[type]; // recipeInfo에서 type에 해당하는 값
  } else if (table === "ing") {
    value = ingredientGroups[index]?.[type]; // ingredientGroups 배열에서 index에 해당하는 값
  } else if (table === "flow") {
    value = recipeContGroups[index]?.[type]; // recipeContGroups 배열에서 index에 해당하는 값
  }

  return <InputStyled value={value} placeholder={place} onChange={(e) => onChange(e.target.value, type, index)} />;
};

export default Input;
