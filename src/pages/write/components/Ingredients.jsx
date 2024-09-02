import React, { useContext } from "react";
import Label from "./Label";
import IngredientGroup from "./IngredientGroup";
import Container from "./Container";
import AddIngButton from "./AddIngButton";
import { WriteContext } from "../../../contexts/WriteContext";

const Ingredients = () => {
  const { ingredientGroups } = useContext(WriteContext);

  return (
    <>
      <Container>
        <Label>재료 정보</Label>
        {ingredientGroups.map((_, index) => (
          <IngredientGroup key={`IngGroup-${index}`} index={index} />
        ))}
        <AddIngButton />
      </Container>
    </>
  );
};

export default Ingredients;
