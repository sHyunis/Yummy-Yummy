import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";

const RecipeContent = ({ recipeId }) => {
  const [recipeIngredient, setRecipeIngredient] = useState([]);
  const [recipeFlow, setRecipeFlow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const ingredientResponse = await supabase
          .from("recipe_ingredient")
          .select("*")
          .eq("RECIPE_ID", recipeId);

        if (ingredientResponse.error) {
          throw ingredientResponse.error;
        }
        setRecipeIngredient(ingredientResponse.data);

        const flowResponse = await supabase
          .from("recipe_flow")
          .select("*")
          .eq("RECIPE_ID", recipeId);

        if (flowResponse.error) {
          throw flowResponse.error;
        }
        setRecipeFlow(flowResponse.data);
      } catch (error) {
        console.error("error: => ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [recipeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <StRecipeContentSection>
      <IngredientDiv>
        <StyledH2>재료</StyledH2>
        <LineDiv />
        <StIngredientDiv>
          {recipeIngredient.length > 0 ? (
            recipeIngredient.map((ingredient) => (
              <IngredientCard key={ingredient.ING_ID}>
                <div>{ingredient.ING_NAME}</div>
                <div>{ingredient.ING_VOL}</div>
              </IngredientCard>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </StIngredientDiv>
      </IngredientDiv>
      <IngredientDiv>
        <StyledH2>레시피 순서</StyledH2>
        <LineDiv />
        {recipeFlow.map((flow) => (
          <RecipeFlowPTag key={flow.STEP_ID}>
            {flow.RECIPE_STEP}. {flow.RECIPE_CONT}
          </RecipeFlowPTag>
        ))}
      </IngredientDiv>
    </StRecipeContentSection>
  );
};
const RecipeFlowPTag = styled.p`
  margin-bottom: 10px;
`;
const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const StIngredientDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
`;

const LineDiv = styled.div`
  padding: 5px;
  border-bottom: 2px solid var(--yellow-color);
  margin-bottom: 20px;
`;

const IngredientDiv = styled.div`
  padding: 10px;
  text-align: left;
`;

const StRecipeContentSection = styled.div`
  width: var(--container-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
`;

const IngredientCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
  border-radius: 5px;
`;

export default RecipeContent;