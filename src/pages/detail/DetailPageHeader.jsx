import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailFootImage from "./DetailFootImage";
import supabase from "../../../base-camp/supabaseClient";
import LodingIcon from "./lodingIcon";

const DetailPageHeader = ({ recipeId }) => {
  const [recipeInfo, setRecipeInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("recipe_info")
        .select("*")
        .eq("RECIPE_ID", recipeId);

      if (error) {
        console.error("error: => ", error);
      } else {
        setRecipeInfo(data);
      }
    };
    fetchData();
  }, [recipeId]);
  // console.log(recipeInfo);

  if (!recipeInfo || recipeInfo.length === 0) {
    return <LodingIcon />;
  }
  return (
    <FoodHeader>
      <FoodCategory>{recipeInfo[0].RECIPE_CTG}</FoodCategory>
      <FoodTitleH1>{recipeInfo[0].RECIPE_TITLE}</FoodTitleH1>
      <DetailFootImage recipeInfo={recipeInfo} />
    </FoodHeader>
  );
};

const FoodHeader = styled.header`
  width: var(--container-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FoodCategory = styled.p`
  font-family: var(--font-family);
  width: 170px;
  height: 35px;
  margin-top: 15px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.6px;
  align-content: center;
`;

const FoodTitleH1 = styled.h1`
  font-family: var(--font-family);

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: var(--container-width);
`;

export default DetailPageHeader;
