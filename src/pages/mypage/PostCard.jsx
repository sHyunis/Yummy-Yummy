import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const PostCard = ({ post }) => {
  const { RECIPE_ID, RECIPE_IMG, RECIPE_TITLE, RECIPE_DESCR } = post;
  const navigate = useNavigate();

  return (
    <Card
      src={RECIPE_IMG}
      title={RECIPE_TITLE}
      description={RECIPE_DESCR}
      onClick={() => navigate(`/detail/${RECIPE_ID}`)}
    />
  );
};

export default PostCard;
