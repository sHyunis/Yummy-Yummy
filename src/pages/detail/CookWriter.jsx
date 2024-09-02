// ChefIntro.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import LoadingIcon from "../../components/LoadingIcon";

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
    <StRecipeContentSection>
      <WriteImgDiv>
        <WriteImg src={cookWriter[0].user_info.USER_IMG_URL} className="chef-image" />
      </WriteImgDiv>
      <WriteDiv>
        <WriteNickName>{cookWriter[0].user_info.NICKNAME}</WriteNickName>
        <Introduction>{cookWriter[0].user_info.INTRODUCTION}</Introduction>
      </WriteDiv>
    </StRecipeContentSection>
  );
};

const WriteImgDiv = styled.div`
  padding: 10px;
  width: auto;
  height: auto;
  text-align: center;
  border-radius: 50%;
`;

const WriteNickName = styled.p`
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  padding: 10px;
`;

const Introduction = styled.p`
  text-align: left;
  font-size: 20px;
  padding: 10px;
`;

const WriteDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const StRecipeContentSection = styled.div`
  width: var(--container-width);
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  align-items: start;
`;
const WriteImg = styled.img`
  width: 250px;
  height: 229px;
  border-radius: 50%;
`;
export default CookWriter;
