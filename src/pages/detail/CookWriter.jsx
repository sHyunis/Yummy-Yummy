// ChefIntro.js
import React, { useEffect, useState } from "react";
import supabase from "../../../supabaseClient";
import LoadingIcon from "../../components/LoadingIcon";
import { Introduction, StRecipeContentSection, WriteDiv, WriteImg, WriteImgDiv, WriteNickName } from "./detail.styled";

const CookWriter = ({ recipeId }) => {
  const [cookWriter, setCookWriter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("recipe_info")
        .select(
          `
            user_info!inner(
              NICKNAME,
              USER_IMG_URL,
              INTRODUCTION
            )
          `
        )
        .eq("RECIPE_ID", recipeId);

      if (error) {
        console.error("error: => ", error);
      } else {
        setCookWriter(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [recipeId]);

  // console.log(comments);

  if (loading) return <LoadingIcon isLoading={loading} />;

  return (
    <StRecipeContentSection columns="300px 1fr">
      <WriteImgDiv>
        <WriteImg width="250px" height="229px" src={cookWriter[0].user_info.USER_IMG_URL} className="chef-image" />
      </WriteImgDiv>
      <WriteDiv>
        <WriteNickName>{cookWriter[0].user_info.NICKNAME}</WriteNickName>
        <Introduction>{cookWriter[0].user_info.INTRODUCTION}</Introduction>
      </WriteDiv>
    </StRecipeContentSection>
  );
};
export default CookWriter;
