import React, { useState } from "react";
import Label from "./Label";
import IngredientGroup from "./IngredientGroup";
import Container from "./Container";
import AddIngButton from "./AddIngButton";

const Ingredients = () => {
  const [ingredientGroups, setIngredientGroups] = useState([{}, {}]);

  const addIngGroup = () => {
    setIngredientGroups([...ingredientGroups, {}]);
  };

  return (
    <>
      <Container>
        <Label>재료 정보</Label>
        {ingredientGroups.map((_, index) => (
          <IngredientGroup key={`IngGroup-${index}`} />
        ))}
        <AddIngButton onClick={addIngGroup}></AddIngButton>
      </Container>
    </>
  );
};

export default Ingredients;
