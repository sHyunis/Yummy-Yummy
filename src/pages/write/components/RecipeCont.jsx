import React, { useContext } from "react";
import Container from "./Container";
import Label from "./Label";
import RecipeContGroup from "./RecipeContGroup";
import AddRecipeButton from "./AddRecipeButton";
import { WriteContext } from "../../../contexts/WriteContext";

const RecipeCont = () => {
  const { recipeContGroups } = useContext(WriteContext);

  return (
    <>
      <Container>
        <Label>레시피 순서</Label>
        {recipeContGroups.map((_, index) => (
          <RecipeContGroup
            key={`RecipeContGroup-${index}`}
            num={index + 1}
            index={index}
          />
        ))}
        <AddRecipeButton />
      </Container>
    </>
  );
};

export default RecipeCont;
