import React, { useEffect, useState } from "react";
import DetailFootImage from "./DetailFootImage";
import supabase from "../../../supabaseClient";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../../components/LoadingIcon";
import { FoodCategory, FoodHeader, FoodTitleH1 } from "./detail.styled";

const DetailPageHeader = ({ recipeId }) => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("recipe_info").select("*").eq("RECIPE_ID", recipeId);

      if (error) {
        console.error("error: => ", error);
      } else {
        setRecipeInfo(data);
      }
    };
    fetchData();
  }, [recipeId]);

  if (!recipeInfo || recipeInfo.length === 0) {
    return <LoadingIcon />;
  }
  return (
    <FoodHeader>
      <FoodCategory>{recipeInfo[0].RECIPE_CTG}</FoodCategory>
      <FoodTitleH1>{recipeInfo[0].RECIPE_TITLE}</FoodTitleH1>
      <DetailFootImage recipeInfo={recipeInfo} />
      {userId === recipeInfo[0].USER_ID ? <Button onClick={() => navigate(`/edit/${recipeId}`)}>수정</Button> : null}
    </FoodHeader>
  );
};

export default DetailPageHeader;
