import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../../components/ProfileImage";

const CommentCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  background-color: var(--beige-color);
  border-radius: var(--border-radius);
  cursor: pointer;
`;

const CommentText = styled.p`
  width: calc(100% - 60px - 24px);
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const CommentCard = ({ comment }) => {
  const { recipe_id, cmt_cont } = comment;
  const navigate = useNavigate();

  return (
    <CommentCardStyled onClick={() => navigate(`/detail/${recipe_id}`)}>
      <ProfileImage width="60px" />
      <CommentText>{cmt_cont}</CommentText>
    </CommentCardStyled>
  );
};

export default CommentCard;
