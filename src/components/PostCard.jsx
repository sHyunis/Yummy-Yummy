import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: var(--gray4-color);
  border-radius: var(--border-radius);
  object-fit: cover;
`;

const PostContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
`;

const PostTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const PostDescription = styled.p`
  color: var(--gray2-color);
  font-size: 1.4rem;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PostCard = ({ post }) => {
  const { RECIPE_ID, RECIPE_IMG, RECIPE_TITLE, RECIPE_DESCR } = post;
  const navigate = useNavigate();

  return (
    <PostCardStyled onClick={() => navigate(`/detail/${RECIPE_ID}`)}>
      <PostImage src={RECIPE_IMG} />
      <PostContentWrap>
        <PostTitle>{RECIPE_TITLE}</PostTitle>
        <PostDescription>{RECIPE_DESCR}</PostDescription>
      </PostContentWrap>
    </PostCardStyled>
  );
};

export default PostCard;
