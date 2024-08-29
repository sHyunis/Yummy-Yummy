import React, { useState } from "react";
import Container from "./Container";
import Label from "./Label";
import RecipeContGroup from "./RecipeContGroup";
import AddRecipeButton from "./AddRecipeButton";

const RecipeCont = () => {
  const [recipeContGroups, setRecipeContGroups] = useState([{}]);

  const addRecipeGroup = () => {
    setRecipeContGroups([...recipeContGroups, {}]);
  };

  return (
    <>
      <Container>
        <Label>레시피 순서</Label>
        {recipeContGroups.map((_, index) => (
          <RecipeContGroup key={`RecipeContGroup-${index}`} num={index + 1} />
        ))}
        <AddRecipeButton onClick={addRecipeGroup}></AddRecipeButton>
      </Container>
    </>
  );
};

export default RecipeCont;
