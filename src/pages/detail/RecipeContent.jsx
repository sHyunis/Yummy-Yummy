import React, { useEffect, useState } from "react";
import supabase from "../../../base-camp/supabaseClient";
import LoadingIcon from "../../components/LoadingIcon";
import {
  IngredientCard,
  IngredientDiv,
  LineDiv,
  RecipeFlowPTag,
  StIngredientDiv,
  StRecipeContentSection,
  StyledH2
} from "./detail.styled";

const RecipeContent = ({ recipeId }) => {
  const [recipeIngredient, setRecipeIngredient] = useState([]);
  const [recipeFlow, setRecipeFlow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const ingredientResponse = await supabase.from("recipe_ingredient").select("*").eq("RECIPE_ID", recipeId);

        if (ingredientResponse.error) {
          throw ingredientResponse.error;
        }
        setRecipeIngredient(ingredientResponse.data);

        const flowResponse = await supabase.from("recipe_flow").select("*").eq("RECIPE_ID", recipeId);

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

  if (loading) return <LoadingIcon isLoading={loading} />;

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
            <p>등록된 재료가 없어요!!!</p>
          )}
        </StIngredientDiv>
      </IngredientDiv>
      <IngredientDiv>
        <StyledH2>레시피 순서</StyledH2>
        <LineDiv />
        {recipeFlow.length > 0 ? (
          recipeFlow.map((flow) => (
            <RecipeFlowPTag key={flow.FLOW_ID}>
              {flow.RECIPE_STEP}. {flow.RECIPE_CONT}
            </RecipeFlowPTag>
          ))
        ) : (
          <p>등록된 레시피가 없어요!!!</p>
        )}
      </IngredientDiv>
    </StRecipeContentSection>
  );
};
export default RecipeContent;
