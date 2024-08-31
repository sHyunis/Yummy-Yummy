import React, { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "../../../base-camp/supabaseClient";
import PostCard from "../../components/PostCard";

const EmptyText = styled.div`
  width: 100%;
  padding: 24px;
  background-color: var(--beige-color);
  border-radius: var(--border-radius);
`;

const PostListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 30px;
`;

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("recipe_info")
      .select("*")
      .eq("USER_ID", user.id);

    setPostList(data);
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <>
      {postList.length === 0 ? (
        <EmptyText>작성한 게시글이 없습니다.</EmptyText>
      ) : (
        <PostListStyled>
          {postList.map((post) => (
            <li key={post.RECIPE_ID}>
              <PostCard post={post} />
            </li>
          ))}
        </PostListStyled>
      )}
    </>
  );
};

export default PostList;
