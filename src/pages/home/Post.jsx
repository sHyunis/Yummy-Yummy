import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const PostImage = styled.img`
  height: 28.2rem;
  width: 28.2rem;
  object-fit: cover;
`;

const PostContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.4rem;
  padding: 0 1rem;
`;

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const PostExplain = styled.p`
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Post = ({ img, title, description, id }) => {
  const navigate = useNavigate();

  return (
    <Wrap onClick={() => navigate(`/detail/${id}`)}>
      <PostImage src={img} />
      <PostContentWrap>
        <PostTitle>{title}</PostTitle>
        <PostExplain>{description}</PostExplain>
      </PostContentWrap>
    </Wrap>
  );
};

export default Post;
