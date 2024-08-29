import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Wrap = styled.div`
  margin-top: 7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.4rem;
  row-gap: 3rem;
`;

const PostList = () => {
  return (
    <Wrap>
      {Array(8)
        .fill(null)
        .map((_, index) => {
          return <Post key={index} />;
        })}
    </Wrap>
  );
};

export default PostList;
