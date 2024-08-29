import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostImage = styled.div`
  height: 28.2rem;
  width: 28.2rem;
  background-color: gray;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Post = () => {
  return (
    <Wrap>
      <PostImage />
      <PostContentWrap>
        <PostTitle>당근당근 당근케이크</PostTitle>
        <PostExplain>
          맛있는 당근케이크를 만들어보겠습니다. 맛있는 당근케이크를
          만들어보겠습니다. 맛있는 당근케이크를 만들어보겠습니다.
        </PostExplain>
      </PostContentWrap>
    </Wrap>
  );
};

export default Post;
